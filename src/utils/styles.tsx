import styled, { css } from 'styled-components';

export const SidebarStyle = styled.aside`
  width: 192px;
  height: 100%;
  background-color: #071013;
  font-family: Mina;
  position: fixed;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BasePageStyle = styled.div`
  height: 100%;
  background-color: #AAAAAA;
  color: #FFF;
  position: absolute;
  margin-left: 192px;
  width: calc(100% - 192px);
`;

export const DashboardGroup = styled.div`
    padding: 20px;
    border: 2px solid black;
    width: 400px;
    height: 224px;
    margin-left: 50px;
    margin-top: 25px;
`;



export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: 80px;
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
    font-size: 19px;
    cursor: pointer;
  };
`;

export const SidebarContent = styled.div`
  box-sizing: border-box;
  margin-top: 0px;
  padding: 0px 0px;
`;

export const SidebarItem = styled.div<any>`
  font-size: 17px;
  padding: 0px 0px 0px 0px;
  height: 52px;
  width: 100%;
  cursor: pointer;
  span {
      padding-left: 25px;
      color: #F5EFEF;
      text-align: center;
      vertical-align: middle;
  };
  img {
    width: 40px;
    height: 40px;
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
    height: 54px;
    width: 54px;
    background-color: #292929;
    font-family: "Mina";
    border-radius: 50px;
    justify-content: center;
    cursor: pointer;
    img {
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 90px;
      width: 100%;
      height: 100%;
      background-color: #292929;
    }
`;





export const InputContainer = styled.div`
  height: 40px;
  padding-left: 5px;
  span {
    color: #11262D;
    font-size: 16px;
  }
`;

export const DashboardContainerTitle = styled.h2`
  font-family: Mina;
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-family: "Mina";
  font-size: 15px;
  outline: none;
  width: 56%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  mix-blend-mode: normal;
  padding: 4px 8px;
  background-color: #C4C4C4;
  color: black;
`;

export const Button = styled.button<any>`
  font-family: Mina;
  font-size: 16px;
  line-height: 25px;
  color: white;
  width: 95px;
  height: 36px;
  border: none;
  border-radius: 90px;
  background-color: ${props => (props.type == "Save" ? '#2BB66C' : '#b63b2b')};
  float: ${props => (props.type == "Save" ? 'right' : 'left')};
  :hover {
    cursor: pointer;
    background-color: ${props => (props.type == "Save" ? '#449d6e' : '#9d4f44')};
  }
  :active {
    background-color: #50b62b;
  }
`;