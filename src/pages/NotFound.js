import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";

const NotFound = () => {
  return (
    <Box h="100vh" bg="#e9ebe8">
      <Center h="full" flexDir={"column"} gap={4}>
        <Heading size={"2xl"} color="gray.700">
          404 Error
        </Heading>
        <Text size="md" color={"gray.600"}>
          Sorry that didnt work. The page you are looking for does not exist.
        </Text>
      </Center>
    </Box>
  );
};

export default NotFound;
