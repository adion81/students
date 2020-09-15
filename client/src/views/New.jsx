import React, {useState} from 'react';
import Axios from 'axios';
import StudentForm from '../components/StudentForm';
import {navigate} from '@reach/router';

const New = props => {
    const initialStudent = {
        firstName:"",
        lastName:"",
        age:0
    }
    const initialErrors = {
        firstName:"",
        lastName:"",
        age:""
    }
    const [student,setStudent] =useState(initialStudent);
    const [errors,setErrors] = useState(initialErrors);

    const handleInputs = e => {
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors);
        Axios.post("http://localhost:8000/api/create/student",student)
            .then(res => {
                if(res.data.results){

                    setStudent(initialStudent);
                    navigate("/")
                }
                else{
                    // this is where validation errors come back
                    console.log(res.data)
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Add A Student</h2>
            <StudentForm 
                inputs={student}
                handleInputs={handleInputs}
                handleSubmit={handleSubmit}
                errors={errors}

            />
        </div>
    );
}

export default New;