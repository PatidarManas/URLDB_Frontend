import React, { useState } from "react";
import DashboardContent from "./DashboardContent";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Dashboard = ({user}) => {
  
  return (
    <div>
      <Navbar user={user} islogin={true} isPrimeUser={user.isPrimeUser}/>
      <DashboardContent user={user}/>
      <Footer/>
    </div>
  );
};

export default Dashboard;
