import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const LoginForm = ({setisUser}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        });
     
    const [showPassword, setShowPassword] = useState(false);
    const [emailFocus, setemailFocus] = useState(false);
    const [passwordFocus, setpasswordFocus] = useState(false);
    const { email, password } = formData;
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }
      const handleOnSubmit = (e) => {

        e.preventDefault()
        console.log(formData);
        // const lowercaseEmail = email.toLowerCase();
        // dispatch(login(lowercaseEmail, password, navigate));
      }  
      const handleInputFocus = () => {
        setemailFocus(true);
    };
    const handleInputBlur = () => {
        if(email==="")
        setemailFocus(false);
    };
      const handleInputFocus1 = () => {
        setpasswordFocus(true);
    };
    const handleInputBlur1 = () => {
        if(password==="")
         setpasswordFocus(false);
    };
    const handleCreateAccount = () => {
        setisUser(0);
    }
  return (
    <div className='bg-white/25 backdrop-blur-lg  w-[250px] h-[200px] py-5 px-2 rounded-2xl'>
        <form onSubmit={handleOnSubmit} className='flex flex-col  -gap-1 justfy-center  items-center'>
            <div className={` w-full flex flex-col gap-2 mt-2 ${emailFocus ?'transition-all duration-100': ' transition-all duration-100'}`}>
                <div className='flex  h-[60px] flex-col relative px-1 rounded-full'>
                <label className={`text-xs text-slate-300 absolute mb-1 -top-3 ${emailFocus ? '-top-4 transition-all duration-100' : ' transition-all duration-100'}`}>
                    Email ID
                </label>

                    <input required
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur} 
                            className=" text-sm py-1 text-left border-b-2 border-dashed focus:outline-none bg-transparent"
                            />

                </div>
               
                <div className='flex  h-[60px] flex-col relative px-1 rounded-full'>
                <label className={`text-xs text-slate-300 absolute mb-1 -top-2 ${passwordFocus ? '-top-4 transition-all duration-100' : ' transition-all duration-100'}`}>
                    Password
                </label>

                <input  required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        onFocus={handleInputFocus1}
                        onBlur={handleInputBlur1} 
                        className=" text-sm py-1 w-full rounded-none text-left border-b-2 border-dashed focus:outline-none bg-transparent"
                        />
                <span onClick={() => setShowPassword((prev) => !prev)}
                    className=" absolute right-2 z-[10] cursor-pointer">
                    {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                </span>        

                </div>
               
               
               
                
                
            </div>

            <div className='flex flex-col justify-center items-center -mt-2'>
            <Link to='/homeScreen'> <button type="submit">
                   <RiLoginCircleFill className='text-5xl'/>
                </button>
</Link>
            </div>


        </form>
        <div className='text-xs mt-2 w-full text-center'>
            New user? <span className='hover:underline' onClick={handleCreateAccount}>Create Account</span>

        </div>
       
    </div>
  )
}

export default LoginForm