import Approve from "@/components/admin/ulasan/approve";
import Delete from "@/components/admin/ulasan/delete";
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
import { charAt, toUpperCase } from "string-ts";

export default async function Ulasan() {
  const reviews = await db.review.findMany({
    where: {
      approved: false,
    },
    include: {
      user: true,
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-semibold tracking-tight">Semua Ulasan</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Gambar</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Konten</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.length ? (
            reviews.map((review, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={review.user.image ?? ""}
                      alt={review.user.name}
                    />
                    <AvatarFallback>
                      {toUpperCase(charAt(review.user.name, 0))}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>{review.user.name}</TableCell>
                <TableCell className="max-w-48 truncate">
                  {review.content}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Approve id={review.id} />
                  <Delete id={review.id} />
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
