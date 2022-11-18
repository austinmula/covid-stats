import React, { useContext, useEffect, useState } from "react";
import StatsTable from "./components/StatsTable";
import { AppContext } from "./context/app-context";

function App() {
  const { overallStats, getOverallStats } = useContext(AppContext);
  const [, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getOverallStats();
  }, []);

  // if (isLoading) return <p>Loading ..</p>;

  return (
    <div>
      <StatsTable data={overallStats} />
      {/* {posts?.length < 1 ? (
        <p>Nothing to show here</p>
      ) : (
        <ul>
          {posts?.map((item) => (
            <li key={item.country}>{item.country}</li>
          ))}
        </ul>
      )} */}

      <div
        style={{
          display: "flex",
          gap: "5px",
          minWidth: "100vw",
        }}
      >
        {/* {pagenumbers?.map((i) => (
          <div
            onClick={() => changePage(i)}
            key={i}
            style={{ background: "#fff", width: "20px", cursor: "pointer" }}
          >
            {i}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;
