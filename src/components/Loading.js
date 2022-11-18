import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box width={"full"} height="100vh">
      <Center width={"full"} height="full">
        <Spinner />
      </Center>
    </Box>
  );
};

export default Loading;
