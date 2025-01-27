import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    password:"123"
})


export default UserContext;