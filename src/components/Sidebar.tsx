import * as React from 'react';
import { SidebarContent, SidebarHeader, SidebarStyle, IconStyle, SidebarItem } from '../utils/styles';
import { useState } from 'react';
import { Route } from "../utils/types";
import { sidebarItems } from '../utils/constants';


export const Sidebar = (Pops: any) => {
  const [selected, setSelected] = useState<Route | undefined>(sidebarItems('552')[0]);
  const [selectServer, setSelectingServer] = useState<boolean>(true);

  return (
    <SidebarStyle>
      <SidebarHeader onClick={() => setSelectingServer(!selectServer)}>
        <IconStyle><img src="https://i.imgur.com/6t1kOaS.png" /></IconStyle> <span>Dans Server</span>
      </SidebarHeader>
      <SidebarContent>
        {/*{props.guilds.map((guild) => (
        <SidebarItem onClick={() => setSelected(!selected)} isSelected={selected}><img src="https://i.imgur.com/XiDt6w6.png"></img><span>{guild.name}</span></SidebarItem>
        ))} */}
        {sidebarItems('552').map((item) => (
          <SidebarItem onClick={() => setSelected(item)} isSelected={selected && item.name == selected.name}><img src="https://i.imgur.com/XiDt6w6.png" /><span>{item.name}</span></SidebarItem>
        ))}
      </SidebarContent>
    </SidebarStyle >
  )
}