import { useForm } from "react-hook-form"

const Form = () => {

   const {register, handleSubmit, formState:{ errors, isSubmitSuccessful}}  = useForm()

   const submittedData = (data)=>{
    console.log(data)
   }

   console.log("Successful",isSubmitSuccessful)

  return (

  <>    
    {/* <h1 className="head">Registration form</h1> */}
    <form onSubmit={handleSubmit(submittedData)}>

        <div className='form'>

          {/* Firstname input field */}
           { isSubmitSuccessful && <h3 className="success"> ✅ Registration Successfull</h3>}
            <label htmlFor="firstname">First name</label>
            <input type="text" id='firstname' placeholder='enter your first name' 
              {
                ...register('firstname',{
                  required : '* first name is mandatory'
                })
              }
            />
            {/* this is a condition to display error message when the conditions are not matched*/}
            {errors.firstname && <p>{errors.firstname.message}</p>}


            {/* Lastname input field */}
            <label htmlFor="lastname">Last name</label>
            <input type="text" id='lastname' placeholder='enter your last name' 

              {...register('lastname', {

                required:' *lastname is mandatory'
              })}
            />
            {/* this is a condition to display error message when the conditions are not matched*/}
            {errors.lastname && <p>{errors.lastname.message}</p>}



            {/* email input field */}
            <label htmlFor="email">e-mail</label>
            <input type="text" id='email' placeholder='enter your email' 
            
              {...register('email', {
                required: ' *email is mandatory',
                pattern: {
                  value: /[a-z0-9_.]+@[a-z]+\.[a-z]/,
                  message:" * Input is not in an email format eg:someone.example.com"
                }
              })}
            />
            {/* this is a condition to display error message when the conditions are not matched*/}
            {errors.email && <p>{errors.email.message}</p>}


            {/* password input field */}
            <label htmlFor="password">Password</label>
            <input type="password" id='password' placeholder='enter your password' 
            
            {...register('password', {
              required: '* password is mandatory',
              minLength:{
                value:5,
                message:"* Password must contain atleast 5 letters"
              },
              maxLength:{
                value:15,
                message:" * Password should not exeed 15 characters"
              }
            })}
            />
            {/* this is a condition to display error message when the conditions are not matched*/}
            {errors.password && <p>{errors.password.message}</p>}

            <button type="submit"> Register </button>
    
        </div>
    </form>
  </>
  )
}

export default Form