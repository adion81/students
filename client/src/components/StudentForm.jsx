import React from 'react';

const StudentForm = props =>{
    const {inputs,handleInputs,handleSubmit,errors} = props;
    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input className="form-control" type="text" value={inputs.firstName} onChange={handleInputs} name="firstName" />
                <span className="text-danger" >{errors.firstName ? errors.firstName.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input className="form-control" type="text" value={inputs.lastName} onChange={handleInputs} name="lastName" />
                <span className="text-danger" >{errors.lastName ? errors.lastName.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input className="form-control" type="number" value={inputs.age} onChange={handleInputs} name="age" />
                <span className="text-danger" >{errors.age ? errors.age.message : ""}</span>
            </div>
            <input type="submit" value="Add Student" className="btn btn-info"/>
        </form>
    );
}

export default StudentForm;