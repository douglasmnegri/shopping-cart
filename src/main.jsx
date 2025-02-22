  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import App from "./App";
  import Shop from "./Shop/Shop";
  import Cart from "./Cart/Cart";
  import "./index.css";
  import { CartProvider } from "./CartContext";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "home",
      element: <App />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </StrictMode>
  );
