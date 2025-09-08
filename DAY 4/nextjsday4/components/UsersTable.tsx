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
import { User } from "@/types/user.schema";

export function UsersTable({ users }: { users: User[] }) {
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
