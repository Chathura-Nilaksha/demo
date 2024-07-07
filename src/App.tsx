import { useState } from 'react'
import './App.css'
import { SubmitHandler, useForm } from "react-hook-form"
function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>();
  const [check, setCheck] = useState(false)
  const [state, setState] = useState({
    deliveryName: "v",
    deliveryLastName: "d" // deliveryAddress: "", // deliveryPhone: ""   
  });  
  // const onChange = (e: any) => {
  //   const { name, value } = e.target
  //   setState((abc) => ({
  //     ...abc,
  //     [name]: value
  //   }));
  // }
  const onCheckboxChange = () => {
    setCheck(!check);
    //if(check) {watch("billingLastName") = ;}
    setState({
      deliveryName: watch("deliveryName"), 
      deliveryLastName: watch("deliveryLastName")
    })
  }

  type FieldValues = {
    deliveryName: string,
    deliveryLastName: string,   // deliveryAddress: string, // deliveryPhone: string,    
    billingName : string, 
    billingLastName : string  // billingAddress : string,// billingPhone : string,   
  }
  const onSubmit : SubmitHandler<FieldValues> = (data : any) => {
    console.log(data)
  }
  console.log(watch("deliveryName"));
  
  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>     Delivery Address     </h1>
          <input type="text" /*name='deliveryName'*/ placeholder='First Name' autoComplete='{false}' /*onChange={onChange}*/
              {...register("deliveryName")} 
              {...errors.deliveryName && <span>This field is required</span>} />
          <input type="text" /*name='deliveryLastName'*/ placeholder='Last Name' autoComplete='{false}'/*onChange={onChange}*/ 
              {...register("deliveryLastName")} 
              {...errors.deliveryLastName && <span>This field is required</span>}/>

          {/* <input type="text" name='deliveryAddress' placeholder='Address' autoComplete='{false}' onChange={onChange} /> */}
          {/* <input type="text" name='deliveryPhone' placeholder='Phone' autoComplete='{false}' onChange={onChange} /> */}
          <h1>     Billing Address       </h1>

          <div className='check'>
            <label htmlFor='checkbox'>Same as Delivery address</label>
            <input type="checkbox" value='false' name='checkbox' onChange={onCheckboxChange} />
          </div>

          <input type="text" /*name='billingName' */ placeholder='First Name' autoComplete='{false}'
            value={check ? state.deliveryName : ""}     
            {...register("billingName")} />
          <input type="text" /*name='billingLastName'*/ placeholder='Last Name' autoComplete='{false}'
            value={check && state.deliveryLastName } 
            {...register("billingLastName")} />
          {/* <input type="text" name='billingAddress' placeholder='Address' autoComplete='{false}' */}
            {/* value={check ? state.deliveryAddress : ""} /> */}
          {/* <input type="text" name='billingPhone' placeholder='Phone' autoComplete='{false}' */}
            {/* value={check ? state.deliveryPhone : ""} /> */}

          <input type="button" className='btn' value="Submit" />


        </form>
      </div>

    </>
  )
}
export default App;



