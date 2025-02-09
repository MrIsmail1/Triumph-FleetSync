"use client";

import { resetPassword } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  passwordResetSchema,
  PasswordResetSchema,
} from "./passwordResetSchema";

export default function PasswordResetForm({ code }: { code: string }) {
  const router = useRouter();
  const {
    mutate: passwordReset,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => setTimeout(() => router.replace("/login"), 3000),
  });
  const form = useForm<PasswordResetSchema>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      verificationCode: code,
    },
  });

  const onSubmit = async (data: PasswordResetSchema) => {
    try {
      console.log(data);
      await passwordReset(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
          Réinitialisation du mot de passe
        </CardTitle>
        <CardDescription>Saisir le nouveau mot de passe.</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert variant="default">
            <AlertDescription>
              Votre mot de passe a été réinitialisé avec succès.
            </AlertDescription>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {isError && (
                <Alert variant="destructive">
                  <AlertDescription>{error?.message}</AlertDescription>
                </Alert>
              )}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Mot de passe..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirmation de mot de passe</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirmer le mot de passe..."
                        {...field}
                        onKeyDown={(e) =>
                          e.key === "Enter" && form.handleSubmit(onSubmit)()
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting || isPending
                  ? "Confirmation en cours..."
                  : "Confirmer"}
              </Button>

              <FormDescription className="text-center">
                Revenir à la{" "}
                <Link href="/login" className="text-black">
                  Connexion{" "}
                </Link>
                ou{" "}
                <Link href="/register" className="text-black">
                  Créer un compte
                </Link>
              </FormDescription>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
