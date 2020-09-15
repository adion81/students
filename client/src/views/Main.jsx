import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';


const Main = props => {
    const [students,setStudents] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/students')
            .then(res => setStudents(res.data.results))
            .catch(err => console.log(err));
    },[])

    return (
        <div>
            {
                students.map((s,i) => {
                    return <div key={i}>
                                <p >{s.firstName} {s.lastName} has {s.books.length} {s.books.length === 1 ? "book":"books"}.</p>
                                <Link  to={`/student/${s._id}`} className="btn btn-primary">Details</Link>
                            </div>
                })
            }
        </div>
    );
}

export default Main;