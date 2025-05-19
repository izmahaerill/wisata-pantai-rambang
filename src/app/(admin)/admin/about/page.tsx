import React, { Fragment } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";
import { AddTeamModal } from "@/components/admin/AddTeamModal";

export default async function AdminAbout() {
  const teams = await db.team.findMany();
  const handleSubmit = async () => {
    // TODO: ambil value file upload -> simpen /images/gambar.png

    return db.team.create({
      data: {
        name: "name",
        role: "PENGURUS",
        image: "http://localhost/gambar.png",
        social: {
          create: {
            github: "github",
          },
        },
      },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2>All Teams</h2>
        <AddTeamModal />
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
                <TableCell className="font-medium">{index++}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={team.image} alt={team.name} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{team.name}</TableCell>
                <TableCell>{team.role}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Button size="icon">
                    {/* <Button size="icon" onClick={() => openEditModal(team)}> */}
                    <Pencil />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
