import React from "react";
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
} from "@chakra-ui/react";
// import { usePagination } from "../hooks/usePagination";
import PropTypes from "prop-types";

const StatsTable = ({ data }) => {
  //   const { posts } = usePagination(data);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme={"facebook"}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th isNumeric>No.</Th>
            <Th>Country</Th>
            <Th>Continent</Th>
            <Th isNumeric>Population</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr key={item.country}>
              <Td isNumeric>{index + 1}</Td>
              <Td>{item.country}</Td>
              <Td>{item.continent}</Td>
              <Td>{item.country}</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

StatsTable.propTypes = {
  data: PropTypes.array,
};

export default StatsTable;
