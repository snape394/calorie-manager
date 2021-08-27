import {useState} from "react";
import {useHistory} from "react-router";
import {LoginUser} from "../../apiCalls/api-calls";
import Button from "../Button";
import Image from "../../static/images/calorie.png"

const LoginComponent = () =>{
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory();
    const onLogin = () =>{
        LoginUser({email,password})
            .then((res)=>{
                if("errors" in res){
                    alert(res['errors'])
                    return
                }
                localStorage.setItem("cal-user", res.user.name);
                localStorage.setItem("cal-id", res.user._id);
                localStorage.setItem("cal-token", res.token);
                setPassword('')
                setEmail('')
                history.push('/home')
            })
            .catch((e)=>alert(e))
        // history.push('/home')
    }

    // useEffect(()=>{
    //     if(localStorage.getItem('cal-id')){
    //         history.push('/home')
    //     }
    // })

    return(
        <div className='container'>
            <img src={Image} alt={"Diet Balance"}/>
            <h2>
                Calorie Manager | Log in
            </h2>
        <form className='add-form' onSubmit={(e)=>e.preventDefault()}>
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
            <Button className = 'center' text={'Login'} color={'green'} onClick={onLogin}/>
            <br/>
            <Button className = 'center' text={'Register'} onClick={()=>history.push('/register')} />
        </form>
        </div>
    )
}

export default LoginComponent