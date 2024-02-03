import { useState } from 'react';
import './sign-in.styles.css';
import { signInUserWithEmailAndPassword } from '../../utils/firebase.utils';




const deafualtFormFields = {
    email: "",
    password: "",
}

export const SignIn = () => {
    
    const [formFields, setFormFields] = useState(deafualtFormFields);
    const {email, password} = formFields;
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const { user } = await signInUserWithEmailAndPassword( email, password);
            console.log(user);

        }catch(error){
            console.log(error)
        }
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value })
        
    }

    return (
        <div >
            <div className='sign-in-container' >
                <form className="sign-in-form" onSubmit={(event) => {handleSubmit(event) }}>
                 <p className='login-in'>Sign In</p>
                    <div className='sign-in-text-field'>
                        <input type="text" className='sign-in-input' required placeholder=''  autoComplete='off' onChange={changeHandler} name='email'
                        />
                        <label className='sign-in-label'>Email</label>
                    </div>
                    <div className='sign-in-text-field'>
                        <input type="password" className='sign-in-input' required placeholder='' autoComplete='off' onChange={changeHandler} name='password'
                            
                        /> 
                        <label className='sign-in-label'>Password</label>
                    </div>
                    <div className='button-container'>
                        <button className='sign-in-button' type='submit' >Sign In</button>
                    </div>
                </form>
            </div>
        </div>

    )
}