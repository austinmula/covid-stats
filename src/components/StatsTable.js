import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  // Flex,
  // Box,
  // Button,
  // Center,
  Heading,
  Box,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
// import { usePagination } from "../hooks/usePagination";
import PropTypes from "prop-types";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { numberWithcommas } from "../utils/numberFormats";
import Search from "./Search";

const StatsTable = ({ data, isLoading }) => {
  const [itemsPerpage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterName, setFilterName] = useState("");
  const pageNumbers = [];

  const indexofLastItem = itemsPerpage * currentPage;
  const indexofFirstItem = indexofLastItem - itemsPerpage;
  const items = data
    // .sort((a, b) =>
    //   a.population !== b.population ? (a.population < b.population ? -1 : 1) : 0
    // )
    .filter((skey) => {
      if (filterName === "") {
        return skey;
      } else if (
        skey.country
          .concat(skey.continent)
          .toLowerCase()
          .includes(filterName.toLocaleLowerCase())
      ) {
        return skey;
      }
    });

  for (let i = 1; i <= Math.ceil(items.length / itemsPerpage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (i) => {
    setCurrentPage(i);
  };

  const handleFilterByName = (e) => {
    setCurrentPage(1);
    setFilterName(e.target.value);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Box py={[4, 9]} textAlign={"center"}>
        <Heading as="h1" size="xl" color="gray.700">
          Overall Covid-19 Statistics
        </Heading>
        <Text mt={2} w={"60%"} mx="auto" color="gray.500" letterSpacing={"1px"}>
          The table below rapidAPI data for new infections, new deaths, and the
          cummulative number of cases, recoveries and deaths, for countries all
          over the world.
        </Text>
        <Search handleFilterByName={handleFilterByName} />
      </Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Country</Th>
              <Th>Continent</Th>
              <Th isNumeric>Population</Th>
              <Th isNumeric>New Cases</Th>
              <Th isNumeric>Total Cases</Th>
              <Th isNumeric>New Deaths</Th>
              <Th isNumeric>Total Deaths</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {items
              .slice(indexofFirstItem, indexofLastItem)
              .map((item, index) => (
                <Tr key={item.country}>
                  <Td>{indexofFirstItem + index + 1}</Td>
                  <Td>{item.country}</Td>
                  <Td>{item.continent}</Td>
                  <Td isNumeric>{numberWithcommas(item.population)}</Td>
                  <Td isNumeric>{numberWithcommas(item.cases.new)}</Td>
                  <Td isNumeric>{numberWithcommas(item.cases.total)}</Td>
                  <Td isNumeric>{numberWithcommas(item.deaths.new)}</Td>
                  <Td isNumeric>{numberWithcommas(item.deaths.total)}</Td>
                  <Td>
                    <Button
                      size="sm"
                      colorScheme={"whatsapp"}
                      as={Link}
                      to={`/covid-stats/country-stats/${item.country}`}
                      state={{ country: item.country }}
                    >
                      more info
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Center py={[2, 3]} gap={2}>
        {pageNumbers.map((item) => (
          <Center
            w="20px"
            h="20px"
            p={4}
            cursor={item !== currentPage ? "pointer" : null}
            bg={item === currentPage ? "green.600" : "gray.700"}
            color="white"
            onClick={() => handleClick(item)}
            key={item}
          >
            {item}
          </Center>
        ))}
      </Center>
    </>
  );
};

StatsTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default StatsTable;
