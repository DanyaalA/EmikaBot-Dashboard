import * as React from 'react';
import { SidebarContent, SidebarHeader, SidebarStyle, IconStyle } from '../utils/styles';

type SidebarProps = {
  guilds: any[];
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle /> <span>Dans Server</span>
      </SidebarHeader>
      <SidebarContent>

      </SidebarContent>
    </SidebarStyle>
  )
}