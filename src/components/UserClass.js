import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'dummy',
                location: "Default"
            }
        }

        // console.log(this.props.name + "Child Constructor");

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/amitgusain29")
        const json = await data.json()

        this.setState({
            userInfo: json,
        })

        console.log(json);

        this.timer = setInterval(() => {
            console.log("Class Interval");
        }, 1000)


        // console.log(this.props.name + "Child Component Did Mount");
    }

    componentDidUpdate() {
        // console.log("Component did Update");
    }

    componentWillUnmount() {
        // console.log("Component will UnMount");
        clearInterval(this.timer)
        console.log("Class clear");
        
    }


    render() {


        const { name, id, avatar_url } = this.state.userInfo

        // console.log(this.props.name + "Child Render");

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {id}</h3>
                <h4>Contact: @amitgusain29</h4>
            </div>
        )
    }
}

export default UserClass;