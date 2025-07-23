import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddFacilities from "@/components/admin/facilities/add-facilities";
import { db } from "@/lib/db";
import { charAt, toUpperCase } from "string-ts";
import EditFacilities from "@/components/admin/facilities/edit-facilities";
import DeleteFacilities from "@/components/admin/facilities/delete-facilities";

export default async function Facilities() {
  const facilities = await db.facilities.findMany();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">
          All Facilities
        </h1>
        <AddFacilities />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {facilities.length ? (
            facilities.map((facility, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar className="dark:invert">
                    <AvatarImage
                      src={facility.image}
                      alt={facility.name}
                      loading="lazy"
                    />
                    <AvatarFallback>
                      {toUpperCase(charAt(facility.name, 0))}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{facility.name}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <EditFacilities id={facility.id} />
                  <DeleteFacilities id={facility.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No data available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
