import React, { useState } from "react";
import { Flex, SimpleGrid, Image, Heading, VStack } from "@chakra-ui/react";
import { clients } from "../../data";

const Clients = () => {
  const [data, setData] = useState(clients);
  return (
    <VStack as={"section"} id={"clients"}>
      <Heading
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        What is our company doing?
      </Heading>
      <SimpleGrid columns={5} spacing={10}>
        {data.map((item) => {
          return (
            <Flex key={item.id}>
              <Image
                objectFit={"contain"}
                width='150px'
                height='150px'
                src={item.logo}
                alt={item.label}
              />
            </Flex>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Clients;
