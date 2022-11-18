import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Box>
        <Box
          as="header"
          p={3}
          borderBottom="1px solid #f3f3f3"
          boxShadow="0px 1px 2px rgba(16, 24, 40, 0.05)"
        >
          <Text fontSize="2xl">Covid-Statistics</Text>
        </Box>
        <Center bg="#e9ebe8" py={[4, 12]}>
          <Box
            as="main"
            maxW="1440px"
            display="flex"
            minH="100vh"
            flexDir="column"
            gap={4}
            p={[5, 3]}
          >
            <Outlet />
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default AppLayout;

// AppLayout.propTypes = {
//   children: PropTypes.any,
// };
