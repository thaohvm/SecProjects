import React from "react";

//initializes a context we can use in other components and assign value to.
const CurrentUserContext = React.createContext({
    currentUser: null,
    appliedJobs: [],
    addAppliedJob: () => {},
});

export default CurrentUserContext;
