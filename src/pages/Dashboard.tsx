import { BasePageStyle, DashboardGroup, InputContainer, Input, DashboardContainerTitle, Button } from "../utils/styles";

export const DashboardPage = (props: any) => {
  return (
    <BasePageStyle>
      <DashboardGroup>
        <DashboardContainerTitle>General</DashboardContainerTitle>
        <InputContainer><span>Prefix:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Input placeholder="$" /></InputContainer>
        <InputContainer><span>Nickname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Input placeholder="Emika Bot" /></InputContainer>
        <InputContainer><span>Status Type:&nbsp;&nbsp;</span><Input placeholder="Listening to Spotify" /></InputContainer>
        <InputContainer><span>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><Input placeholder="Roll Dice - Roddy Ricch" /></InputContainer>
        <Button type="Save">Save</Button>
        <Button>Cancel</Button>
      </DashboardGroup>
    </BasePageStyle >

  );
}