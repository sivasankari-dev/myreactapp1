import React from "react";
const jsonData = require('./SampleData.json');
 
const Sample = () => {
   //console.log(props.data)
    // let a = [{name  : "xyz"},{name  : "xyz1"},{name  : "xyz2"}];
    const  data = jsonData.map(function(item,index){
            console.log(jsonData)
            return <div className="Card">
                <h1>Name : {item.name}</h1>
                <h2>Age : {item.age}</h2>
                <h3>DOB : {item.dob}</h3>
                <p>{item.data.address}</p>
                <button type = "button">Next</button>
            </div>;
    })
    return (
        <div>
            <h1>My Sample</h1>
            {data}
        </div>
    );
}
 
export default Sample;