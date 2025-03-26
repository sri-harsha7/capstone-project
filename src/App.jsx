import React from "react";
import "./App.css";
import Login from "./components/Login";
import Genre from "./components/Genre";
import Widgets from "./components/Widgets";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login></Login> },
    {
      path: "/genre",
      element: <Genre />,
    },
    {
      path: "/widgets",
      element: <Widgets />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
