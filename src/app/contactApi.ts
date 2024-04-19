import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Contact {
	id: string;
	name: string;
	email: string;
	telephone: string;
	address: string;
	img: string;
	createdAt: Date;
	updatedAt: Date;
}

interface GetContactByIdResponse {
	contact: Contact;
}

interface GetContactsResponse {
	filter(arg0: (item: import('../model/Contact').default) => boolean): unknown;
	contacts: Contact[];
}

interface GetContactByIdResponse {
	contact: Contact;
}

interface AddContactRequest {
	name: string;
	email: string;
	telephone: string;
	address: string;
	img: string;
}

interface UpdateContactRequest {
	id: string;
	name?: string;
	email?: string;
	telephone?: string;
	address?: string;
}

export const contactApi = createApi({
	reducerPath: 'contactApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://contact-server-rust.vercel.app/api' }),
	tagTypes: ['contacts'],
	endpoints: (builder) => ({
		getContacts: builder.query<GetContactsResponse, void>({
			query: () => '/contacts',
			providesTags: ['contacts'],
		}),

		getContactById: builder.query<GetContactByIdResponse, string>({
			query: (id) => `/contacts/${id}`,
		}),

		addContact: builder.mutation<Contact, AddContactRequest>({
			query: (contact) => ({
				url: '/contacts',
				method: 'POST',
				body: contact,
			}),
			invalidatesTags: ['contacts'],
		}),

		updateContact: builder.mutation<Contact, UpdateContactRequest>({
			query: ({ id, ...contact }) => ({
				url: `/contacts/${id}`,
				method: 'PUT',
				body: contact,
			}),
			invalidatesTags: ['contacts'],
		}),

		removeContact: builder.mutation<void, string>({
			query: (id) => ({
				url: `/contacts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['contacts'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useAddContactMutation,
	useUpdateContactMutation,
	useRemoveContactMutation,
} = contactApi;
