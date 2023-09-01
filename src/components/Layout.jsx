import { Outlet } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Container } from "react-bootstrap";

export const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
};
