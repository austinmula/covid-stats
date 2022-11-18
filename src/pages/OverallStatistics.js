import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Search from "../components/Search";
import StatsTable from "../components/StatsTable";
import { AppContext } from "../context/app-context";

const OverallStatistics = () => {
  const { overallStats, getOverallStats, isLoading } = useContext(AppContext);

  useEffect(() => {
    getOverallStats();
  }, []);
  return (
    <>
      <Search />
      <Box
        boxShadow="xs"
        rounded="sm"
        bg="whiteAlpha.800"
        w={{ base: "100vw", md: "100vw", lg: "100%" }}
        minW={{ lg: "800px", xl: "1200px" }}
        overflowX={"scroll"}
      >
        <StatsTable data={overallStats} isLoading={isLoading} />
      </Box>
    </>
  );
};

export default OverallStatistics;
