import { useContext } from "react"
import { UserContext } from "../contexts/user.context"
import { signOutUser } from "../../utils/firebase.utils";
import "./user-page.styles.css";


export const UserPage = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }
    
    return(
        <div className="user-page-container">
            <p>Hello {currentUser.displayName}</p>
            <button onClick={signOutHandler}> Log Out</button>
        </div>
    )
}