"use client";

import { useCallback } from "react";

// custom
import { feedbackToRead, dateStringToRead } from "@/app/lib/conversion";

// UI
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
} from "@nextui-org/react";

const columns = [
  {
    key: "created_at",
    label: "Waktu",
  },
  {
    key: "name",
    label: "Nama",
  },
  {
    key: "q1",
    label: "Q1",
  },
  {
    key: "q2",
    label: "Q2",
  },
  {
    key: "q3",
    label: "Q3",
  },
  {
    key: "q4",
    label: "Q4",
  },
  {
    key: "q5",
    label: "Q5",
  },
  {
    key: "q6",
    label: "Q6",
  },
  {
    key: "q7",
    label: "Q7",
  },
  {
    key: "q8",
    label: "Q8",
  },
  {
    key: "q9",
    label: "Q9",
  },
  {
    key: "q10",
    label: "Q10",
  },
  {
    key: "value",
    label: "Nilai Feedback",
  },
];

type Ftable = { id: string; created_at: string; value: number };

export default function FeedbackTable({
  rows,
  loadingState,
}: {
  rows:
    | {
        id: string;
        created_at: string;
        value: number;
      }[]
    | [];
  loadingState: boolean;
}) {
  const renderCell = useCallback((feedback: Ftable, columnKey: React.Key) => {
    const cellValue = feedback[columnKey as keyof Ftable];

    switch (columnKey) {
      case "created_at":
        return dateStringToRead(cellValue);
      case "value":
        return cellValue;
        return feedbackToRead(cellValue);
      //   case "actions":
      //     return (
      //       <div className="relative flex justify-end items-center gap-2">
      //         <Dropdown className="bg-background border-1 border-default-200">
      //           <DropdownTrigger>
      //             <Button isIconOnly radius="full" size="sm" variant="light">
      //               <VerticalDotsIcon className="text-default-400" />
      //             </Button>
      //           </DropdownTrigger>
      //           <DropdownMenu>
      //             <DropdownItem>View</DropdownItem>
      //             <DropdownItem>Edit</DropdownItem>
      //             <DropdownItem>Delete</DropdownItem>
      //           </DropdownMenu>
      //         </Dropdown>
      //       </div>
      //     );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Feedback table">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === "created_at" ? "start" : "center"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        items={rows}
        emptyContent={"Data tidak tersedia"}
        loadingContent={
          <Spinner label="Loading Data" color="primary" labelColor="primary" />
        }
        isLoading={loadingState}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
              //   <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
