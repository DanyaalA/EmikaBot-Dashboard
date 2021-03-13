import { Route } from "./types";

export const sidebarItems = (guildId: string): Route[] => [
  {
    name: "General",
    path: `/dashboard/${guildId}/general`
  },
  {
    name: "Security",
    path: `/dashboard/${guildId}/security`
  },
  {
    name: "Miscellaneous",
    path: `/dashboard/${guildId}/miscellaneous`
  }
];