import React from 'react';
import {flexRender} from "@tanstack/react-table";
import useOrdersTable from "../../../features/data/useOrdersTable";

const OrdersTable = () => {
  const data = useOrdersTable()
  return (
    <div>
      <table>
        <thead>
        {data.table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {data.table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;