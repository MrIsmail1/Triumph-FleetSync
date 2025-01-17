"use client";

import { AlertDescription } from "@/components/ui/alert";
import { sendPasswordResetEmail } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert } from "../ui/alert";
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
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from "./forgotPasswordSchema";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const {
    mutate: forgotPassword,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: sendPasswordResetEmail,
    onSuccess: () => {
      setTimeout(() => {
        router.replace("/login");
      }, 3000);
    },
  });
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordSchema> = async (
    data: ForgotPasswordSchema
  ) => {
    try {
      forgotPassword(data.email);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">
          Réinitialiser votre mot de passe{" "}
        </CardTitle>
        <CardDescription>
          Entrez votre adresse e-mail pour recevoir un lien de réinitialisation
          de mot de passe.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert variant="default">
            <AlertDescription>
              Si l&apos;adresse e-mail est valide, un lien de réinitialisation
              est envoyé.
            </AlertDescription>
          </Alert>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {isError && (
                <Alert variant="default">
                  <AlertDescription>{error?.message}</AlertDescription>
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

              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting || isPending
                  ? "Envoie en cours..."
                  : "Envoyer"}
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
