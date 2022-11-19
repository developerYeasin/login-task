import React, { useState } from 'react';
import ForgetPasswordModal from '../../components/ForgetPasswordModal';
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';

const Login = () => {
  const [form, setFrom] = useState(true);
  const [forgetPassword, setForgetPassword] = useState(false);

  return (
    <div className=' relative h-screen w-full bg-gradient-to-b from-[#1F2A3B] to-[#337E7B]'>
      <div className=' overflow-hidden h-3/4 w-[350px] rounded-lg bg-gradient-to-tr from-[#212329] to-[#555E6F] m-auto absolute top-[50%] left-[20%] -translate-y-1/2 '>
        <ForgetPasswordModal
          forgetPassword={forgetPassword}
          setForgetPassword={setForgetPassword}
        />
        <div className='w-9/12 m-auto pt-[20%] '>
          <div className='flex items-center justify-between'>
            <button
              className={`regTapBtn relative text-[#fff] capitalize py-1 text-lg bg-transparent border-none focus:outline-none active:outline-none after:absolute after:contents-[''] after:bottom-0 after:rounded-full after:left-0 after:h-[2px] after:bg-[#337e7b] duration-300 transition-all ease-in-out after:duration-300 after:transition-all after:ease-in-out opacity-75
              ${form ? 'after:w-full opacity-100' : 'after:w-0'}`}
              onClick={() => setFrom(true)}
            >
              login
            </button>
            <button
              className={`regTapBtn relative text-[#fff] capitalize py-1 text-lg bg-transparent border-none focus:outline-none active:outline-none after:absolute after:contents-[''] after:bottom-0 after:rounded-full after:left-0 after:h-[2px] after:bg-[#337e7b] duration-300 transition-all ease-in-out after:duration-300 after:transition-all after:ease-in-out opacity-75
              ${!form ? 'after:w-full opacity-100' : 'after:w-0'}`}
              onClick={() => setFrom(false)}
            >
              sign up
            </button>
          </div>
          {form ? (
            <LoginForm forgetPassword={forgetPassword} setForgetPassword={setForgetPassword} />
          ) : (
            <SignUpForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
