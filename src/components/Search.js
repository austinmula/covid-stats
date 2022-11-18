import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";

const Search = () => {
  return (
    <Box bg="white" boxShadow={"sm"} borderRadius={"md"}>
      <Box textAlign={"center"}>
        <Heading size="xl">Search Historical Data</Heading>
      </Box>
      <Box as="form" p={4}>
        <FormControl>
          <FormLabel color="#344054">Country Name</FormLabel>
          <Input
            type="text"
            id="first_name"
            placeholder="Enter Country Name"
            size={["sm", "md", "lg"]}
            variant="unstyled"
            border={"1px solid #D0D5DD"}
            boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
            borderRadius={"8px"}
            _focus={{
              border: "1px solid #84CAFF",
              boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
            }}
            _invalid={{
              border: " 1px solid #F89687",
            }}
            // onChange={handleChange}
          />
          {/* {error.first_name && (
                <FormErrorMessage>Please enter first name</FormErrorMessage>
              )} */}
        </FormControl>
      </Box>
    </Box>
  );
};

export default Search;
