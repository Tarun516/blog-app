import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../../store/authSlice";

function LogoutBtn() {
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={handleLogout}
        className="inline-block px-6 duration-200 hover:bg-blue-200 rounded-full"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
