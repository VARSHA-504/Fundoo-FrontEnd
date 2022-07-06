import React from "react";
import '../signup/signup.css'
import { TextField } from '@mui/material';
import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { userSignup } from "../../service/userservice";

const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailIdRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signup(){

    const [signupObj, setSignupObj] = React.useState({firstName: '', lastName: '', emailId: '', password: '', confirmPassword: ''});
    const [regexObj, setRegexObj] = React.useState({firstNameBorder: false, firstNameHelper: '',  lastNameBorder: false, lastNameHelper: '', emailIdBorder: false, emailIdHelper: 'You can use letters, numbers & periods', passwordBorder: false, passwordHelper: '', confirmPasswordBorder: false, confirmPasswordHelper: ''});

    const getFirstName = (event) => {
        setSignupObj((prevState) => ({...prevState,firstName: event.target.value}));
        console.log(signupObj.firstName)
    }

    const getLastName = (event) => {
        setSignupObj((prevState) => ({...prevState,lastName: event.target.value}));
    }

    const getEmailId = (event) => {
        setSignupObj((prevState) => ({...prevState,emailId: event.target.value}));
        
    }

    const getPassword = (event) => {
        setSignupObj((prevState) => ({...prevState,password: event.target.value}));
    
    }

    const getConfirmPassword = (event) => {
        setSignupObj((prevState) => ({...prevState,confirmPassword: event.target.value}));
    }

    const getUserDetails = () => {
        
        let firstNameTest = firstNameRegex.test(signupObj.firstName);
        let lastNameTest = lastNameRegex.test(signupObj.lastName);
        let emailIdTest = emailIdRegex.test(signupObj.emailId);
        let passwordTest = passwordRegex.test(signupObj.password);
        let confirmPasswordTest = passwordRegex.test(signupObj.confirmPassword);

        if(firstNameTest === false) {
            setRegexObj((prevState) => ({...prevState,firstNameBorder:true,firstNameHelper: 'Enter valid FirstName'}));
        }else if(firstNameTest === true) {
            setRegexObj((prevState) => ({...prevState,firstNameBorder:false,firstNameHelper: ''}));
        }

        if(lastNameTest === false) {
            setRegexObj((prevState) => ({...prevState,lastNameBorder:true,lastNameHelper: 'Enter valid LastName'}));
        }else if(lastNameTest === true) {
            setRegexObj((prevState) => ({...prevState,lastNameBorder:false,lastNameHelper: ''}));
        }

        if(emailIdTest === false) {
            setRegexObj((prevState) => ({...prevState,emailIdBorder:true,emailIdHelper: 'Enter valid email'}));
        }else if(emailIdTest === true) {
            setRegexObj((prevState) => ({...prevState,emailIdBorder:false,emailIdHelper: ''}));
        }

        if(passwordTest === false) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:true,passwordHelper: 'Enter correct password'}));
        }else if(passwordTest === true) {
            setRegexObj((prevState) => ({...prevState,passwordBorder:false,passwordHelper: ''}));
        }

        if(confirmPasswordTest === false) {
            setRegexObj((prevState) => ({...prevState,confirmPasswordBorder:true, confirmPasswordHelper: 'Enter correct password'}));
        }else if(confirmPasswordTest === true) {
            setRegexObj((prevState) => ({...prevState,conPasswordBorder:false, confirmPasswordHelper: ''}));
        }
        if(firstNameTest === true && lastNameTest === true && emailIdTest === true && passwordTest === true && confirmPasswordTest === true){
            userSignup(signupObj).then((response)=> {
            console.log(signupObj)
            console.log(response);
            localStorage.setItem('token', response.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    }

    return <div className="parent">
            <div className="signupMain">
    
               <div className="leftside">
                    <div className="text">
                        <div className="text1">
                            <div style={{color: 'blue'}}>G</div>
                            <div style={{color: 'red'}}>o</div>
                            <div style={{color: 'yellow'}}>o</div>
                            <div style={{color: 'blue'}}>g</div>
                            <div style={{color: 'green'}}>l</div>
                            <div style={{color: 'red'}}>e</div>
                        </div>
                        <div className="text2">Create your Google Account</div>
                    </div>
                    <div className="namesection">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" className="firstname"size="small" error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} onChange={getFirstName}/>  
                        <div className="lastname"><TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" error={regexObj.lastNameBorder} helperText={regexObj.lastNameHelper}  onChange={getLastName}/></div>
                    </div>
                    <div className="mailsection">
                        <TextField id="outlined-basic" label="Username" variant="outlined" className="mail" size="small"   error={regexObj.emailIdBorder} helperText={regexObj.emailIdHelper}  onChange={getEmailId} />
                
                    </div>
                    <div className="mailtext2">Use my current email address instead</div>
                    <div className="passwordsection">
                        <div className="passwordpart"><TextField id="outlined-basic" label="password" variant="outlined" size="small"  error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} onChange={getPassword}/></div>
                        <div className="confirmpart"><TextField id="outlined-basic" label="confirm" variant="outlined" size="small" error={regexObj.confirmPasswordBorder} helperText={regexObj.confirmPasswordHelper} onChange={getConfirmPassword}/></div>
                    </div>
                    <div className="passwordtext">Use 8 or more characters with a mix of letters, numbers & symbols</div>
                    <div className="checboxsection">
                        <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked  size="small"  />} label="Show Password"  />
                        </FormGroup>
                    </div>
                    <div className="lastsection">
                        <div className="lastsectiontext">Sign in instead</div>
                        <div className="button">
                        <Button variant="contained"  onClick={getUserDetails}>Next</Button>
                        </div>
                    </div>
               </div>
               <div className="rightside">
                    <div className="rightsideimg">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="rightside icon" className="picture"></img>
                    </div>
                    <div className="righttext">One account. All of Google  working for you</div>
                </div>
         </div>
    </div>

}



export default Signup