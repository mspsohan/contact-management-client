import { useEffect, useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../app/contactApi';
import ContactList from '../components/contactList';
import { RootState } from '../app/store';
import Contact from "../model/Contact";

const AllContacts: FC = () => {
   const [contactListData, setContactListData] = useState<[]>([]);

   const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
   const { data: contacts, isLoading, error } = useGetContactsQuery();

   useEffect(() => {
      if (contacts) {
         setContactListData(contacts);
      }
   }, [contacts]);


   useEffect(() => {
      if (contacts) {
         const filteredData = contacts?.filter((item: Contact) => item.name.toLowerCase().includes(searchTerm));
         setContactListData(filteredData);
      }
   }, [contacts, searchTerm]);

   if (isLoading) return <div>Loading...</div>;
   if (error instanceof Error) return <div>Error: {error.message}</div>;

   return (
      <div>
         <ContactList contacts={contactListData} />
      </div>
   );
};

export default AllContacts;