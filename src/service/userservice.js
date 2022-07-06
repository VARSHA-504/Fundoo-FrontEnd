import axios from 'axios';

export const userSignin = (userObj) =>{

    let response = axios.post('http://localhost:5000/api/v1/users/login', userObj)
    return response;
}

export const userSignup = (signupObj) =>{

    let response = axios.post('http://localhost:5000/api/v1/users/registration', signupObj)
    return response;
}