import styled, { css } from 'styled-components';

export const SidebarStyle = styled.aside`
  width: 240px;
  height: 100%;
  background-color: #071013;
  font-family: Mina;
  position: fixed;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const SidebarHeader = styled(BaseHeader)`
  justify-content: left;
  padding-left: 15px;
  padding-bottom: 0px;
  border-bottom: 1px solid #AAAAAA;
  span {
    color: #F5EFEF;
    padding-left: 10px;
    padding-top: 5px;
    font-size: 24px;
  }
`;

export const SidebarContent = styled.div`
  box-sizing: border-box;
  margin-top: 100px;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: center;
  position: absolute;
  width: 240px;
  height: 65px;
  background-color: #AAAAAA;
`;

export const IconStyle = styled.div`
    height: 60px;
    width: 60px;
    background-color: grey;
    font-family: "Mina";
    border-radius: 50px;
    justify-content: center;
`;