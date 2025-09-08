import { getUsers } from "@/controllers/users";
import React from "react";
import { UsersTable } from "./UsersTable";

export default async function UsersListing() {
  const users = (await getUsers()) || [];
  console.log(users);
  return (
    <div className="max-w-3xl mx-auto shadow border border-gray-200 p-4">
      {users.length > 0 ? <UsersTable users={users} /> : <p>No Data Found</p>}
    </div>
  );
}
