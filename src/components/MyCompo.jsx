
import React from "react";
const Greet = () => {
    return (
    <h1>Hello</h1>
    );
};

export function MyCompo() {
    return(
        <h1>This is my component</h1>
    )
}

export function StudentComp(){
            const students=["Shubham","Shubham","Shubham","Shubham","Shubham"];
          return(
            <ul>
            {
                students.map((student)=>
                <li key={student}>{student}</li>)
            }</ul>
          );
}
export const arr=[10,20,30,40,50];

export const age = 20;
export default Greet;

