import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch("https://api.github.com/users/Rahul5977")
            .then(res => res.json())  
            .then(userData => {
                // console.log(userData);
                setData(userData);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <div className="bg-gray-600 text-white p-4 text-3xl">
                Github followers: {data.followers !== undefined ? data.followers : "Loading..."}
                <img src={data.avatar_url} alt="me"  width ={300}/>
            </div>
        </>
    );
}

export default Github;
