import styled, { css } from 'styled-components';

export const SidebarStyle = styled.aside`
  width: 240px;
  height: 100%;
  background-color: #071013;
  font-family: Mina;
  position: fixed;
  overflow-x: scroll;
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
    cursor: pointer;
  };
`;

export const SidebarContent = styled.div`
  box-sizing: border-box;
  margin-top: 0px;
  padding: 0px 0px;
`;

export const SidebarItem = styled.div<any>`
  font-size: 22px;
  padding: 0px 0px 0px 0px;
  height: 65px;
  width: 100%;
  cursor: pointer;
  span {
      padding-left: 25px;
      color: #F5EFEF;
      text-align: center;
      vertical-align: middle;
  };
  img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    padding-left: 5px;
    padding-top: 5px
  }
  ${(props) =>
    props.isSelected
      ? css`
        background-color: #AAAAAA;
      `
      : css`
        color: #F5EFEF;
    `}
`;

export const IconStyle = styled.div`
    height: 60px;
    width: 60px;
    background-color: grey;
    font-family: "Mina";
    border-radius: 50px;
    justify-content: center;
    cursor: pointer;
`;