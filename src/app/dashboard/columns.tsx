"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Button } from "@/components/UI/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/UI/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id?: string;
  user_role?: string;
  cashtag?: string;
  name?: string;
  cid?: string;
  facebook?: string;
  email?: string;
  phone?: string;
  connect?: string;
  category?: string;
  juwa?: string;
  gamevault?: string;
  firekirin?: string;
  milkyway?: string;
  orionstar?: string;
  river_sweepstakes?: string;
  cash_machine?: string;
  mafia?: string;
  created_at?: Date;
};

export const columns: ColumnDef<User>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => {
  //     return (
  //       <Checkbox
  //         className="border-black"
  //         checked={table.getIsAllPageRowsSelected()}
  //         onCheckedChange={(value) => {
  //           table.toggleAllPageRowsSelected(!!value);
  //         }}
  //       />
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return (
  //       <Checkbox
  //         className="border-black"
  //         checked={row.getIsSelected()}
  //         onCheckedChange={(value) => {
  //           row.toggleSelected(!!value);
  //         }}
  //       />
  //     );
  //   },
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}}>Update</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "cid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          CID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "cashtag",
    header: () => <div className="w-[7rem]">Cashtag</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          className="w-[7rem]"
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "facebook",
    header: () => <div className="w-[10rem]">Facebook</div>,
    cell: ({ row }) => {
      return (
        <div className="w-[10rem] break-words">{row.original.facebook}</div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: () => <div className="w-[7rem]">Phone</div>,
  },
  {
    accessorKey: "juwa",
    header: () => <div className="w-[7rem]">Juwa</div>,
  },
  {
    accessorKey: "gamevault",
    header: () => <div className="w-[7rem]">Gamevault</div>,
  },
  {
    accessorKey: "firekirin",
    header: () => <div className="w-[7rem]">Fire Kirin</div>,
  },
  {
    accessorKey: "milkyway",
    header: () => <div className="w-[7rem]">Milkyway</div>,
  },
  {
    accessorKey: "orionstar",
    header: () => <div className="w-[7rem]">Orionstar</div>,
  },
  {
    accessorKey: "river_sweepstakes",
    header: () => <div className="w-[10rem]">River Sweepstakes</div>,
  },
  {
    accessorKey: "cash_machine",
    header: () => <div className="w-[7rem]">Cash Machine</div>,
  },
  {
    accessorKey: "mafia",
    header: () => <div className="w-[7rem]">Mafia</div>,
  },
  {
    accessorKey: "created_at",
    header: () => <div className="w-[7rem]">Created At</div>,
    cell: ({ row }) => {
      const createdAt = row.getValue("created_at");
      const formatted = new Date(createdAt as string).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
];
