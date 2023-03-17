import { useState } from "react"
import validation from "./validation";


export default function Form({loguin}){
    const [userData, setUserData]=useState({
        username: "",
        password: "",
    });
    const [errors, setErrors]=useState({
        username: "",
        password: "",
    });
  
    const handleInputChange =(event)=>{
        const property = event.target.name;
        const value = event.taget.value;

        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, errors, setErrors)
        
    }
    const sumbitHandler=(event)=>{
        event.preventDefault();
        loguin(userData);
    }
    return(
        <Form onSubmit>
            <div>
                <label htmlFor="Username">Username:</label>
                <input type="text" name="Username" value={userData.username} onChange={handleInputChange} ></input>
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="Password">Password:</label>
                <input type="text" name="Password" value={userData.Password} onChange={handleInputChange} ></input>
                <p>{errors.password}</p>
            </div>

            <button>LOGIN</button>
        </Form>
    )
}