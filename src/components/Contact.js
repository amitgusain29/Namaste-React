import { useState } from "react";

const Contact = () => {
    return (
        <div className="text-center m-3">
            <h1 className="font-bold  text-2xl">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="Name" />
                <input type="text" className="border border-black m-2 p-2" placeholder="Message" />
                <button className="border borber-black bg-gray-400 p-2">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
