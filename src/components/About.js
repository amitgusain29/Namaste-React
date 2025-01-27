import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";



class About extends React.Component {
    constructor(props) {
        super(props)

        // console.log("Parent Constructor");

    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render() {
        // console.log("Parent Render");

        return (
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web Series</h1>
                <div>
                    LoggedInUser
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>

                </div>
                <User name={"Amit Gusain(function)"} location={"Dehradun(function)"} />
                <UserClass name={"Amit Gusain(Class)"} location={"Mumbai(Class)"} />
            </div >
        )
    }
}

export default About;