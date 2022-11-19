import { Box, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const GridList = ({ name, item }) => {
  return (
    <GridItem
      borderBottom={"1px solid #f3f3f3"}
      colSpan={[2, 1]}
      borderRadius={"sm"}
    >
      <HStack py={3}>
        <Box w={["50%", "25%"]}>
          <Text color={"blackAlpha.600"} fontWeight={600}>
            {name}
          </Text>
        </Box>
        <Box w={["50%", "75%"]}>
          <Text color="blackAlpha.700">{item}</Text>
        </Box>
      </HStack>
    </GridItem>
  );
};

GridList.propTypes = {
  name: PropTypes.any,
  item: PropTypes.any,
};

export default GridList;
