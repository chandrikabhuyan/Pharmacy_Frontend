import React from "react";
import { ReactComponent as Vendor } from "./../shopvendor.svg";
import { ReactComponent as Home } from "./../home.svg";
import { ReactComponent as Medicine } from "./../medicine.svg";
import { ReactComponent as Customer } from "./../customer1.svg";
import { ReactComponent as Sale } from "./../home.svg";
import { Link } from "react-router-dom";
const Menus = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Home />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/"
        >
          Home
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Medicine />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/medicine"
        >
          Medicine
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Customer />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/customer"
        >
          Customer
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Sale />
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/sale"
        >
          Sale
        </Link>
      </div>
      <div className="flex flex-row mt-4 group-hover:bg-gray-600">
        <Vendor className="h-8"/>
        <Link
          className="pl-2 text-2xl font-bold text-gray-800 appearance-none"
          tag="a"
          to="/vendor"
        >
          Vendor
        </Link>
      </div>
    </div>
  );
};

export default Menus;
