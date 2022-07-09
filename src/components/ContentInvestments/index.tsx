import React, { useEffect, useState } from "react";

import {
  chakra,
  Flex,
  Icon,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { api } from "../../services/api";
import axios from "axios";


interface Data {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  email: string;

  id: {
    value: number;
  };
}

export default function ContentInvestments() {
  // const data = [
  //   { name: "Daggy", created: "7 days ago" },
  //   { name: "Anubra", created: "23 hours ago" },
  //   { name: "Josef", created: "A few seconds ago" },
  //   { name: "Sage", created: "A few hours ago" },
  // ];
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("white", "gray.800");
  const bg3 = useColorModeValue("gray.100", "gray.700");

  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then(response => {setData(response.data.results),
    console.log(response.data.results)

  })
  }, [])

  return (
    <Flex
      w="full"
      bg="gray.300"
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      {
       <Stack
        direction={{ base: "column" }}
        w="full"
        bg={{ md: bg }}
        shadow="lg"
      >
        {data.map((user) => {
          return (
            <Flex direction={{ base: "row", md: "column" }} bg={bg2} key={user.id.value}>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w={{ base: 120, md: "full" }}
                textTransform="uppercase"
                bg={bg3}
                color={"gray.500"}
                py={{ base: 1, md: 4 }}
                px={{ base: 2, md: 10 }}
                fontSize="md"
                fontWeight="hairline"
              >
                <span>Nome</span>
                <span>Cidade</span>
                <span>Email</span>
                <chakra.span textAlign={{ md: "right" }}>Ações</chakra.span>
              </SimpleGrid>
              <SimpleGrid
                spacingY={3}
                columns={{ base: 1, md: 4 }}
                w="full"
                py={2}
                px={10}
                fontWeight="hairline"
              >
                <span>{user.name.first} <span>{user.name.last}</span></span>
                <chakra.span
                  textOverflow="ellipsis"
                  overflow="hidden"
                  whiteSpace="nowrap"
                >
                  {user.location.city}, {user.location.state}
                </chakra.span>
                <Flex>
                  <chakra.span
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                  >
                    {user.email}
                  </chakra.span>
                </Flex>
                <Flex justify={{ md: "end" }}>
                  <ButtonGroup variant="solid" size="sm" spacing={3}>
                    <IconButton
                      aria-label="Open Button"
                      colorScheme="blue"
                      icon={<BsBoxArrowUpRight />}
                    />
                    <IconButton colorScheme="green" icon={<AiFillEdit />}
                    aria-label="Edit Button " />
                    <IconButton
                      aria-label="Delete Button"
                      colorScheme="red"
                      variant="outline"
                      icon={<BsFillTrashFill />}
                    />
                  </ButtonGroup>
                </Flex>
              </SimpleGrid>
            </Flex>
          );
        })}
      </Stack> 
      }
    </Flex>
  );
}