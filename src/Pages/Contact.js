import React,{useEffect,useState} from 'react'
 
export default function Contact() {
    const [show,setShow] = React.useState(false);
    useEffect(()=>{
        console.log("1")
    })
    useEffect(()=>{
        console.log("2")
    },[])
    useEffect(()=>{
        if(show){
            console.log("3")
        }      
    },[show])
    return (
        <div>
            {show && <h2>Text</h2>}
            <button type='button' onClick={()=>{
                setShow(!show)
            }}>Click</button>
        </div>
      )
    }