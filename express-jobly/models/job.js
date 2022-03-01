"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");
const Company = require("./company");

class Job {
    static async create(data) {
        const result = await db.query(
            `INSERT INTO jobs (title,
                               salary,
                               equity,
                               company_handle)
             VALUES ($1, $2, $3, $4)
             RETURNING id, title, salary, equity, company_handle AS "companyHandle"`,
            [
                data.title,
                data.salary,
                data.equity,
                data.companyHandle,
            ]);
        let job = result.rows[0];

        return job;
    }

    static async findAll({ minSalary, hasEquity, title } = {}) {
        let query = `SELECT j.id,
                            j.title,
                            j.salary,
                            j.equity,
                            j.company_handle AS "companyHandle",
                            c.name AS "companyName"
                    FROM jobs j
                    LEFT JOIN companies AS c ON c.handle = j.company_handle`;
        let whereExpressions = [];
        let queryValues = [];

        // For each possible search term, add to whereExpressions and
        // queryValues so we can generate the right SQL

        if (minSalary !== undefined) {
            queryValues.push(minSalary);
            whereExpressions.push(`salary >= $${queryValues.length}`);
        }

        if (hasEquity === true) {
            whereExpressions.push(`equity > 0`);
        }

        if (title !== undefined) {
            queryValues.push(`%${title}%`);
            whereExpressions.push(`title ILIKE $${queryValues.length}`);
        }

        if (whereExpressions.length > 0) {
            query += " WHERE " + whereExpressions.join(" AND ");
        }
        // Finalize query and return results

        query += " ORDER BY title";
        const jobsRes = await db.query(query, queryValues);
        return jobsRes.rows;
    }

    /** Given a job id, return data about job.
     *
     * Returns { id, title, salary, equity, companyHandle, company }
     *   where company is { handle, name, description, numEmployees, logoUrl }
     *
     * Throws NotFoundError if not found.
     **/

    static async get(id) {
        const jobRes = await db.query(
            `SELECT id,
                    title,
                    salary,
                    equity,
                    companies.handle AS "companyHandle",
                    companies.name AS "companyName",
                    companies.description AS "companyDescription",
                    companies.num_employees AS "companyNumEmployees",
                    companies.logo_url AS "companyLogoUrl"
            FROM jobs
            LEFT JOIN companies
            ON jobs.company_handle = companies.handle
            WHERE id = $1`,
            [id]);

        if (!jobRes.rows[0]) throw new NotFoundError(`No job id: ${id}`);

        const {
            title,
            salary,
            equity,
            companyHandle,
            companyName,
            companyDescription,
            companyNumEmployees,
            companyLogoUrl
        } = jobRes.rows[0];

        const job = {
            id: id,
            title,
            salary,
            equity,
            company: {
                handle: companyHandle,
                name: companyName,
                description: companyDescription,
                numEmployees: companyNumEmployees,
                logoUrl: companyLogoUrl
            }
        };

        return job;
    }

    /** Update job data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include: { title, salary, equity }
   *
   * Returns { id, title, salary, equity, companyHandle }
   *
   * Throws NotFoundError if not found.
   */

    static async update(id, data) {
        const { setCols, values } = sqlForPartialUpdate(data, {});
        const idVarIdx = "$" + (values.length + 1);

        const querySql = `UPDATE jobs
                            SET ${setCols}
                            WHERE id = ${idVarIdx}
                            RETURNING id,
                                    title,
                                    salary,
                                    equity,
                                    company_handle AS "companyHandle"`;
        const result = await db.query(querySql, [...values, id]);
        const job = result.rows[0];

        if (!job) throw new NotFoundError(`No job id: ${id}`);
        return job;
    }


    /** Delete given job from database; returns undefined.
    *
    * Throws NotFoundError if job not found.
    **/

    static async remove(id) {
        const result = await db.query(
            `DELETE
               FROM jobs
               WHERE id = $1
               RETURNING id`,
            [id]);
        const job = result.rows[0];

        if (!job) throw new NotFoundError(`No job id: ${id}`);
    }
}

module.exports = Job;
