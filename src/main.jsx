import React from "react";
import ReactDOM from "react-dom/client";
import "src/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "flowbite";
import setupRouter from "./router/router";
import { RouterProvider } from "react-router-dom";
import ServiceProvider from "./context/ServiceContext.jsx";
import ServiceFactory from "./services/ServiceFactory.js";

const service = ServiceFactory();

const queryClient = new QueryClient();
const router = setupRouter();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <ServiceProvider service={service}>
            <RouterProvider router={router} />
        </ServiceProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
