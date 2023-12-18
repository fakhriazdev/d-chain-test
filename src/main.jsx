import React from "react";
import ReactDOM from "react-dom/client";
import "src/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "flowbite";
import setupRouter from "./router/router";
import { RouterProvider } from "react-router-dom";
import ServiceFactory from "./services/ServiceFactory";
import ServiceProvider from "./context/ServiceContext";
import setupStore from "./store";
import { Provider } from "react-redux";


const queryClient = new QueryClient();
const router = setupRouter();
const service = ServiceFactory();
const store = setupStore();



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ServiceProvider service={service}>
                    <RouterProvider router={router} />
                </ServiceProvider>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>

);
