import {getCoreRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";
import {useMemo} from "react";

export default function useOrdersTable(orders) {

    const columns = useMemo(() => {
        if (!orders) return [];
        return [
            {
                accessorKey: "rowNumber",
                header: () => "№",
                size: 10,
                cell: ({row}) => (typeof row?.index === "number" ? row.index + 1 : "-"),
            },
            {
                accessorKey: "orderNumber",
                header: () => "Номер заказа",
                size: 40,
                accessorFn: (row) => row?.number ?? "-",
            },
            {
                accessorKey: "orderCreationDate",
                header: () => "Дата создания заказа",
                size: 40,
                accessorFn: (row) => row?.created ? new Date(row.created).toLocaleString("ru-RU") : "-",
            },
            {
                accessorKey: "buyer",
                header: () => "Заказчик",
                size: 200,
                accessorFn: (row) => row?.customer ?? "-",
            },
            {
                accessorKey: "buyerContact",
                header: () => "Контакт заказчика",
                size: 200,
                accessorFn: (row) =>
                    row?.contact === "unknown"
                        ? "-"
                        : row?.contact ?? "-",
            },
            {
                accessorKey: "sum",
                header: () => "Сумма заказа",
                size: 40,
                accessorFn: (row) => row?.sum ?? "-",
            },
            {
                accessorKey: "isPaid",
                header: () => "Оплачен",
                size: 40,
                accessorFn: (row) => {
                    return row?.isPaid ?? "-";
                },
            },
            {
                accessorKey: "isPassed",
                header: () => "Отдан",
                size: 40,
                accessorFn: (row) => {
                    return row?.isPassed ?? "-";
                },
            },
        ];
    }, [orders]);

    const table = useReactTable({
        columns,
        data: orders,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });
    return {table}
}