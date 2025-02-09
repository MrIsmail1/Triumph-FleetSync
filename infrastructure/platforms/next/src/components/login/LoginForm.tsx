"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, AlertDescription } from "../ui/alert";
import { loginSchema, LoginSchema } from "./loginSchema";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    mutate: signIn,
    isPending,
    isError,
  } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      router.replace("/dashboard");
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data: LoginSchema) => {
    try {
      signIn(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Connexion</CardTitle>
        <CardDescription>
          Connectez-vous avec vos identifiants ci-dessous.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {isError && (
              <Alert variant="destructive">
                <AlertDescription>
                  Email ou mot de passe incorrect.
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    Mot de passe
                    <FormDescription className="text-right w-fit">
                      <Link href="/password/forgot" className="text-slate-600">
                        Mot de passe oublié ?
                      </Link>
                    </FormDescription>
                  </FormLabel>

                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Mot de passe..."
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
                : "Se connecter"}
            </Button>

            <FormDescription className="text-center">
              Vous n&apos;avez pas de compte ?{" "}
              <Link href="/register" className="text-black">
                Inscrivez-vous
              </Link>
            </FormDescription>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
