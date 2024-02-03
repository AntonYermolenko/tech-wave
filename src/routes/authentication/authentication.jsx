import { useContext } from "react";
import { SignIn } from "../../components/sign-in/sign-in.component"
import { SignUp } from "../../components/sign-up/sign-up.component"
import { UserContext } from "../../components/contexts/user.context";
import { UserPage } from "../../components/user-page/user-page.component";
import "./authentication.css";

export const Authentication = () => {
    const {currentUser} = useContext(UserContext);
    console.log(currentUser);
    return(
        currentUser 
        ? <UserPage/>
        : <div className="auth-container">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
    
