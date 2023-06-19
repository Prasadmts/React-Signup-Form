// short-cut cmd rafce -> this create react arrow function component & export :
import React, { useState } from 'react'

const SignUpForm = () => {
    // useState for each data : name , email , password , confirm password , seterror useState

    // email consist of value 
    // setEmail is used as a func to set email value.

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit function called");
        console.log(username, email, password, confirmpassword);

        const newErrors = {};

        if(email.trim() == '') {
            newErrors.email = "Email cannot be Empty";
        }
        if(username.trim() == '') {
            newErrors.username = "Name cannot be Empty";
        }
        if(password.trim() == '') {
            newErrors.password = "Password cannot be Empty";
        }
        if(confirmpassword != password) {
            newErrors.confirmpassword = "Passwords does not Match";
        }
        
        if(newErrors) {
            setSuccess(true);
        }
        if(Object.keys(newErrors).length === 0) {
            setSuccess("Successfully Added");
        }
        else {
            setSuccess('');
        }

        setErrors(newErrors);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
                {errors.username && <span>{errors.username}</span>}
                
            </div>
            <div>
                <label>Email :</label>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                {errors.email && <span>{errors.email}</span>}

            </div>
            
            <div>
                <label>Password :</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                {errors.password && <span>{errors.password}</span>}
                
            </div>
            <div>
                <label>Confirm Password :</label>
                <input type="password" value={confirmpassword} onChange={(e)=> setConfirmpassword(e.target.value)} />
                {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                
            </div>
            <button type="submit">Sign Up</button>
            {success && <p>{success}</p>}
        </form>
    </div>
  )
}

export default SignUpForm