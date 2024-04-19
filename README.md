# Contact Management App

This project is a contact management application built using React, Redux, and Vite. It allows users to add, view, update, and delete contacts. The application also includes search functionality to filter contacts by name.

## Live Demo

You can view the live demo of the [Contact Management App](https://contact-management-sp.netlify.app).

## Features

-  Add new contacts with name, email, phone number, address, and image URL
-  View all contacts with pagination
-  Update existing contacts
-  Delete contacts
-  Search functionality to filter contacts by name

## Technologies Used

-  React.js: A JavaScript library for building user interfaces
-  Redux: A predictable state container for JavaScript apps
-  Vite: A fast frontend build tool
-  TypeScript: A superset of JavaScript that adds static typing
-  @headlessui/react: A set of fully accessible UI components, designed to integrate with Tailwind CSS
-  @hookform/resolvers: A set of resolvers for React Hook Form, including validation libraries like Yup and Zod
-  @reduxjs/toolkit: A set of utilities to simplify Redux development, including creating slices, defining reducers, and configuring the store
-  react-hot-toast: A customizable toast notification library for React applications
-  react-icons: A library of popular icons for React applications
-  react-redux: Official React bindings for Redux, enabling React components to interact with the Redux store
-  uuid: A library for generating unique identifiers (UUIDs)
-  zod: A TypeScript-first schema definition and validation library
-  tailwindcss: A utility-first CSS framework for building custom designs quickly

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd contact-management-app
```

3. Install dependencies using npm:

```
npm install
```

4. Start the development server:

```
npm run dev
```

5. Open your browser and visit http://localhost:3000 to view the application.

## Usage

-  Add a new contact by clicking on the "Add Contact" button and filling out the required fields.
-  View all contacts by clicking on the "All Contacts" button.
-  Update a contact by clicking on the edit icon next to the contact and modifying the details.
-  Delete a contact by clicking on the delete icon next to the contact.
-  Use the search bar to filter contacts by name.

## Project Structure

-  src/components: Contains React components used in the application.
-  src/app: Contains Redux store configuration and API slices.
-  src/Pages: Contains page components for different routes.
-  src/styles: Contains global CSS styles.
