import {
  Heading,
  VStack,
  Text,
  Flex,
  Badge,
  Highlight,
  Button,
  Icon,
  Box,
  Stack,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";
import { BsFillStarFill } from "react-icons/bs";
import { IoMdArrowRoundForward } from "react-icons/io";
import { MustakilIcon } from "../Svgs";

const Hero = () => {
  return (
    <VStack
      id={"home"}
      as={"section"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={10}
      width={"full"}
      padding={4}
      style={{ margin: 0, backgroundColor: "#E5E5E506" }}
    >
      <HStack
        width={"full"}
        flexDir={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <Flex
          style={{
            margin: 0,
            alignItems: "flex-start",
            flexDirection: "column",
          }}
          width={"full"}
        >
          <Flex
            alignItems={"flex-start"}
            marginBottom={4}
            alignContent={"center"}
            flexDir={"column"}
          >
            <Badge marginBottom={2}>+18K Installs</Badge>
            <Box>
              <Icon as={BsFillStarFill} boxSize={4} marginRight={2} />
              <Icon as={BsFillStarFill} boxSize={4} marginRight={2} />
              <Icon as={BsFillStarFill} boxSize={4} />
            </Box>
          </Flex>
          <Flex maxW={"400px"}>
            <Heading lineHeight='tall'>
              <Highlight
                query={["Virtual", "Reality  "]}
                styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
              >
                All-in-one palette generator, editor and manager for Virtual
                Reality.
              </Highlight>
            </Heading>
          </Flex>
          <Text maxW={"400px"}>
            Easily create harmonious, accessible-first palettes and save
            countless hours getting colours for your design system.
          </Text>
          <HStack marginTop={4}>
            <Button
              leftIcon={<MustakilIcon color={"white"} />}
              colorScheme={"teal"}
              variant='solid'
            >
              Try it out
            </Button>
            <Button
              rightIcon={<IoMdArrowRoundForward />}
              colorScheme='blue'
              variant='outline'
            >
              Buy now
            </Button>
          </HStack>
        </Flex>
        <Flex alignItems={"flex-end"} width={"full"}></Flex>
      </HStack>
    </VStack>
  );
};

export default Hero;
