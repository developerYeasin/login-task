import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface props {
  forgetPassword: boolean
  setForgetPassword: (e: boolean) => void
}

type Inputs = {
  email: string
  name: string
  password: string
}
interface dataType {
  email: string
  name: string
  password: string
}

const LoginForm = ({ forgetPassword, setForgetPassword }: props) => {
  const [password, setPassword] = useState(true);
  const [select, setSelect] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: dataType) => {
    // console.log(data)
    setLoading(true);
    fetch('https://talk-a-tive-server.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.message) {
          toast.error('Failed to load the Chats');
          setLoading(false);
        } else {
          localStorage.setItem('userInfo', JSON.stringify(resData));
          toast.success('Successfully login');
          navigate('/');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to load the Chats');
        setLoading(false);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-9 regForm '>
        <div className=''>
          <input
            type='email'
            className='border-b border-solid border-[#fff] bg-transparent focus:outline-none active:outline-none text-base py-1 px-2 w-full text-white active:bg-transparent focus:bg-transparent  '
            placeholder='E-mail'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='text-xs text-rose-700'>E-mail is required</span>}
        </div>
        <div className='relative '>
          <input
            type={password ? 'password' : 'text'}
            className='border-b mt-2 border-solid border-[#fff] bg-transparent focus:outline-none active:outline-none text-base py-1 px-2 w-full text-white '
            placeholder='Password'
            {...register('password', { required: true })}
          />
          {password ? (
            <AiFillEye
              onClick={() => setPassword(!password)}
              className=' absolute top-[50%] right-2 -translate-y-1/2 text-white opacity-60 cursor-pointer '
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setPassword(!password)}
              className=' absolute top-[50%] right-2 -translate-y-1/2 text-white opacity-60 cursor-pointer '
            />
          )}
          {errors.password && <span className='text-xs text-rose-700'>Password is required</span>}
        </div>

        <div className='my-5 px-2 relative flex items-center'>
          <input
            onChange={() => setSelect(!select)}
            type='checkbox'
            id='remember-me'
            className='w-4 h-4 opacity-0 '
          />
          <span
            className={`absolute h-4 w-4 border border-solid border-[#c5c5c526] top-[50%] -translate-y-1/2 left-0 after:absolute after:contents-[""] right-icon after:bg-[#52CBB8] after:h-4 after:w-4 after:top-[-1px] after:left-[1px] ${
              select ? 'after:opacity-100 ' : 'after:opacity-0'
            } `}
          ></span>
          <label htmlFor='remember-me' className=' capitalize ml-2 text-lg text-[#9a9a9a] '>
            Remember me
          </label>
        </div>
        {loading ? (
          <p className=' capitalize bg-[#5AD0BB] text-[#B5E6E5] py-2 px-8 text-lg rounded-3xl hover:bg-purple-500   transition-all ease-in-out duration-300 overflow-hidden border-none focus:outline-none active:outline-none '>
            Loading...
          </p>
        ) : (
          <button
            type='submit'
            className=' capitalize bg-[#5AD0BB] text-[#B5E6E5] py-2 px-8 text-lg rounded-3xl hover:bg-purple-500   transition-all ease-in-out duration-300 overflow-hidden border-none focus:outline-none active:outline-none '
          >
            login
          </button>
        )}
      </form>
      <button
        onClick={() => setForgetPassword(!forgetPassword)}
        className='flex items-center py-2 text-white mt-5 focus:outline-none active:outline-none text-sm '
      >
        {' '}
        <AiOutlineArrowLeft className='mr-2' /> Forget your password
      </button>
    </>
  );
};

export default LoginForm;
