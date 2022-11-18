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
} from "@chakra-ui/react";
// import { usePagination } from "../hooks/usePagination";
import PropTypes from "prop-types";
import Loading from "./Loading";

const StatsTable = ({ data, isLoading }) => {
  //   const { posts } = usePagination(data);
  const [itemsPerpage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const indexofLastItem = itemsPerpage * currentPage;
  const indexofFirstItem = indexofLastItem - itemsPerpage;
  const items = data
    .sort((a, b) =>
      a.continent !== b.continent ? (a.continent < b.continent ? -1 : 1) : 0
    )
    .slice(indexofFirstItem, indexofLastItem);

  for (let i = 1; i <= Math.ceil(data.length / itemsPerpage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (i) => {
    setCurrentPage(i);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <Box py={[4, 9]} textAlign={"center"}>
        <Heading color="gray.700">Overall Covid-19 Statistics</Heading>
        <Text mt={2} w={"60%"} mx="auto" color="gray.500" letterSpacing={"1px"}>
          The table below contains real-time data for New Infections, New
          Deaths, and the cummulative number of both for countries all over the
          world.
        </Text>
      </Box>
      <TableContainer>
        <Table variant="simple" colorScheme={"facebook"}>
          {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
          {/* <Table> */}
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
              {/* <Th></Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, index) => (
              <Tr key={item.country}>
                <Td>{indexofFirstItem + index + 1}</Td>
                <Td>{item.country}</Td>
                <Td>{item.continent}</Td>
                <Td isNumeric>{item.population}</Td>
                <Td isNumeric>{item.cases.new}</Td>
                <Td isNumeric>{item.cases.total}</Td>
                <Td isNumeric>{item.deaths.new}</Td>
                <Td isNumeric>{item.deaths.total}</Td>
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
            // border="1px solid #333"
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
