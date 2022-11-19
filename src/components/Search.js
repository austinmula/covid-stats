import { Box, FormControl, Input } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const Search = ({ handleFilterByName }) => {
  return (
    <Box
      bg="white"
      boxShadow={"sm"}
      borderRadius={"md"}
      display="flex"
      justifyContent={"center"}
    >
      <Box as="form" p={4} w={["auto", "50vh"]}>
        <FormControl>
          <Input
            type="text"
            id="country"
            name="country"
            placeholder="Search using country name"
            size={["sm", "md"]}
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
            onChange={(e) => handleFilterByName(e)}
          />
        </FormControl>
      </Box>
    </Box>
  );
};

Search.propTypes = {
  handleFilterByName: PropTypes.func,
};

export default Search;
