import React from "react";
import { Menu, MenuItem } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";


const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <>
      

      <Menu
        menuAlign="end"
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
