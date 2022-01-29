import './SingleStudent.css';
import {useNavigate} from 'react-router-dom'
export default function SingleStudent(props){
    let navigate = useNavigate();
    return(
        <div className="Student"
        onClick={()=>{navigate('/prod/'+props.id,{replace:true})}}>
            <h1>{props.firstName} {props.lastName}</h1>
            <p>Age: <strong>{props.age}</strong></p>

        </div>
    )
}
