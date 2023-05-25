import { useState } from "react";
import axios from "axios";
import InputField from "./InputField.jsx";
import SubmitButton from "./SubmitButton.jsx";

const Form = ({ onSubmit, isRegisterMode }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username, password);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <InputField
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                placeholder="Username"
            />
            <InputField
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
            />
            <SubmitButton>{isRegisterMode ? "Register" : "Login"}</SubmitButton>
        </form>
    );
};

export default Form;
