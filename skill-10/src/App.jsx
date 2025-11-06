import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {add} from './store.js'

export default function App(){
  const d=useDispatch()
  const l=useSelector(s=>s.f.l)
  const [r,setR]=useState('')
  const [c,setC]=useState('')

  const on= e=>{e.preventDefault(); if(!r){alert('Select rating'); return} d(add({rating:Number(r),comment:c.trim()})); setR(''); setC('')}
  return(
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Feedback</h1>
      <form onSubmit={on} className="space-y-3 bg-white border rounded p-4">
        <div className="flex gap-2">
          <select value={r} onChange={e=>setR(e.target.value)} className="border rounded px-3 py-2">
            <option value="">Rating</option>
            <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option>
          </select>
          <textarea value={c} onChange={e=>setC(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Comment (optional)"></textarea>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded">Submit</button>
      </form>
      <h2 className="text-xl font-semibold mt-6 mb-2">Entries</h2>
      {!l.length?<p className="text-gray-500">No feedback yet</p>:(
        <ul className="space-y-2">
          {l.map(x=>(
            <li key={x.id} className="bg-white border rounded p-3">
              <p className="font-medium">Rating: {x.rating}</p>
              {x.comment? <p>{x.comment}</p>:null}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}