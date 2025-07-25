import Approve from "@/components/admin/ulasan/approve";
import Reject from "@/components/admin/ulasan/reject";
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
    orderBy: { createdAt: "desc" },
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
            <TableHead className="w-[60px]">No</TableHead>
            <TableHead>Gambar</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Konten</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reviews.length ? (
            reviews.map((review, index) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={
                        review.user.image ??
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          review.user.name
                        )}`
                      }
                      alt={review.user.name}
                      loading="lazy"
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
                <TableCell>
                  {review.approved === null ? (
                    <span className="font-medium text-red-600">Ditolak</span>
                  ) : review.approved ? (
                    <span className="font-medium text-green-600">
                      Disetejui
                    </span>
                  ) : (
                    <span className="font-medium text-yellow-600">
                      Menunggu
                    </span>
                  )}
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <Approve id={review.id} />
                  <Reject id={review.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="h-24 text-center">
                Tidak ada ulasan.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
