interface IContainerProps{

    children:any
    classname:string
}
export default function Container({classname,children}:IContainerProps){
    return(
        <>
    <div className='flex justify-center p-4 lg:flex sm:flex md:flex xs:py-24'>
        <div className={
            `p-4 border-2
             border-gray-200 border-dashed 
             rounded-lg dark:border-gray-700
            
              ${classname}`}>
        {children}
        </div>
       
    </div>
   
     </>
    )
}