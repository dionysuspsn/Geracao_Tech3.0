import { useParams } from "react-router-dom"
const User = () => {
    const {id} = useParams();
    return ( 
    <>
        <h2>User Profile:</h2>
        <p>id: {id}</p>
    </>    
     );
}
 
export default User;