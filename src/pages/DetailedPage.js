import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Loading from "../components/Loading";
import { AppContext } from "../context/app-context";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
// import { format, parseISO } from "date-fns";

const DetailedPage = () => {
  const { getCountryStats, isLoading, country } = useContext(AppContext);
  useEffect(() => {
    getCountryStats({ country: "usa" });
    console.log(country);
  }, []);

  if (isLoading) return <Loading />;

  //   x-axis label

  return (
    <VStack spacing={3}>
      <Box
        bg="#fff"
        w={{ base: "100vw", md: "100vw", lg: "100%" }}
        minW={{ lg: "800px", xl: "1200px" }}
        p={4}
      >
        {country.map((ctry, index) => {
          let keys = Object.keys(ctry);

          return (
            <div className="row" key={ctry.country}>
              <Text
                color={"blackAlpha.600"}
                fontWeight={600}
                fontSize={"lg"}
                letterSpacing="1px"
              >
                population
                {keys[index]}
              </Text>
            </div>
          );
        })}
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

          <GridItem>
            <Text color={"blackAlpha.600"} fontWeight={600}>
              Country
            </Text>
          </GridItem>
          <GridItem colStart={2} colEnd={7} bg="papayawhip">
            {country.country}
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

      <Box w="full" h="fit-content">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={2}
          fontSize={"lg"}
          letterSpacing="1px"
        >
          <GridItem bg="whiteAlpha.800">
            <LineChart
              width={500}
              height={300}
              data={country}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              {/* <Line type="monotone" dataKey="cases.new" stroke="#8884d8" /> */}

              <Line type="monotone" dataKey="deaths.new" stroke="#ed613e" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </GridItem>

          <GridItem bg="whiteAlpha.800">
            <LineChart
              width={500}
              height={300}
              data={country}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="cases.new" stroke="#8884d8" />

              <Line type="monotone" dataKey="deaths.new" stroke="#ed613e" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </GridItem>

          <GridItem bg="whiteAlpha.800">
            <LineChart
              width={500}
              height={300}
              data={country}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              {/* <Line type="monotone" dataKey="cases.new" stroke="#8884d8" /> */}

              <Line type="monotone" dataKey="cases.new" stroke="#ed613e" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
};

export default DetailedPage;
