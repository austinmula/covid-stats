import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box bg="white" boxShadow={"sm"} borderRadius={"md"}>
      <Box textAlign={"center"}>
        <Heading>Search Historical Data</Heading>
      </Box>
    </Box>
  );
};

export default Search;
