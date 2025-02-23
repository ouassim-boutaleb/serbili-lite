import React from 'react';
import logo from '../assets/icons/logo.jpg';
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';


function SignUp(props) {
    const formik = useFormik({
        initialValues: {
            name: '',
            familyName: '',
            number: '',
            password: '',
            cPassword: '',
            selection: '',
            file: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('both name and family name are required'),
            familyName: Yup.string().required('both name and family name are required'),
            number: Yup.string().required('please enter your phone number').matches(/\b(07|06|05)\d{8}\b/, 'Please Enter a Valid Phone Number').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
            password: Yup.string().required('please enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Must contain 8 characters, one letter and one number'),
            cPassword: Yup.string().required('please confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
            selection: Yup.string().required('please select your type of account'),
        }),
        
    });
    const handleFileChange = (event) => {
        formik.setFieldValue('file', event.currentTarget.files[0]);
    };

    
    
    
    return (
        <div className='bg-gray-100 w-screen h-screen '>
            <div className="container flex items-center justify-center h-full">
                <div className='w-[600px] bg-white rounded-sm pb-3 mb-[1px] '>
                    <div className='flex items-center gap-2 justify-center '>
                        <img src={logo} alt="" className='w-[60px]' />
                        <h3 className='text-[#FF6F00] text-xl font-medium'>Serbili Shop</h3>
                    </div>
                    <div className='bg-[#F7EDE8] text-center text-gray-600 capitalize px-16 py-3 mx-10 mb-[3px]'>
                        <h3 className='text-black font-medium text-[15px] mb-[3px]' >Welcome To Serbili Shop</h3>
                        <p className='text-[11px] '>fill out your information below to be <br />signed up for our shop</p>
                    </div>
                    <form action="" className='px-10' onSubmit={formik.handleSubmit}>
                        <div className='flex items-center gap-4 '>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="name" className='text-sm'>Name</label>
                                <input type="text" name='name' id='name' className='border-[2px] py-2 rounded-md px-2 mt-[2px] placeholder:text-sm' placeholder='Enter Your Name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                            </div>
                            <div className='flex flex-col w-1/2 '>
                                <label htmlFor="familyName" className='text-sm'>Family Name</label>
                                <input type="text" name='familyName' id='familyName' className='border-[2px] py-2 rounded-md px-2 mt-[2px] placeholder:text-sm' placeholder='Enter Your FamilyName' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.familyName} />
                            </div>
                        </div>
                        {(formik.errors.name || formik.errors.familyName) && (formik.touched.name || formik.touched.familyName) ? <p className='text-red-700 text-[10px] '>*{formik.errors.name}</p> : null }
                        <div className='flex flex-col '>
                            <label htmlFor="number" className='text-sm'>Phone Number</label>
                            <input type="text" name='number' id='number' className='border-[2px] py-2 rounded-md px-2 mt-[2px] placeholder:text-sm' placeholder='Enter Your Phone Number'onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.number} />
                        </div>
                        {formik.errors.number && formik.touched.number ? <p className='text-red-700 text-[10px]'>*{formik.errors.number}</p>: null}
                        
                        <div className={`flex items-center gap-4 ${!formik.errors.password && !formik.errors.cPassword ? 'mb-2' : 'mb-[4px]'} `}>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="password" className='text-sm'>Password</label>
                                <input type="password" name='password' id='password' className='border-[2px] py-2 rounded-md px-2 mt-[2px] placeholder:text-sm' placeholder='Enter Your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                                
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <label htmlFor="name" className='text-sm'>Comfirm Password</label>
                                <input type="password" name='cPassword' id='cPassword' className='border-[2px] py-2 rounded-md px-2 mt-[2px] placeholder:text-sm' placeholder='Comfirme Your Password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cPassword} />
                            </div>
                        </div>
                        {formik.errors.password && formik.touched.password ? <p className='text-red-700 text-[10px] mb-1'>*{formik.errors.password}</p>: null}
                        {formik.errors.cPassword && formik.touched.cPassword && !formik.errors.password ? <p className='text-red-700 text-[10px] '>*{formik.errors.cPassword}</p>: null} 
                        <div>
                            <select name="selection" id="" className='w-full border-[2px] rounded-md py-2 px-3 cursor-pointer' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.selection} >
                                <option value="">Select Your Profile Type</option>
                                <option value="worker">I'm a Worker</option>
                                <option value="costumer">I'm a Costumer</option>
                            </select>
                            {formik.errors.selection && formik.touched.selection ? <p className='text-red-700 text-[10px]'>*{formik.errors.selection}</p> : null}
                        </div>
                        <div>
                            <h3 className='mt-[4px] font-medium'>Upload Your File</h3>
                            <p className='text-[12px] text-gray-600 mb-2'>Please Upload The File You Want To Share With Us</p>
                            <label htmlFor="file" className='text-center py-5 w-full border-dotted border-[2px] block mt-2 cursor-pointer '><span className='text-[#FF6F00] font-medium'>Choose File</span> Or Drop Here</label>
                            <input type="file" name="file" id="file" className='hidden'  onChange={handleFileChange} onBlur={formik.handleBlur} />
                        </div>

                        <button type="button" className='w-full py-2 text-white font-medium bg-[#FF6F00] mt-3'>Sign Up</button>
                        <div className='text-center my-3 flex justify-center items-center gap-1'>
                            <p>I already Have an Account</p>
                            <Link to={'/login'} className='text-[#FF6F00] font-medium'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;