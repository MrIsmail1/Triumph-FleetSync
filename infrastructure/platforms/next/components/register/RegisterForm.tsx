"use client";
import { register } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { registerSchema, RegisterSchema } from "./registerSchema";

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const {
    mutate: signUp,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: register,
    onSuccess: () => {
      router.replace("/login");
    },
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (
    data: RegisterSchema
  ) => {
    try {
      signUp(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Création de compte</CardTitle>
        <CardDescription>
          Créez un compte pour accéder à toutes les fonctionnalités de
          l&apos;application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {isError && (
              <Alert variant="destructive">
                <AlertDescription>{error?.message}</AlertDescription>
              </Alert>
            )}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input type="lastName" placeholder="Nom..." {...field} />
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
                    <Input
                      type="firstName"
                      placeholder="Prénom..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse E-mail</FormLabel>
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
                ? "Connexion en cours..."
                : "Créer un compte"}
            </Button>

            <FormDescription className="text-center">
              Vous avez déjà un compte ?{" "}
              <Link href="/login" className="text-black">
                Connectez-vous
              </Link>
            </FormDescription>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
