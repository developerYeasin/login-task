import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  const logoutHandle = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };
  return (
    <div className='w-full h-screen bg-[#111] flex justify-center items-center '>
      <button
        onClick={logoutHandle}
        className='bg-[#fff] text-[#111] border-none py-2 px-4 text-2xl duration-300 ease-in-out transition-all hover:shadow-[0_0_11px_4px_#ffffff80] '
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
