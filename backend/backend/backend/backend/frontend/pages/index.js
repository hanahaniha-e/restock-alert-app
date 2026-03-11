import { useState } from "react"

export default function Home(){

 const [url,setUrl]=useState("")

 const submit=async()=>{

  await fetch("http://localhost:8000/add",{

   method:"POST",

   headers:{
    "Content-Type":"application/json"
   },

   body:JSON.stringify({url})

  })

  alert("開始監控")
 }

 return(

  <div style={{padding:40}}>

   <h1>Restock Alert</h1>

   <input
    value={url}
    onChange={(e)=>setUrl(e.target.value)}
    placeholder="商品網址"
   />

   <button onClick={submit}>
    開始監控
   </button>

  </div>

 )
}
