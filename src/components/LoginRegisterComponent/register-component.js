import React, { useState} from "react";
import {useHistory} from "react-router";
import { RegisterUser} from "../../apiCalls/api-calls";
import Button from "../Button";
import {Alert} from "@material-ui/lab";

const RegisterComponent = () =>{

    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [name,setName] = useState()
    const [showError, setShowError] = useState(false)
    const history = useHistory();
    const onRegister = () =>{
        RegisterUser({name,email,password})
            .then((res)=>{

                console.log(res)
                if("errors" in res){
                    if ("message" in res){
                        alert(res['message'])
                        return
                    }
                    alert(res['errors'])
                    return
                }
                if("code" in res){
                    if(res['code']===11000){
                        alert("User Already Exists")
                        return
                    }
                }
                setEmail('')
                setPassword('')
                setName('')
                alert("Registered Successfully. Please login")
        }).catch((e)=>{setShowError(true)})
    }


    return(
        <div className='container'>
            <div className='task'>
                <h2>Calorie Manager | Register</h2>
            </div>
            {
                showError && <Alert severity="warning">Some Issue</Alert>
            }
            <form className='add-form' onSubmit={(e)=>{e.preventDefault()}}>
                <div className='form-control'>
                    <label>Full Name</label>
                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button className="center" text={'Register'} color="green" onClick={onRegister}/>
                <br/>
            <Button className = 'center' text={'Back to Login!'} onClick={()=>history.push('/')} />

            </form>
        </div>
    )
}

export default RegisterComponent