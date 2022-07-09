import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  Button,
  useBreakpointValue,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

import Navbar from "../../components/Navbar";
import ContentInvestments from "../../components/ContentInvestments";

export default function Investments() {
  return (
    <Navbar children={<ContentInvestments /> } />
  )
}