"use client";
import * as React from "react";

import { SearchForm } from "@/components/common/SearchForm";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import queryClient from "@/config/queryClient";
import { logout } from "@/lib/api";
import { AppSidebarProps, sidebarData } from "@/types/SidebarData";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { NavUser } from "./NavUser";

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      router.replace("/");
    },
  });
  const userRole = user.role?.value;

  const filteredSidebarData = sidebarData
    .map((item) => {
      if (
        item.authorizedRoles &&
        userRole &&
        !item.authorizedRoles.includes(userRole)
      ) {
        return null;
      }

      if (item.items && userRole) {
        const filteredItems = item.items.filter((subItem) => {
          return (
            !subItem.authorizedRoles ||
            subItem.authorizedRoles.includes(userRole)
          );
        });

        return {
          ...item,
          items: filteredItems,
        };
      }

      return item;
    })
    .filter(Boolean) as typeof sidebarData;

  sidebarData.forEach((item) => {
    if (item.url === pathname) {
      item.isActive = true;
    }

    if (item.items) {
      item.items.forEach((subItem) => {
        if (subItem.url === pathname) {
          subItem.isActive = true;
        }
      });
    }
  });
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div>
          <Image src="/platform-logo.png" alt="Logo" width={5} height={5} />
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {filteredSidebarData.map((item) => {
          return item.items ? (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items &&
                    item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : (
            <SidebarMenuItem key={item.title} className="list-none">
              <SidebarMenuButton asChild isActive={item.isActive}>
                <a href={item.url}>
                  {item.icon}
                  {item.title}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} logoutFunction={signOut} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
