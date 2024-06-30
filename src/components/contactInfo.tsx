import { FC } from "react";
import { BsFillPenFill, BsFillTrashFill, BsFillCalendar3WeekFill, BsReplyAllFill, BsShareFill, BsMailbox2, BsTelephoneFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

import { useRemoveContactMutation } from "../app/contactApi";
import { Contact } from "../model/Contact";

interface ContactProps {
  contact: Contact;
  onContactUpdate: (id: string) => void;
}

const ContactInfo: FC<ContactProps> = ({ contact, onContactUpdate }) => {

  const setUpdatePage = (id: string) => {
    onContactUpdate(id);
  };

  const [removeContact] = useRemoveContactMutation()

  return (
    <div className="bg-white-500">
      <div className="flex flex-col pb-2 overflow-auto">
        <div draggable="true" className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"   >
          <button onClick={() => setUpdatePage(contact?._id)} className="absolute top-0 right-0  items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"              >
            <BsFillPenFill />
          </button>
          <button onClick={() => removeContact(contact?._id)} className="absolute top-7 right-0  items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex"   >
            <BsFillTrashFill />
          </button>

          <div className="rounded-md pl-6 text-sm font-medium text-gray-800">
            <div className="flex items-center w-full mt-3 ">
              <div className="flex items-center">
                <img src={contact?.img} alt="" className="w-16 h-16 rounded-full border-purple-500 border-2 " />
                <span className="ml-1 leading-none">{contact?.name}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center">
                <BsTelephoneFill />
                <span className="ml-1 leading-none">{contact?.telephone}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center h-5">
                {contact?.email ? <BsMailbox2 /> : ""}
                <span className="ml-1 leading-none">{contact?.email}</span>
              </div>
            </div>

            <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
              <div className="flex items-center h-5">
                <GrMapLocation />
                <span className="ml-1 leading-none">{contact?.address}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
            <div className="flex items-center">
              <BsFillCalendar3WeekFill />
              <span className="ml-1 leading-none">Dec 12</span>
            </div>
            <div className="relative flex items-center ml-4">
              <BsReplyAllFill />
              <span className="ml-1 leading-none">0</span>
            </div>
            <div className="flex items-center ml-4">
              <BsShareFill />
              <span className="ml-1 leading-none">0</span>
            </div>
            <img className="w-6 h-6 ml-auto rounded-full" src="https://i.ibb.co/1GH2Cky/Sohan-Perves.jpg" alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
