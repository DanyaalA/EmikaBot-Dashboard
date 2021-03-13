export type Guild = {
  id: string;
  name: string;
  avatar: string;
}

export type SidebarItem = {
  name: string;
  path: Route;
}

export type Route = {
  name: string;
  path: string;
}