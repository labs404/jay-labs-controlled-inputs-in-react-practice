import React from "react";

const MapFunction = () => {

    let items = [
        {id: 1, name: "Andy", age: 32},
        {id: 2, name: "Cindy", age: 25},
        {id: 3, name: "John", age: 41}
    ]

    let studentList = items.map(student => {
        return (
                <li key={student.id}>Did you know that {student.name} is {student.age} years old? {student.id}</li>
        )});


    return (
        <>
            <ul className="students">
                {studentList}
            </ul>
        </>
    );
};

export default MapFunction;