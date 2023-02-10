import React, { useEffect, useState } from 'react'
import CardHolder from './cardholder'
import { useNavigate } from 'react-router-dom'
export default function Main(props) {
    const nav=useNavigate()
    const{setbook}=props
    const[search,setSearch]=useState("")
    var inp="";
    const[data,setdata]=useState([{urls:{raw:"apple"}}])
    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=hN0-MPWXGnNSGczURVWWNMUm4GK3nc2VDpfIgIpvwnY`)
        .then(x=>x.json())
        .then(y=>setdata(y.results))
    },[search])
    console.log(data)
  return (
    <div className='main'>
        <div className='header'>
        <h1>IMAGE SEARCH APP</h1><button onClick={()=>nav("/book")}>Bookmark</button>
        </div>
        
        <div className='input'><input type="text"  placeholder='search for images here' onChange={e=>{inp=e.target.value}}/> <button onClick={()=>setSearch(inp)}>search</button></div>
        <CardHolder data={data} setbook={setbook}/>
    </div>
  )
}
