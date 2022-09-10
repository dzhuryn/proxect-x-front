import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Messages from "./Pages/Messages";
import Auth from "./Pages/Auth";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="messages" element={<Messages/>}/>
            <Route path="auth-success" element={<Auth/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

