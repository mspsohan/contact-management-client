import { Link } from "react-router-dom";
import { BsBuilding } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { ChangeEvent, FC } from "react";
import { setSearchTerm } from "../app/searchSlice";

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {


   const dispatch = useDispatch();

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value.toLowerCase();
      dispatch(setSearchTerm(searchTerm));
   };

   return (
      <div className="flex flex-col w-screen overflow-auto text-gray-700 bg-gradient-to-tr from-green-200 via-indigo-200 to-pink-200">
         <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
            <Link to="/">
               <BsBuilding className="w-8 h-8 text-indigo-600 stroke-current" />
            </Link>
            <input type="search" placeholder="Search contact …" onChange={handleInputChange} className="flex items-center h-10 px-4 ml-10 text-sm w-1/3  bg-gray-200 rounded-full focus:outline-none focus:ring" />
            <Link to="/add-contacts" className="flex gap-2 items-center text-indigo-600 p-2 rounded text-sm font-semibold w-auto hover:text-black" >
               <BsPlusCircleFill className="text-xl" />
               <span>Add Contacts</span>
            </Link>
            <Link to="/all-contacts" className="flex gap-2 ml-10 items-center text-indigo-600 p-2 rounded text-sm font-semibold w-auto hover:text-black" >
               <BiSolidContact className="text-xl" />
               <span>All Contacts</span>
            </Link>
            <button className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
               <img src="https://i.ibb.co/1GH2Cky/Sohan-Perves.jpg" alt="" ></img>
            </button>
         </div>
      </div>
   );
};

export default Header;