import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RiContactsBookUploadFill } from 'react-icons/ri';
import { useAddContactMutation, useGetContactsQuery, useUpdateContactMutation } from '../app/contactApi';
import toast from 'react-hot-toast';
import { z } from 'zod';

interface ContactData {
  _id: string;
  name: string;
  email: string;
  telephone: string;
  address: string;
  img: string;
}

interface NewContactProps {
  id: string;
  setOpen: (open: boolean) => void;
}

const isValidBdPhoneNumber = (value: string): boolean => {
  const bdPhoneNumberRegex = /^(?:01)?\d{11}$/;
  return bdPhoneNumberRegex.test(value);
};

const schema = z.object({
  name: z.string().min(2, { message: 'Required' }).max(50, { message: 'Required' }),
  email: z.string(),
  telephone: z.string().refine(value => isValidBdPhoneNumber(value), { message: 'Invalid Bangladeshi phone number' }),
  address: z.string().min(5, { message: 'Required' }).max(100, { message: 'Required' }),
  img: z.string().url({ message: 'Required' }),
});

const NewContact: FC<NewContactProps> = ({ id, setOpen }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<ContactData>({ resolver: zodResolver(schema) });

  const [addContactMutation] = useAddContactMutation();
  const [updateContactMutation] = useUpdateContactMutation();

  const { data: contacts } = useGetContactsQuery();

  const contactData = contacts && Array.isArray(contacts) ? contacts.find((contact: ContactData) => contact._id === id) : null;

  useEffect(() => {
    if (contactData) {
      setValue('name', contactData.name || '');
      setValue('email', contactData.email || '');
      setValue('telephone', contactData.telephone || '');
      setValue('address', contactData.address || '');
      setValue('img', contactData.img || '');
    }
  }, [contactData, setValue]);

  const onSubmit = async (data: ContactData) => {
    try {
      if (id) {
        await updateContactMutation({ id, ...data }).unwrap();
        setOpen(false);
        toast.success('Update Contact Successfully');
      } else {
        await addContactMutation(data).unwrap();
        toast.success('Add Contact Successfully');
      }
      navigate('/all-contacts');
    } catch (error) {
      console.error('Failed to save contact:', error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(String(error));
      }
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white p-4 px-4 text-sm max-w-lg mx-auto my-10 rounded-md">
        <div className="md:col-span-5">
          <label htmlFor="full_name" className="text-left">Full Name</label>
          <input type="text" placeholder="Full Name" {...register('name')} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-[#dfd0f3]" />
          <p className="mt-2 text-sm text-red-600">{errors.name?.message}</p>
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="email@domain.com" {...register('email')} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-[#dfd0f3]" />
          <p className="mt-2 text-sm text-red-600">{errors.email?.message}</p>
        </div>

        <div className="mt-3">
          <label htmlFor="telephone">Phone Number</label>
          <input type="text" placeholder="+8801789216063" {...register('telephone')} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-[#dfd0f3]" />
          <p className="mt-2 text-sm text-red-600">{errors.telephone?.message}</p>
        </div>

        <div className="md:col-span-5">
          <label htmlFor="address" className="text-left">Address</label>
          <input type="text" placeholder="Address" {...register('address')} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-[#dfd0f3]" />
          <p className="mt-2 text-sm text-red-600">{errors.address?.message}</p>
        </div>

        <div className="md:col-span-5">
          <label htmlFor="img" className="text-left">Image URL</label>
          <input type="text" placeholder="Image URL" {...register('img')} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:outline-[#dfd0f3]" />
          <p className="mt-2 text-sm text-red-600">{errors.img?.message}</p>
        </div>

        <div className="mt-3 text-right">
          <div className="inline-flex items-end">
            <button type="submit" className="flex gap-2 items-center bg-indigo-600 text-white hover:bg-purple-500 p-2 rounded text-sm w-auto">
              <RiContactsBookUploadFill />
              <span>{id ? 'Update Contact' : 'Add Contact'}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewContact;
