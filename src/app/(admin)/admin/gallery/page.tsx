// app/admin/gallery/page.tsx
import AddGalleryImage from "@/components/admin/gallery/add-gallery";
import DeleteGalleryImage from "@/components/admin/gallery/delete-gallery";
import EditGalleryImage from "@/components/admin/gallery/edit-gallery";
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

export default async function AdminGallery() {
  const gallery = await db.gallery.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>
        <AddGalleryImage />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Image</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gallery.length ? (
            gallery.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={`/images/gallery/${item.image}`}
                      alt="Gallery Image"
                      loading="lazy"
                    />
                    <AvatarFallback>
                      {toUpperCase(charAt(item.image, 0))}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="flex justify-end gap-2">
                  <EditGalleryImage id={item.id} />
                  <DeleteGalleryImage id={item.id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="h-24 text-center">
                No images available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
