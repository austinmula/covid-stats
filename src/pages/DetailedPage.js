import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import { AppContext } from "../context/app-context";

const DetailedPage = () => {
  const { getCountryStats, isLoading, country } = useContext(AppContext);
  useEffect(() => {
    getCountryStats({ country: "usa" });
    console.log(country);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Box
      bg="#fff"
      w={{ base: "100vw", md: "100vw", lg: "100%" }}
      minW={{ lg: "800px", xl: "1200px" }}
      p={4}
    >
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={0}
        fontSize={"lg"}
        rowGap={2}
        letterSpacing="1px"
      >
        <GridItem>
          <Text color={"blackAlpha.600"} fontWeight={600}>
            Country
          </Text>
        </GridItem>
        <GridItem colStart={2} colEnd={7} bg="papayawhip">
          Kenya
        </GridItem>
        <GridItem>
          <Text color={"blackAlpha.600"} fontWeight={600}>
            Continent
          </Text>
        </GridItem>
        <GridItem colStart={2} colEnd={7} bg="papayawhip">
          Africa
        </GridItem>
        <GridItem>
          <Text color={"blackAlpha.600"} fontWeight={600}>
            Population
          </Text>
        </GridItem>
        <GridItem colStart={2} colEnd={7} bg="papayawhip">
          12244657
        </GridItem>
        <GridItem>
          <Text color={"blackAlpha.600"} fontWeight={600}>
            Deaths Today
          </Text>
        </GridItem>
        <GridItem colStart={2} colEnd={7} bg="papayawhip">
          12244657
        </GridItem>
      </Grid>
    </Box>
  );
};

export default DetailedPage;
