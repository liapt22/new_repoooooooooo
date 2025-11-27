import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import { router } from "./router"
import { RouterProvider } from 'react-router-dom'
import CartContextProvider from './context/CartContext';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>
);

