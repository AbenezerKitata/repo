import {
  VStack,
  Stack,
  HStack,
  Text,
  Flex,
  Heading,
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { FcApproval } from "react-icons/fc";
function PriceWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
const Pricing = ({ data }) => {
  console.log(data);
  return (
    <VStack as={"section"} id={"price"}>
      <HStack width={"full"} justifyContent={"center"}>
        <VStack spacing={2} textAlign='center'>
          <Heading as='h1' fontSize='4xl'>
            Plans that fit your need
          </Heading>
          <Text fontSize='lg' color={"gray.500"}>
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
        </VStack>
      </HStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {data.map((item) => {
          return (
            <PriceWrapper key={item.id}>
              <Box py={4} px={12}>
                <Text fontWeight='500' fontSize='2xl'>
                  {item.title}
                </Text>
                <HStack justifyContent='center'>
                  <Text fontSize='3xl' fontWeight='600'>
                    $
                  </Text>
                  <Text fontSize='5xl' fontWeight='900'>
                    {item.price}
                  </Text>
                  <Text fontSize='3xl' color='gray.500'>
                    {item.time}
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign='start' px={12}>
                  {item.services.map((item, index) => {
                    return (
                      <ListItem key={index}>
                        <ListIcon as={FcApproval} color='green.500' />
                        {item}
                      </ListItem>
                    );
                  })}
                </List>
                <Box w='80%' pt={7}>
                  <Button w='full' colorScheme='red' variant='outline'>
                    Start trial
                  </Button>
                </Box>
              </VStack>
            </PriceWrapper>
          );
        })}
      </Stack>
    </VStack>
  );
};

export default Pricing;
