interface SidebarData {
  title: string;
  url: string;
  items?: SidebarData[];
  authorizedRoles?: string[];
}

export const sidebarData: SidebarData[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Users",
    url: "/users",
    items: [
      {
        title: "All Users",
        url: "/users/all",
      },
      {
        title: "Add User",
        url: "/users/add",
      },
    ],
    authorizedRoles: ["admin"],
  },
];
