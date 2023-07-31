import React, {useState} from "react";

const FilterFunction = () => {

    let items = [
        {id: 1, name: "Andy", age: 32},
        {id: 2, name: "Cindy", age: 25},
        {id: 3, name: "John", age: 41}
    ]

    let newStudentObject = {
        id: 7,
        name: "Tommy",
        age: 19
    }

    let newItems = [...items, newStudentObject]
    console.log(newItems);

    let studentList = items.map(student => {
        return (
            <div key={student.id}>
                <li>{student.name}</li>
                <button className="delete" onClick={() => deleteStudent(student.id)}>X</button>;
            </div>
        );
    });
    
    function deleteStudent(studentId) {
        let updatedStudentList = items.filter(student => student.id != studentId);
        console.log(updatedStudentList);
    }

    return (
        <>
            <ul className="students">
                {studentList}
            </ul>
        </>
    );
};

export default FilterFunction;