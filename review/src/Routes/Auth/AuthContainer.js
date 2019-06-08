import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter"; 
import useInput from "../../Hooks/useInput";

export default () => {
    const [action, setAction] = useState("logIn");
    const username = useInput("");
    const password = useInput("");
    const firstName = useInput("");
    const lastName = useInput("");
    const email = useInput("");
    
    return (
        <AuthPresenter 
            action={action}
            setAction={setAction} 
            username={username}
            password={password}
            firstName={firstName}
            lastName={lastName}
            email={email}

        />
    )
}