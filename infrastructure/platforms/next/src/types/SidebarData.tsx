import { Sidebar } from "@/components/ui/sidebar";
import { Users2 } from "lucide-react";
import { HiOutlineHome } from "react-icons/hi2";
import { User } from "./AuthResponses";

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
    authorizedRoles: ["admin", "client", "technicien", "manager"],
    icon: <HiOutlineHome className="w-6 h-6" />,
  },
  {
    title: "Utilisateurs",
    url: "/user",
    authorizedRoles: ["admin"],
    isActive: false,
    icon: <Users2 className="w-6 h-6" />,
  },
];
