const Center=({children}:{
    children:React.ReactNode
})=>{


return  ( <div className="h-full w-full flex justify-center flex-col ">
    <div className="flex justify center">
      {
        children
     }
    </div>
    </div>)

}

export default Center