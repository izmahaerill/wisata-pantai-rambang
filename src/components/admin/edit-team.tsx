"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { Loader, UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { titleCase } from "string-ts";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  role: z.enum([Role.KETUA, Role.PENGURUS]),
  image: z.any().optional(),
});

type Schema = z.infer<typeof schema>;
interface Props {
  id: string;
}

export default function EditTeam({ id }: Props) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      role: "KETUA",
      image: undefined,
    },
  });

  async function onSubmit(values: Schema) {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("role", values.role);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    await toast.promise(
      (async () => {
        const response = await fetch(`/api/team/${id}`, {
          method: "PUT",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          toast.error(result.message);
          return;
        }

        form.reset();
        setSelectedFile(null);
        setDialogOpen(false);

        return result.message;
      })(),
      {
        loading: "Updating team member...",
        success: (message) => message,
        error: (error) => error.message,
      }
    );
  }

  useEffect(() => {
    async function getTeamById() {
      const response = await fetch(`/api/team/${id}`);

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      form.reset({
        name: result.team.name,
        role: result.team.role,
        image: result.team.image,
      });
    }

    getTeamById();
  }, [id, form]);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setDialogOpen(true)}>
          <UserPen />
          <span className="sr-only">Edit Team</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Team Member</DialogTitle>
          <DialogDescription>
            Update the details below to edit the team member.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            encType="multipart/form-data"
            autoComplete="off"
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(Role).map((role) => (
                        <SelectItem key={role} value={role}>
                          {titleCase(role)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];

                        setSelectedFile(file ?? null);
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting && (
                <Loader className="animate-spin" />
              )}
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
