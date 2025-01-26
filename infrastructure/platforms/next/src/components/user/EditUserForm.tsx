"use client";
import { updateUser } from "@/lib/api";
import { User } from "@/types/AuthResponses";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Toast } from "../common/Toast";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { editUserSchema, EditUserSchema } from "./editUserSchema";
export default function EditUserForm({
  user,
  setOpen,
}: {
  user: User;
  setOpen: (value: boolean) => void;
}) {
  const router = useRouter();

  const defaultValues = {
    email: user.email?.value,
    firstName: user.firstName?.value,
    lastName: user.lastName?.value,
    role: user.role?.value as "client" | "admin" | "technician" | "manager",
  };

  const form = useForm<EditUserSchema>({
    resolver: zodResolver(editUserSchema),
    defaultValues,
  });

  const {
    mutateAsync: editUserAsync,
    isError,
    isPending,
  } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      Toast({
        buttonText: "Succès",
        description: "Informations utilisateur mises à jour avec succès.",
      });
      setTimeout(() => {
        setOpen(false);
        router.replace("/user");
      }, 3000);
    },
  });

  const onSubmit = async (data: EditUserSchema) => {
    try {
      const changedFields: any = {};

      if (data.email !== defaultValues.email) {
        changedFields.email = { value: data.email };
      }
      if (data.firstName !== defaultValues.firstName) {
        changedFields.firstName = { value: data.firstName };
      }
      if (data.lastName !== defaultValues.lastName) {
        changedFields.lastName = { value: data.lastName };
      }
      if (data.role !== defaultValues.role) {
        changedFields.role = { value: data.role };
      }

      if (Object.keys(changedFields).length === 0) {
        return Toast({
          buttonText: "Attention",
          description: "Aucun changement n'a été effectué.",
        });
      }
      await editUserAsync({
        identifier: user.identifier,
        ...changedFields,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {isError && (
            <Alert variant="destructive">
              <AlertDescription>
                Une erreur s'est produite lors de la mise à jour des
                informations utilisateur.
              </AlertDescription>
            </Alert>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adresse e-mail</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="xyz@exemple.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Nom" {...field} />
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
                <FormLabel>Rôle</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selectionner un role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="technician">Technician</SelectItem>
                      <SelectItem value="client">Client</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="w-full"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting || isPending
              ? "Mise à jour en cours..."
              : "Mettre à jour"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
