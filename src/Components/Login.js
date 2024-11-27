import React from "react";

function Login() {
    const InitialData = {email : "" ,password : ""};
    const [initialValue,setInitialValue] = React.useState(InitialData);
    const [storeData,setStoreData] = React.useState([]);
 
    const changeHandler = (e,type) =>{
        let data = {...initialValue};
        if(type == "email"){
            data.email = e.target.value;
        }
        else{
            data.password = e.target.value;
        }
        setInitialValue(data);
    }
    const clickHandler = () =>{
        let data = [...storeData];
        data.push(initialValue);
        console.log(data);
        setStoreData(data);
        setInitialValue(InitialData);
    }
  return (
    <>
        <input type = "email" value = {initialValue.email} onChange={(event) =>{changeHandler(event,"email")}}></input>
        <input type = "password" value = {initialValue.password} onChange={(event) =>{changeHandler(event,"pass")}}></input>
        <button type = "button" onClick={() =>{clickHandler()}}>Get Data</button>
    </>
  )
}

export default Login;