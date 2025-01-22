"use client";
import { AppSidebar } from "@/components/common/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import useAuth from "@/hooks/useAuth";
import { ReactNode, useEffect, useState } from "react";

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const [progressValue, setProgressValue] = useState(10);

  /*   useEffect(() => {
    if (!isLoading) {
      setProgressValue(100);
      return;
    }

    const id = setInterval(() => {
      setProgressValue((prev) => {
        if (prev < 90) {
          return prev + 10;
        }
        return prev;
      });
    }, 500);
    return () => clearInterval(id);
  }, [isLoading]); */

  return isLoading ? (
    <div className="flex flex-1 justify-center items-center h-screen">
      <span className="flex flex-col items-center">
        Chargement de la page...
        <Progress value={progressValue} className="" />{" "}
      </span>
    </div>
  ) : (
    user && (
      <SidebarProvider>
        <AppSidebar user={user} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="flex flex-1 flex-col mx-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    )
  );
}
