import React from "react";

import { Flex } from "@chakra-ui/react";
const ToggleBar = ({ toggle }) => {
  return (
    <Flex
      position={"fixed"}
      zIndex={"-1"}
      width={"full"}
      height={"100%"}
      background={"#0d0d0d"}
      display={"grid"}
      alignItems={"center"}
      top={0}
      left={0}
      transition={"0.3s ease-in-aut"}
      opacity={toggle === true ? "1" : "0"}
    />
  );
};

export default ToggleBar;
