

import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Stock from '../Pages/Stock';
import Compare from '../Pages/Compare';
import Updates from '../Pages/Updates';
import OurTeam from '../Pages/OurTeam';
import Faqs from '../Pages/FAQ';
import Contact from '../Pages/Contact';
import SellCar from '../Pages/SellCar';
import UserCarListing from '../Pages/UserCarListing';
import UserGeneralSetting from '../Pages/UserGeneralSetting';
import UserPostNewCar from '../Pages/UserPostNewCar';
import UserCarShortList from '../Pages/UserCarShortlist';
import UserPayments from '../Pages/UserPayments';
import UserPackages from '../Pages/UserPackages';
import UnderConstruction from '../Pages/UnderConstruction';
import AdminAddListing from '../Admin/Post-New-Car/AdminAddListing';
import AdminAddUser from '../Admin/AddUser/AddUserForm';
import VehicleDetails from '../Pages/VehicleDetails';
import MobileFaq from '../Components/UI/MobileFAQ/MobileFaq';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Shop from '../Pages/Shop';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sell-car" element={<SellCar />} />
        <Route path="/user-general-setting" element={<UserGeneralSetting />} />
        <Route path="/user-car-listing" element={<UserCarListing />} />
        <Route path="/user-post-new-vehicle" element={<UserPostNewCar />} />
        <Route path="/user-car-shortlist" element={<UserCarShortList />} />
        <Route path="/user-payments" element={<UserPayments />} />
        <Route path="/user-packages" element={<UserPackages />} />
        <Route path="/under-construction" element={<UnderConstruction />} />
        <Route path="/vehicle-details/:vehicleId" element={<VehicleDetails />} />
        <Route path="/admin-add-listing" element={<AdminAddListing />} />
        <Route path="/admin-add-user" element={<AdminAddUser/>} />
        <Route path="/mobile-faq" element={<MobileFaq/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  )
}

export default Routers