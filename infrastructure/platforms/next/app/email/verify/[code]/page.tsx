"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { verifyEmail } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function VerifyEmailPage() {
  const { code } = useParams();
  const { isPending, isSuccess, isError } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code as string),
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <h1 className="text-xl font-semibold">
            Vérification de l&apos;email
          </h1>
        </CardHeader>
        <CardContent>
          {isPending ? (
            <Progress />
          ) : (
            <Alert variant={isSuccess ? "default" : "destructive"}>
              <AlertTitle>{isSuccess ? "Succès" : "Erreur"}</AlertTitle>
              <AlertDescription>
                {isSuccess
                  ? "Votre email a été vérifié avec succès"
                  : "Erreur lors de la vérification de votre email"}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          {isError ? (
            <span className="text-sm">
              Le lien de vérification a expiré ou est invalide. <br />
              Veuillez demander un{" "}
              <Link href="/register" className="text-black underline">
                nouveau lien.
              </Link>
              <br />
              <Link href="/" className="text-black underline">
                Retour à l&apos;accueil.
              </Link>
            </span>
          ) : (
            !isPending && (
              <Link href="/" className="text-black underline">
                Retour à l&apos;accueil.
              </Link>
            )
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
