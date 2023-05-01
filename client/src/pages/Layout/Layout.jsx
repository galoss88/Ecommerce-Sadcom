import React, { useEffect } from "react";
import {
  ContainerChildren,
  ContainerLayout,
  ContainerNavbar,
} from "./style/layout";
import NavBar from "../../components/container/Navbar/Navbar";

const Layout = (props) => {
  
  return (
    <ContainerLayout>
      <ContainerNavbar>
        <NavBar />
      </ContainerNavbar>
      <ContainerChildren>{props.children}</ContainerChildren>
    </ContainerLayout>
  );
};

export default Layout;
