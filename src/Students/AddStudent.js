import {useNavigate} from 'react-router-dom'

export default  function About(){
    let navigate = useNavigate();
    return(
        <div>
            <h1>Add Student Component</h1>
            <hr/>
            <button onClick={()=>{navigate("/", {replace:true});}} >Go Home</button>
        </div>
    )
}

