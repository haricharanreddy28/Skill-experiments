import {configureStore,createSlice,nanoid} from '@reduxjs/toolkit'
const s=createSlice({
  name:'f',
  initialState:{l:[]},
  reducers:{
    add:(st,a)=>{st.l.push({id:nanoid(),rating:a.payload.rating,comment:a.payload.comment})}
  }
})
export const {add}=s.actions
export const z=()=>configureStore({reducer:{f:s.reducer}})