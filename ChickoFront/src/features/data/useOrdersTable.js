import {getCoreRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";
import {useFetchOrders} from "../api/orders/useFetchOrders";


export default function useOrdersTable() {
  const orders = []
  const {data: order, isLoading} = useFetchOrders()
  console.log(order)
  const columns =
    isLoading || orders?.length < 1
      ? []
      : [
        {
          accessorKey: "number",
          header: () => "№",
          size: 10,
          accessorFn: (cell) => cell?.number ? +cell.number : "",
        },
        {
          accessorKey: "orderNumber",
          header: () => "Номер заказа",
          size: 10,
          accessorFn: (cell) => cell?.order.number ? cell?.order.number : "-",
        },
        {
          accessorKey: "orderCreationDate",
          header: () => "Дата создания заказа",
          size: 10,
          accessorFn: (cell) => cell?.order.created ? cell?.order.created : "-",
        },
        {
          accessorKey: "buyer",
          header: () => "Заказчик",
          size: 10,
          accessorFn: (cell) => cell?.order.number ? cell?.order.number : "-",
        },
        {
          accessorKey: "buyerContact",
          header: () => "Контакт заказчика",
          size: 10,
          accessorFn: (cell) => {
            if (cell?.order.buyer === "unknown") return "Не указано"
            return cell?.order.contact ?? "Не указано"
          },
        },
        {
          accessorKey: "sum",
          header: () => "Сумма заказа",
          size: 10,
          accessorFn: (cell) => {
            return cell?.order.sum ?? "Не указано"
          },
        },
      ]

  const table = useReactTable({
    columns,
    data: orders,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });
  // console.log("render", new Date());
  // console.log("products", products)
  return {table}
}