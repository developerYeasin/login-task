import React from 'react'
import { MdClose } from 'react-icons/md'
interface props {
  forgetPassword: boolean
  setForgetPassword: (e: boolean) => void
}

const ForgetPasswordModal = ({ forgetPassword, setForgetPassword }: props) => {
  return (
    <div
      className={` absolute left-0 bg-white w-full z-[99] py-9 px-5 duration-500 transition-all ease-in-out ${
        forgetPassword ? 'h-full top-0 ' : 'h-0 top-[-130%] '
      } `}
    >
      <button
        onClick={() => setForgetPassword(!forgetPassword)}
        className='absolute top-3 right-6 bg-[#000000] w-8 h-8 text-2xl text-white rounded-full flex justify-center items-center   '
      >
        <MdClose className='text-white ' />
      </button>
      <div className=' mt-2 '>
        <h3 className=' text-xl mb-8 capitalize font-semibold '>Password Recovery</h3>
        <p className=' text-[10px] '>
          Enter either the email address or username on the accoutn and click submit
        </p>
        <p className=' text-[10px] mt-4 '>
          We&apos;ll eamil instructions on how to reset your password
        </p>
        <form>
          <input
            type='email'
            placeholder='Enter E-mail or Username Here '
            className='w-full  border-b border-solid border-[#717171] mt-4 py-1 focus:outline-none active:outline-none text-sm '
          />
          <button className='bg-[#39AB9F] border-none py-2 px-4 text-white text-sm mt-5 '>
            Submit
          </button>
        </form>
        <p className='text-[10px] mt-4 '>An email has been sent to you with further instructions</p>
      </div>
    </div>
  )
}

export default ForgetPasswordModal
