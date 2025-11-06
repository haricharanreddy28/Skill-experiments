import React,{useEffect,useState} from 'react'
import d0 from './tasks.json'

const k='tasks_v1'
export default function App(){
  const [d,setD]=useState([])
  const [t,setT]=useState('')

  useEffect(()=>{
    const s=localStorage.getItem(k)
    if(s){setD(JSON.parse(s))}else{setD(d0); localStorage.setItem(k,JSON.stringify(d0))}
  },[])

  useEffect(()=>{localStorage.setItem(k,JSON.stringify(d))},[d])

  const a=e=>{e.preventDefault(); if(!t.trim())return; const n=[...d,{id:crypto.randomUUID(),text:t.trim(),done:false}]; setD(n); setT('')}
  const x=i=>{setD(d.map(o=>o.id===i?{...o,done:!o.done}:o))}
  const r=i=>{setD(d.filter(o=>o.id!==i))}
  const u=i=>{const s=prompt('Edit task'); if(s&&s.trim()){setD(d.map(o=>o.id===i?{...o,text:s.trim()}:o))}}

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">To-Do</h1>
      <form onSubmit={a} className="flex gap-2 mb-4">
        <input value={t} onChange={e=>setT(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Add task"/>
        <button className="bg-black text-white px-4 py-2 rounded">Add</button>
      </form>
      {!d.length?(
        <p className="text-gray-500">No tasks</p>
      ):(
        <ul className="space-y-2">
          {d.map(o=>(
            <li key={o.id} className="flex items-center justify-between bg-white border rounded px-3 py-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={o.done} onChange={()=>x(o.id)}/>
                <span className={o.done?"line-through text-gray-500":""}>{o.text}</span>
              </label>
              <div className="flex gap-2">
                <button onClick={()=>u(o.id)} className="px-3 py-1 rounded border">Edit</button>
                <button onClick={()=>r(o.id)} className="px-3 py-1 rounded bg-red-600 text-white">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}