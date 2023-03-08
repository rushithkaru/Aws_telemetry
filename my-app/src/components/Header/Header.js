//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome, FiActivity, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import {FaGlobeAsia} from "react-icons/fa"



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";


const Header = () => {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [select,setSelect] = useState("");

    const navigate = useNavigate();
    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const changeRoute = (a) => {
    console.log(a);
    navigate('/' + a);
    setSelect(a);
  }

  
  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Menu " : "Menu"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick = {() => changeRoute("")} active={select === "" ? true : false} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem icon={<FaList />} onClick = {() => changeRoute("devices")} active={select === "devices" ? true : false}>Devices </MenuItem>
              <MenuItem icon={<FiActivity />}onClick = {() => changeRoute("signals")} active={select === "signals" ? true : false}>Signals</MenuItem>
              <MenuItem icon={<RiPencilLine />}onClick = {() => changeRoute("file")} active={select === "file" ? true : false}>Download</MenuItem>
              <MenuItem icon={<FaGlobeAsia />} onClick = {() => changeRoute("maps")} active={select === "maps" ? true : false}>Device Map</MenuItem>
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;