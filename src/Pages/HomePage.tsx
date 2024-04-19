import { FC } from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/cloude-banner-new.e704138d.png';
import { BiSolidContact } from "react-icons/bi";

const HomePage: FC = () => {
  return (
    <>
      <div className='text-center md:text-left md:flex justify-center items-start'>
        <div className='flex-1 flex flex-col gap-5'>
          <h3 className='text-2xl md:text-3xl lg:text-5xl font-bold md:mb-[5vw]'><span className='text-[#007cff]'>Centralized</span> Contact <br />Management System</h3>
          <Link to="/all-contacts" className='bg-[#4a9cff] text-white hover:text-black text-xl lg:text-3xl font-semibold px-3 py-2 rounded-3xl max-w-max flex justify-center mx-auto md:mx-0'>Managed Contact</Link>
          <h4 className='flex justify-center gap-2 items-center md:justify-start lg:mt-[15vw] md:mt-[8vw] text-2xl md:text-3xl lg:text-5xl font-semibold'><BiSolidContact />ContactBook</h4>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <img src={image} alt="" className='w-[70%] md:w-[100%]' />
        </div>
      </div>
    </>
  );
};

export default HomePage;
