

import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Routers from '../Router/Routers';
// import { Toaster } from 'react-hot-toast';

const Layout = () => {
  return (
    <>
        < Header/>
        <div>
            <Routers />
        </div>
        <Footer />
        {/* <Toaster /> */}
    </>
  )
}

export default Layout