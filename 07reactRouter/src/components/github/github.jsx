import React, { useEffect, useState } from "react";

function Github(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Rahul5977')
        .then(res => {res.json})
        .then(data => {
            console.log(data);
            setData(data)
            
        })
    })
    return(
        <>
        <div className="bg-gray-600 text-white p-4 text-3xl">Github followers: {data} </div>
        </>
    )
}
export default Github