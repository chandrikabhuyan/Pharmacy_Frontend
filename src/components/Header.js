import React from "react";
import { ReactComponent as Search } from "./../search.svg";
import profile from "./../mypr.png";
import { Link } from "react-router-dom";

function Header({ name, title }) {
  return (
    <div className="flex flex-row items-center justify-between my-8">
      <Link to="/">
        <div className="text-3xl font-medium">Pharmacy Management System</div>
      </Link>

      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center p-3 mr-4 bg-gray-200 rounded-xl">
          <Search className="" />
          <div className="pl-2 pr-16">Search</div>
        </div>

        <Link to="/myprofile">
          <img src={profile} alt="profile" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
