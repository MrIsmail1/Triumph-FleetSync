import { Sidebar } from "@/components/ui/sidebar";
import { Bike, Book, HousePlus, Users2, Wrench, AlertTriangle,ShieldCheck } from "lucide-react"; // Ajout de Wrench pour Maintenance
import { HiOutlineHome } from "react-icons/hi2";
import { User } from "./AuthResponses.ts";
import React from "react";

interface SidebarData {
  title: string;
  url?: string;
  isActive?: boolean;
  items?: SidebarData[];
  authorizedRoles?: string[];
  icon?: React.ReactNode;
}

export type AppSidebarProps = {
  user: User;
} & React.ComponentProps<typeof Sidebar>;

export type NavUserProps = {
  user: User;
  logoutFunction: () => void;
};

export const sidebarData: SidebarData[] = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    isActive: false,
    authorizedRoles: ["admin", "company", "dealership", "technician"],
    icon: <HiOutlineHome className="w-6 h-6" />,
  },
  {
    title: "Utilisateurs",
    url: "/user",
    authorizedRoles: ["admin"],
    isActive: false,
    icon: <Users2 className="w-6 h-6" />,
  },
  {
    title: "Flottes",
    url: "/fleet",
    authorizedRoles: ["admin", "company", "dealership"],
    isActive: false,
    icon: <HousePlus className="w-6 h-6" />,
  },
  {
    title: "Modèles de motos",
    url: "/modelmotorbike",
    authorizedRoles: ["admin"],
    isActive: false,
    icon: <Book className="w-6 h-6" />,
  },
  {
    title: "Motos",
    url: "/motorbike",
    authorizedRoles: ["admin", "company", "dealership"],
    isActive: false,
    icon: <Bike className="w-6 h-6" />,
  },
  {
    title: "Conducteurs",
    url: "/driver",
    authorizedRoles: ["admin", "company", "dealership"],
    isActive: false,
    icon: <Users2 className="w-6 h-6" />,
  },
  {
    title: "Maintenances",
    url: "/maintenance",
    authorizedRoles: ["admin", "company", "dealership", "technician"],
    isActive: false,
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Garanties",
    url: "/warranty",
    authorizedRoles: ["admin", "company", "dealership", "technician"],
    isActive: false,
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Pannes",
    url: "/breakdown",
    authorizedRoles: ["admin", "company", "dealership", "technician"],
    isActive: false,
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
  },
  
];
