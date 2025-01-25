import { Sidebar } from "@/components/ui/sidebar";
import { User } from "./AuthResponses";

interface SidebarData {
  title: string;
  url?: string;
  isActive?: boolean;
  items?: SidebarData[];
  authorizedRoles?: string[];
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
  },
  {
    title: "Utilisateurs",
    items: [
      {
        title: "Liste des utilisateurs",
        url: "/users/list",
        isActive: false,
      },
      {
        title: "Ajouter un utilisateur",
        url: "/users/add",
        isActive: false,
      },
    ],
    authorizedRoles: ["admin"],
  },
];
