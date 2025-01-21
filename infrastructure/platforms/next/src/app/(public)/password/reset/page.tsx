"use client";
import PasswordResetForm from "@/components/reset-password/PasswordResetForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function PasswordResetPage() {
  const searchParams = useSearchParams() as URLSearchParams;
  const code = searchParams.get("code");
  const expires = Number(searchParams.get("exp"));
  const linkIsValid = code && expires && expires > Date.now();

  return (
    <div className="flex justify-center items-center h-screen">
      {linkIsValid ? (
        <PasswordResetForm code={code} />
      ) : (
        <Card>
          <CardHeader>
            <h1 className="text-xl font-semibold">
              Réinitialisation du mot de passe
            </h1>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTitle>Erreur</AlertTitle>
              <AlertDescription>
                Le lien de réinitialisation a expiré ou est invalide. <br />
                Veuillez demander un{" "}
                <Link href="/password/forgot" className="text-black underline">
                  nouveau lien.
                </Link>
                <br />
                <Link href="/" className="text-black underline">
                  Retour à l&apos;accueil.
                </Link>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
