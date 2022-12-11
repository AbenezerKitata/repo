import {
  Avatar,
  Button,
  Center,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  IconButton,
  useDisclosure,
  VStack,
  Icon,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";

import { Link as LinkScrool } from "react-scroll";
import { signIn, signOut, useSession } from "next-auth/react";

import { BsMoonFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { links } from "../../data";
import { useRouter } from "next/router";
import ToggleBar from "./ToggleBar";
import { MustakilIcon, MustakilLogo } from "../Svgs";
const Navigation = () => {
  const [nav, setNav] = useState(links);
  const { data: session } = useSession();
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelectorAll(target)[0].offsetTop;

    console.log(location);
    window.scrollTo({
      left: 0,
      top: location - 64,
    });
  };

  return (
    <VStack
      id={"home"}
      display={"flex"}
      bgColor={"white"}
      height={"80px"}
      width={"full"}
      alignItems={"center"}
      justifyContent={"center"}
      position={"sticky"}
      top={0}
      zIndex={10}
      transition={{
        base: "0.8s all ease",
        md: "0.8s all ease",
        xl: "0.8s all ease",
      }}
    >
      <Flex
        display={"flex"}
        justifyContent={"space-between"}
        height={"80px"}
        zIndex={1}
        width={"full"}
        padding={"0 24px"}
        maxW={"1200px"}
        alignItems={"center"}
      >
        <MustakilLogo />
        <Flex
          as={"ul"}
          alignItems={"center"}
          textAlign={"center"}
          marginRight={"-22px"}
          display={{
            base: "none",
            md: "flex",
            xl: "flex",
          }}
        >
          {nav.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleClick}
                as={LinkScrool}
                _hover={{
                  borderBottom:
                    router.pathname == link.href ? " " : "3px solid #01bf71",
                  transition: "  0.3s ease-in-out",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </Flex>
        <Flex alignItems={"center"}>
          {session ? (
            <Menu>
              <MenuButton
                variant='outline'
                colorScheme='teal'
                cursor={"pointer"}
                style={{ margin: 0, marginLeft: 6 }}
                minW={0}
              >
                <Avatar size={"sm"} src={`${session.user?.image}`} />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar size={"2xl"} src={`${session.user?.image}`} />
                </Center>
                <br />
                <Center>
                  <p>{session.user.email}</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem onClick={() => signOut()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              onClick={() => signIn()}
              rightIcon={<IoMdArrowRoundForward />}
              colorScheme='teal'
              variant='outline'
              style={{ margin: 0, marginLeft: 6 }}
            >
              Sign in
            </Button>
          )}
          <Icon
            display={{
              base: "flex",
              md: "none",
              xl: "none",
            }}
            as={GiHamburgerMenu}
            onClick={handleToggle}
            cursor={"pointer"}
            zIndex={2}
          />
          <ToggleBar toggle={toggle} />
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Navigation;
