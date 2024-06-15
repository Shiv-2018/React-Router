// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data=useLoaderData();
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shiv-2018')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // })
  return (
    <div className='bg-gray-700 text-white p-4 text-center m-4'>Github Followers:{data.followers} </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Shiv-2018')
    return response.json()
}