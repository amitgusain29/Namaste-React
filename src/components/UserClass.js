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
        return (
            <div className="bg-white rounded-xl shadow-lg border border-orange-200 p-6 m-4 max-w-sm mx-auto flex flex-col items-center">
                <img src={avatar_url} alt="avatar" className="w-24 h-24 rounded-full border-4 border-orange-400 shadow mb-4 object-cover" />
                <h2 className="text-xl font-semibold mb-2">Name: <span className="text-orange-600">{name}</span></h2>
                <h3 className="text-gray-700">Location: <span className="text-orange-600">{id}</span></h3>
                <h4 className="text-gray-500 mt-1">Contact: <span className="text-orange-400">@amitgusain29</span></h4>
            </div>
        )
    }
}

export default UserClass;