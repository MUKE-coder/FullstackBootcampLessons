"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsersData } from "@/hooks/use-users";
import { User } from "@/types/user.schema";

const car = {
  name: "Something",
  color: "red",
  made: "Jeep",
};

export function UsersTable() {
  const { data: users = [], isLoading, error } = useUsersData();
  // console.log(users);

  if (isLoading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="w-full">
            <p className="p-4 ">Loading Users...</p>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
  if (error) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <p className="py-4 text-red-600">{error.message}</p>
        </TableBody>
      </Table>
    );
  }
  if (!users) {
    return <p>Something went wrong</p>;
  }
  if (users.length === 0) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <p className="py-4">No Users Data Found</p>
        </TableBody>
      </Table>
    );
  }

  return (
    <div className="">
      <h2 className="py-3 pb-4 text-2xl font-semibold">List of All Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            const date = user.createdAt.split("T")[0];

            return (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user.IMAGE}
                      alt={user.NAME}
                    />
                  </div>
                </TableCell>
                <TableCell>{user.NAME}</TableCell>
                <TableCell>{user.EMAIL}</TableCell>
                <TableCell>{user.PHONE}</TableCell>
                <TableCell>{date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
