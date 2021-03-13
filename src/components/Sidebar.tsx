import * as React from 'react';
import { SidebarContent, SidebarHeader, SidebarStyle, IconStyle, SidebarItem } from '../utils/styles';
import { useState } from 'react';
import { SidebarItem } from "../utils/types";

type Props = {
  items: SidebarItem[];
}

export const Sidebar = ({ items }: Props) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <SidebarStyle>
      <SidebarHeader>
        <IconStyle /> <span>Dans Server</span>
      </SidebarHeader>
      <SidebarContent>
        {/*{props.guilds.map((guild) => (
        <SidebarItem onClick={() => setSelected(!selected)} isSelected={selected}><img src="https://i.imgur.com/XiDt6w6.png"></img><span>{guild.name}</span></SidebarItem>
        ))} */}
        {sidebarItems('552').map((item) => (
          <SidebarItem onClick={() => setSelected(!selected)} isSelected={selected}><img src="https://i.imgur.com/XiDt6w6.png" /><span>{item.name}</span></SidebarItem>
        ))}
      </SidebarContent>
    </SidebarStyle >
  )
}