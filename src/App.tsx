import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />  
    </>
  );
}