import { useContext } from "react"
import UserContext from "../utils/UserContext"

const ContactUs=()=>{
    const {name}=useContext(UserContext)
    return(
        <div>
            {name} Kumar
        </div>
    )
}

export default ContactUs