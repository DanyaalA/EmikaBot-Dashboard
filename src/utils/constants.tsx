import { SidebarItem } from "./types";

export const sidebarItems = (guildId: string): SidebarItem[] => [
  {
    name: "General",
    path:
    {
      name: "Geneal",
      path: `/dashboard/${guildId}/general`
    }
  },
  {
    name: "Security",
    path:
    {
      name: "Security",
      path: `/dashboard/${guildId}/security`
    }
  },
  {
    name: "Miscellaneous",
    path:
    {
      name: "miscellaneous",
      path: `/dashboard/${guildId}/miscellaneous`
    }
  }
];