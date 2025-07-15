"useClient"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
export const SidebarItems=({
    href,
    icon,
    title
}:{
    href:string,
    icon:React.ReactNode,
    title:string
})=>{
const router=useRouter()
const pathname=usePathname()
const selected=pathname===href

return (<div className={`${selected ? "text-[#6a51a6]" : "text-slate-500"} font-bold flex  p-2 text-center`} onClick={()=>router.push(href)}>
     <div>{icon}</div>
     <div className={`${selected ? "text-[#6a51a6]" : "text-slate-500"}  pl-1`}>{title}</div>
    </div>)
    
    
}