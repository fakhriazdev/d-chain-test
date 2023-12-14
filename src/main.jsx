import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from 'react-redux';
import "flowbite";
import setupRouter from "./router/router";
import { RouterProvider } from "react-router-dom";
import ServiceFactory from "./services/ServiceFactory.js";
import "./index.css";
import ServiceProvider from "./context/ServiceContext.jsx";
import setupStore from "./store.js";

const queryClient = new QueryClient();
const router = setupRouter();
const service = ServiceFactory();
const store = setupStore();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ServiceProvider service={service}>
          <RouterProvider router={router} />
        </ServiceProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
