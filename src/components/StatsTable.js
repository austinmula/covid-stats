import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Box,
  Button,
} from "@chakra-ui/react";
// import { usePagination } from "../hooks/usePagination";
import PropTypes from "prop-types";

const StatsTable = ({ data }) => {
  //   const { posts } = usePagination(data);
  const [itemsPerpage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const indexofLastItem = itemsPerpage * currentPage;
  const indexofFirstItem = indexofLastItem - itemsPerpage;
  const items = data.slice(indexofFirstItem, indexofLastItem);

  for (let i = 1; i <= Math.ceil(data.length / itemsPerpage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (i) => {
    setCurrentPage(i);
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme={"facebook"}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>No.</Th>
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
          {items.map((item, index) => (
            <Tr key={item.country}>
              <Td isNumeric>{indexofFirstItem + index + 1}</Td>
              <Td>{item.country}</Td>
              <Td>{item.continent}</Td>
              <Td isNumeric>{item.population}</Td>
              <Td isNumeric>{item.cases.new}</Td>
              <Td isNumeric>{item.cases.total}</Td>
              <Td isNumeric>{item.deaths.new}</Td>
              <Td isNumeric>{item.deaths.total}</Td>
              <Td>
                <Button>More</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Flex>
            {pageNumbers.map((item) => (
              <Box
                w={5}
                h={5}
                cursor="pointer"
                onClick={() => handleClick(item)}
                key={item}
              >
                {item}
              </Box>
            ))}
          </Flex>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

StatsTable.propTypes = {
  data: PropTypes.array,
};

export default StatsTable;
