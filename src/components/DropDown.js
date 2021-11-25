import React, { useState } from 'react';
import { Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import profile from "./../Ellipse.png";

const DropDown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <Button id="caret" color="secondary"><img src={profile} alt="profile" /></Button>
      <DropdownToggle split color="secondary" size="sm"/>
        
      <DropdownMenu>
        <DropdownItem>My Profile</DropdownItem>
        <DropdownItem>Log Out</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default DropDown;