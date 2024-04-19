import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AddContact from "../Pages/AddContact";
import AllContacts from "../Pages/AllContacts";
import App from "../App";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <HomePage />,
         },
         {
            path: "*",
            element: <HomePage />,
         },
         {
            path: "add-contacts",
            element: <AddContact />,
         },
         {
            path: "all-contacts",
            element: <AllContacts />,
         },
      ],
   },
]);

export default router;
