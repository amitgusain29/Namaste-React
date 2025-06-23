import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-orange-200 p-8 mt-8">
                <h1 className="text-3xl font-bold text-orange-500 mb-2">About</h1>
                <h2 className="text-xl text-gray-700 mb-6">This is Namaste React Web Series</h2>
                <div className="mb-6">
                    <span className="font-semibold text-gray-800">LoggedInUser: </span>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <span className="text-orange-600 font-bold text-lg">{loggedInUser}</span>
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