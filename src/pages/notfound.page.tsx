import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-[#343C6A]">404</h1>
        <p className="text-2xl md:text-3xl font-light mt-4 text-[#343C6A]">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-lg text-gray-400">
          But don't worry, you can always find your way back home.
        </p>
        <div className="mt-6">
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleGoBack} 
            className="!capitalize"
            style={{ backgroundColor: "#343C6A" }}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
