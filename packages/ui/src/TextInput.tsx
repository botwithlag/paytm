const Input=({placeholder,setData,label}:{
 placeholder:string,
 setData:(value:string)=>void
 label:string
})=>{
  
    return <div className="w-auto">
       <label className="text-gray-900 block pb-2 text-xl">{label}</label>
       <input className=" p-2 font-light border-2 border-slate-300 rounded-xl bg-gray-200 w-full" type="text" placeholder={placeholder} onChange={(e)=>{setData(e.target.value)}} />
    </div>
}



export default Input