import { Box, Grid, GridItem, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import { AppContext } from "../context/app-context";

import GridList from "../components/GridList";
import OverallChart from "../components/charts/OverallChart";
import { useLocation } from "react-router-dom";
import CasesTodayChart from "../components/charts/CasesTodayChart";
import { format } from "date-fns";
import { numberWithcommas } from "../utils/numberFormats";
import OverallDeaths from "../components/charts/OverallDeaths";

const DetailedPage = () => {
  const { getCountryStats, isLoading, country, getTodaysData, todayData } =
    useContext(AppContext);
  const date = Date.now();
  const location = useLocation();
  useEffect(() => {
    getCountryStats(location.state);
    getTodaysData({
      day: format(date, "yyyy-MM-dd"),
      country: location.state.country,
    });
  }, []);

  if (isLoading) return <Loading />;

  //   x-axis label

  return (
    <VStack
      spacing={4}
      boxSize={"border-box"}
      mx={3}
      w={{ base: "95vw", md: "100vw", lg: "100%" }}
      maxW={{ lg: "800px", xl: "1200px" }}
      overflowX={"scroll"}
    >
      {/* left */}
      <Box w="full">
        <Heading size="xl" textAlign={"left"} color="gray.700">
          {location.state.country} Covid-19 Data
        </Heading>
      </Box>
      {/* right */}
      <Box
        bg="#fff"
        w={{ base: "100vw", md: "100vw", lg: "100%" }}
        minW={{ lg: "800px", xl: "1200px" }}
        p={4}
      >
        {country.slice(0, 1).map((cty, index) => (
          <Grid
            key={index}
            templateColumns="repeat(2, 1fr)"
            gap={0}
            columnGap={3}
          >
            <GridList
              key={"cty.continent"}
              name="Continent:"
              item={cty.continent}
            />
            <GridList key={cty.country} name=" Country:" item={cty.country} />
            <GridList
              key={"cty.population"}
              name="Population:"
              item={numberWithcommas(cty.population)}
            />
            <GridList key={cty.day} name="  Date:" item={cty.day} />
            <GridList
              key={"cty.cases.active"}
              name="Active Cases:"
              item={numberWithcommas(cty.cases.active)}
            />
            <GridList
              key={"cty.cases.new"}
              name="New Cases:"
              item={numberWithcommas(cty.cases.new)}
            />
            <GridList
              key={"cty.cases.critical"}
              name="Critical Cases:"
              item={numberWithcommas(cty.cases.critical)}
            />
            <GridList
              key={"cty.cases.recovered"}
              name="Recovered Cases:"
              item={numberWithcommas(cty.cases.recovered)}
            />
            <GridList
              key={"cty.deaths.new"}
              name="New Death cases :"
              item={numberWithcommas(cty.deaths.new)}
            />
            <GridList
              key={"cty.deaths.total"}
              name="Total Deaths :"
              item={numberWithcommas(cty.deaths.total)}
            />
            <GridList
              key={cty.tests.total}
              name="Total Tests:"
              item={numberWithcommas(cty.tests.total)}
            />
          </Grid>
        ))}
      </Box>

      <Box w="full" h="fit-content">
        <Grid
          templateColumns="repeat(6, 1fr)"
          gap={2}
          fontSize={"lg"}
          letterSpacing="1px"
        >
          <GridItem bg="whiteAlpha.800" colSpan={[6, 5]}>
            <Box borderBottom="1px solid #f3f3f3" p={4}>
              <Text fontSize={"xl"}>New Cases & Deaths Today </Text>
            </Box>
            <Box bg="whiteAlpha.700" p={8}>
              <CasesTodayChart data={todayData} />
            </Box>
          </GridItem>
          <GridItem bg="whiteAlpha.800" colSpan={[6, 6]}>
            <Box borderBottom="1px solid #f3f3f3" p={4}>
              <Text fontSize={"xl"}>
                Overall Covid for 2022 {location.state.country}{" "}
              </Text>
            </Box>
            <Box bg="whiteAlpha.700" p={8}>
              <OverallChart data={country} />
            </Box>
          </GridItem>

          <GridItem bg="whiteAlpha.800" colSpan={[6, 6]}>
            <Box borderBottom="1px solid #f3f3f3" p={4}>
              <Text fontSize={"xl"}>
                Covid 19 Total Recoveries vs Total Deaths -{" "}
                {location.state.country}
              </Text>
              <Text fontSize={"sm"}>last few days</Text>
            </Box>
            <Box bg="whiteAlpha.700" p={8}>
              <OverallDeaths data={country} />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
};

export default DetailedPage;
