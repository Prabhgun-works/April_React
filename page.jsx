
export default function Form(){
  const formConfig = [
    {name :'name' , type : 'text' , required : true} ,
    {name : 'age' , type : 'number' , required : true }
  ]
  const requiredCount = useMemo(() => {
    return   formConfig.filter(feild => feild.required).length ;
  } , [formConfig])
  

  return(
    <>
      <form>
        {formConfig.map((feild) => {
        return( 
        <input
         key = {feild.name}
         type = {feild.type}
         name = {feild.name} 
         required = {feild.required}
        />
       );
      
      })}
      </form>
      <p>
        Total Required Feilds : {requiredCount}
      </p>
    </>
  )
}