import './sign-up.styles.css'
import {  useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
export const SignUp = () => {
    const [formFields, setFormFields ] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});

    }
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword ) {
            alert("Passwords do not match")
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword( email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();


        } catch(error){
            console.log(error); 

        }
      

    }

    return(
        <div>
                <div classNa me='sign-up-container ' >
                    <form className="sign-up-form"  onSubmit={(event) => {handleSubmit(event) }} >
                    <p className='sign-up'>Sign Up</p>
                        <div className='sign-up-text-field'>
                            <input type="text" className='sign-up-input' name='displayName'  required placeholder=''  autoComplete='off' onChange={handleChange}/>
                            <label className='sign-up-label'>Name</label>
                        </div>
                        <div className='sign-up-text-field'>
                            <input type="text" className='sign-up-input' name='email' required placeholder='' autoComplete='off'  onChange={handleChange}/>
                            <label className='sign-up-label'>Email</label>
                        </div>
                        <div className='sign-up-text-field'>
                            <input type="password" className='sign-up-input' name='password' required placeholder='' autoComplete='off' onChange={handleChange}/>
                            <label className='sign-up-label'>Password</label>
                        </div>
                        <div className='sign-up-text-field'>
                            <input type="password" className='sign-up-input' name='confirmPassword' required placeholder='' autoComplete='off'  onChange={handleChange}/>
                            <label className='sign-up-label'>Confirm Password</label>
                        </div>
                        <div className='button-container'>
                            <button className='sign-up-button' type='submit' >Sign Up</button>
                        </div>
                    </form>
                </div>
        </div>
    )
};