import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
// import Search from "../components/Search";
import StatsTable from "../components/StatsTable";
import { AppContext } from "../context/app-context";

const OverallStatistics = () => {
  const { overallStats, getOverallStats, isLoading } = useContext(AppContext);

  useEffect(() => {
    getOverallStats();
  }, []);
  return (
    <>
      {/* <Search /> */}
      <Box
        boxShadow="xs"
        rounded="sm"
        w={{ base: "100vw", md: "100vw", lg: "100%" }}
        minW={{ lg: "800px", xl: "1200px" }}
        overflowX={"scroll"}
        bg="whiteAlpha.800"
      >
        <StatsTable
          data={overallStats.filter((a) => a.continent === a.country).sort((a,b)=> (a.deaths.total > b.deaths.total))}
          isLoading={isLoading}
          title={"Covid 19 Continent Data"}
        />
      </Box>
      <Box
        boxShadow="xs"
        rounded="sm"
        w={{ base: "100vw", md: "100vw", lg: "100%" }}
        minW={{ lg: "800px", xl: "1200px" }}
        overflowX={"scroll"}
        bg="whiteAlpha.800"
        marginTop={10}
      >
        <StatsTable
          data={overallStats}
          isLoading={isLoading}
          title={"Covid 19 Country Data"}
        />
      </Box>
    </>
  );
};

export default OverallStatistics;
