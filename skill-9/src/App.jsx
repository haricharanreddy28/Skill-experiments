import React,{useEffect,useState} from 'react'
import {Routes,Route,Link,useParams} from 'react-router-dom'
import {d as d0} from './data.js'

function B({x}){return(<div style={{border:'1px solid #ddd',padding:12,borderRadius:8}}>
  <h3 style={{margin:0}}>{x.title}</h3><p>By {x.author}</p>
  <Link to={`/book/${x.id}`}>View</Link>
</div>)}

function BD({x}){if(!x)return <p>Not found</p>;return(<div>
  <h2>{x.title}</h2><p>By {x.author}</p><p>{x.description}</p><p>Rating: {x.rating}/5</p>
  <Link to="/">Back</Link>
</div>)}

function H({d}){return(<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:12}}>
  {d.map(x=><B key={x.id} x={x}/>)}
</div>)}

function D({d}){const p=useParams();const x=d.find(y=>y.id===p.id);return <BD x={x}/>}

export default function App(){
  const [d,setD]=useState([])
  useEffect(()=>{setTimeout(()=>setD(d0),300)},[])
  return(<div style={{padding:16}}>
    <h1>Book Explorer</h1>
    <Routes>
      <Route path="/" element={<H d={d}/>}/>
      <Route path="/book/:id" element={<D d={d}/>}/>
    </Routes>
  </div>)
}