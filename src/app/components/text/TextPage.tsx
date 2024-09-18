
interface ITextPageProps
{
    children:any
    classname:string
}
export default function TextPage({...props}:ITextPageProps)
{
    return(
        <>
              <div className="flex justify-around">
                    <h1 className={`lg:text-[32px]  md:text-[32px] sm:text-[28px]  p-20 ${props.classname}`}>{props.children}</h1>
                </div>
        
        </>
    )
}