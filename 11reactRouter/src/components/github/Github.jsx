import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ankitsingh49578')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData();
    
  return (
    <div className='text-center p-3 bg-gray-500 text-white text-2xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="" width="200px"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
    const res = await fetch('https://api.github.com/users/ankitsingh49578')
    return res.json();
}