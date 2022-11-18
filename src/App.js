import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
// import Loading from "./components/Loading";
import Search from "./components/Search";
import StatsTable from "./components/StatsTable";
import { AppContext } from "./context/app-context";
import AppLayout from "./layout/AppLayout";

function App() {
  const { overallStats, getOverallStats, isLoading } = useContext(AppContext);
  // const [, setIsLoading] = useState(false);

  // const load = true;

  useEffect(() => {
    // setIsLoading(true);
    getOverallStats();
  }, []);

  // if (load) return <Loading />;

  return (
    <>
      <AppLayout>
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
      </AppLayout>
    </>
  );
}

export default App;
