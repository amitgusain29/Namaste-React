import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component {
    constructor(props) {
        super(props)

        console.log("Parent Constructor");

    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() { 
        console.log("Parent Render");
 
        return (
            <div>
                <h1>About</h1>
                <h1>This is Namaste React Web Series</h1>
                {/* <User name={"Amit Gusain(function)"} /> */}
                <UserClass name={"Amit Gusain(Class)"} location={"Mumbai(Class)"} />
                <UserClass name={"Amit Gusain2(Class)"} location={"Mumbai(Class)"} />
            </div >
        )
    }
}

export default About;