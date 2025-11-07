
interface CardProps{
    children:React.ReactNode
    title:string

}
const Card=({children,title}:CardProps)=>{
    return(
        <div className=" bg-white border border-slate-300 shadow-lg rounded-2xl m-2">
         <div className="p-4">
             <div className="text-xl m-2 font-bold border-b border-gray-500">{title}</div>
          <div className="p-3" >
               {
                children
               }
          </div>
        </div>
         </div>
    )
}


export default Card