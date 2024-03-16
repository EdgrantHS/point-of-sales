import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Component/Navbar'
import InventoryDashboard from './Page/InventoryDashboard';
import InventoryCards from './Page/InventoryCards';
import PenambahanBarang from './Page/PenambahanBarang';
import PrintNota from './Page/PrintNota';
import ErrorPage from "./Page/ErrorPage";
import Dashboard from './Page/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
  }, {
    path: "/belajar_web/",
    element: (<InventoryDashboard newTime="Last Updated: 15/01/2023 13:41:01 AM" />),
  }, {
    path: "/belajar_web/inventory",
    element: (<InventoryCards />),
  }, {
    path: "/belajar_web/penambahan",
    element: (<PenambahanBarang />),
  }, {
    path: "/belajar_web/print",
    element: (<PrintNota />),
  }, {
    path: "/belajar_web/dashboard",
    element: (<Dashboard />),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={BrowserRouter}/>
  </React.StrictMode>,
)
