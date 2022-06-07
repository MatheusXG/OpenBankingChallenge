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
import ContentInvestiments from "../../components/ContentInvestiments";

export default function Investiments() {
  return (
    <Navbar children={<ContentInvestiments /> } />
  )
}