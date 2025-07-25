import AddTeam from "@/components/admin/add-team";
import DeleteTeam from "@/components/admin/delete-team";
import EditTeam from "@/components/admin/edit-team";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";
import { charAt, titleCase, toUpperCase } from "string-ts";

export default async function Team() {
  const teams = await db.team.findMany();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">All Team</h1>
        <AddTeam />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.length ? (
            teams.map((team, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={team.image}
                      alt={team.name}
                      loading="lazy"
                    />
                    <AvatarFallback>
                      {toUpperCase(charAt(team.name, 0))}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{team.name}</TableCell>
                <TableCell>{titleCase(team.role)}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <EditTeam id={team.id} />
                  <DeleteTeam id={team.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
