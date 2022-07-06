import React from 'react';
import '../../pages/signin/signin.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { userSignin } from '../../service/userservice';
import { useHistory } from 'react-router-dom';


const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
 const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin(){

    const history = useHistory();
    // const[email, setEmail]= React.useState('');
    // const[password, setPassword]= React.useState('');
    const [signinObj, setSigninObj] = React.useState({emaiId: '', password: ''});
    const[regexObj, setRegexObj]= React.useState({emailborder: false, emailHelper: '', passwordborder:false, passwordHelper: ''});

    const getEmail = (event) => {
        setSigninObj((prevState) => ({...prevState,emailId: event.target.value}));
        // console.log(signinObj.email);
    }

    const getPassword = (event) => {
        setSigninObj((prevState) => ({...prevState,password: event.target.value}));
        // console.log(signinObj.password);
    }

   
    const getUserDetails = () =>{
        // console.log(signinObj.email, signinObj.password)
        let emailTest = emailRegex.test(signinObj.emailId);
        let passwordTest = passwordRegex.test(signinObj.password);
            if(emailTest === false){
                setRegexObj((prevState) => ({...prevState,emailborder:true, emailHelper: 'Enter valid email'}));
            }
            else if(emailTest === true){
                setRegexObj((prevState) => ({...prevState,emailborder:false, emailHelper: ''}));
            }
            if(passwordTest === false){
                setRegexObj((prevState) => ({...prevState,passwordborder:true, passwordHelper: 'Enter correct Password'}));
            }
            else if(passwordTest === true){
                setRegexObj((prevState) => ({...prevState,passwordborder:false, passwordHelper: ''}));
            }
            if(emailTest === true && passwordTest === true){
                    userSignin(signinObj).then((response)=> {
                    console.log(signinObj)
                    console.log(response);
                    localStorage.setItem('token', response.data.data)
                    history.push('/Dashboard');
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
    


    }

    return( 
        <div className='parent-box'>
            <div className='signin'>
                <div className='firsttext'>
                    <div className='text1'>
                            <div style={{color: 'blue'}}>G</div>
                            <div style={{color: 'red'}}>o</div>
                            <div style={{color: 'yellow'}}>o</div>
                            <div style={{color: 'blue'}}>g</div>
                            <div style={{color: 'green'}}>l</div>
                            <div style={{color: 'red'}}>e</div>
                    </div>
                    <div className='text2'>Sign in</div>
                    <div className='text3'>Use your Google account</div>
                </div>
                <div className='emailbox'>
                    <TextField id="outlined-basic" label="Email or phone" variant="outlined" className="mail" size="small" error={regexObj.emailborder} helperText={regexObj.emailHelper} onChange={getEmail}/>
                    <div className='mailtext'>Forgot mail ?</div>
                </div>
                <div className='passwordbox'>
                    <TextField id="outlined-basic" label="Password" variant="outlined" className="password" size="small" error={regexObj.passwordborder} helperText={regexObj.passwordHelper} onChange={getPassword}/>
                </div>    
                <div className='learnmore'>Not your computer? Use a private browsing window to sign in . Learn now </div>
                
                <div className='createacc'>
                    <div className='createaccount'>Create Account</div>
                    <div className='button'>
                            <Button variant="contained" onClick={getUserDetails}>Next</Button>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Signin