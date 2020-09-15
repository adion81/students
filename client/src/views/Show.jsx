import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';

const Show = props => {
    const [student,setStudent] = useState({
        firstName:"",
        lastName:"",
        age:0
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/student/${props.id}`)
            .then(res => setStudent(res.data.results))
            .catch(err => console.log(err));
    },[props])

    const handleExpell = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/student/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>{student.firstName} {student.lastName}'s Info</h2>
            <p>Age: {student.age}</p>
            <button onClick={() => handleExpell(student._id)} className="btn btn-danger">Expell</button>

        </div>
    );

}

export default Show;