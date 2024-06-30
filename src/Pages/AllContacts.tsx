// src/Pages/AllContacts.tsx

import { useEffect, useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../app/contactApi';
import { RootState } from '../app/store';
import { Contact } from "../model/Contact";
import ContactList from '../components/contactList';

const AllContacts: FC = () => {
   const [contactListData, setContactListData] = useState<Contact[]>([]);

   const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
   const { data, isLoading, error } = useGetContactsQuery();

   useEffect(() => {
      if (data) {
         setContactListData(data?.contacts);
      }
   }, [data]);

   useEffect(() => {
      if (data && data?.contacts) {
         const filteredData = data?.contacts?.filter((item: Contact) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setContactListData(filteredData);
      }
   }, [data, searchTerm]);

   if (isLoading) return <div>Loading...</div>;
   if (error instanceof Error) return <div>Error: {error?.message}</div>;

   return (
      <div>
         <ContactList contacts={contactListData} />
      </div>
   );
};

export default AllContacts;
