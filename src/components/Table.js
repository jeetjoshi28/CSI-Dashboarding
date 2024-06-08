import React from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
  TablePagination,
} from "@mui/material";

const TableComponent = () => {
  const data = React.useMemo(
    () => [
      { name: "John", age: 30, job: "Developer" },
      { name: "Jane", age: 25, job: "Designer" },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      { Header: "Job", accessor: "job" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useFilters, useSortBy, usePagination);

  return (
    <div>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <TableSortLabel
                    active={column.isSorted}
                    direction={column.isSortedDesc ? "desc" : "asc"}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={rows.length}
        page={pageIndex}
        onPageChange={(e, newPage) => gotoPage(newPage)}
        rowsPerPage={pageSize}
        onRowsPerPageChange={(e) => setPageSize(Number(e.target.value))}
        rowsPerPageOptions={[10, 25, 50]}
      />
    </div>
  );
};

export default TableComponent;
