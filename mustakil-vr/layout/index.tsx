import { VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <VStack display={"flex"} maxW={"1200px"} margin={"auto"}>
      <Navigation />
      {children}
      <Footer />
    </VStack>
  );
};

export default Layout;
