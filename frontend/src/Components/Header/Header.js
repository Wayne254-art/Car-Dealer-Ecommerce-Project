// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import { Link, useLocation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faChevronDown, faPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// // import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { MdEmail } from "react-icons/md";
// import { AiFillQuestionCircle } from "react-icons/ai";
// import './header.css';
// import { useDispatch, useSelector } from "react-redux";
// import toast, { Toaster } from 'react-hot-toast';
// import { loginUser, registerUser,registerSeller } from '../../store/reducers/userReducers.js'

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [submenuOpen, setSubmenuOpen] = useState(false);
//     const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);
//     const [isSignInOverlayVisible, setIsSignInOverlayVisible] = useState(false);
//     const [isUserSignInOverlayVisible, setIsUserSignInOverlayVisible] = useState(false);
//     const [isSignUpOverlayVisible, setIsSignUpOverlayVisible] = useState(false);
//     const [isCustomerSignUpOverlayVisible, setIsCustomerSignUpOverlayVisible] = useState(false);
//     const [isSellerSignUpOverlayVisible, setIsSellerSignUpOverlayVisible] = useState(false);
//     const [isForgotPasswordOverlayVisible, setIsForgotPasswordOverlayVisible] = useState(false);
//     const [animationClass, setAnimationClass] = useState("");
//     const location = useLocation();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch();
//     const { loading, user } = useSelector((state) => state?.user);

//     const handleLoginSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginUser({ email, password }))
//         .unwrap()
//         .then((response) => {
//           toast.success(response.message);
//         })
//         .catch((error) => {
//           toast.error(error.message);
//           console.log(error);
//         });
//     };

//     const formData = useState({
//         firstname: '',
//         lastName: '',
//         email: '',
//         password: '',
//     })
//     const handleSignUpSubmit = (e) => {
//         e.preventDefault();
//         dispatch(registerUser({ email, password }))
//         .unwrap()
//         .then((response) => {
//           toast.success(response.message);
//         })
//         .catch((error) => {
//           toast.error(error.message);
//           console.log(error);
//         });
//     };

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     const toggleMoremenu = () => {
//         setSubmenuOpen(!submenuOpen);
//     };

//     useEffect(() => {
//         setMenuOpen(false);
//         setSubmenuOpen(false);
//     }, [location]);

//     const handleCloseOverlay = () => {
//         setAnimationClass("slide-down");
//         setTimeout(() => {
//             setIsLoginOverlayVisible(false);
//             setIsSignInOverlayVisible(false);
//             setIsSignUpOverlayVisible(false);
//             setIsUserSignInOverlayVisible(false);
//             setIsCustomerSignUpOverlayVisible(false);
//             setIsSellerSignUpOverlayVisible(false);
//             setIsForgotPasswordOverlayVisible(false);
//         }, 300);
//     };

//     const handleLoginClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsLoginOverlayVisible(true), 300);
//     };

//     const handleSignInClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsSignInOverlayVisible(true), 300);
//     };

//     const handleSignUpClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsSignUpOverlayVisible(true), 300);
//     };

//     const handleUserSignUpClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsUserSignInOverlayVisible(true), 300);
//     };

//     const handleCustomerSignUpClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsCustomerSignUpOverlayVisible(true), 300);
//     };

//     const handleSellerSignUpClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsSellerSignUpOverlayVisible(true), 300);
//     };

//     const handleForgotPasswordClick = () => {
//         setAnimationClass("slide-up");
//         setTimeout(() => setIsForgotPasswordOverlayVisible(true), 300);
//     };

//     return (
//         <>
//             <header id='header-nav' className="z-[1000] bg-[#000422] md:">
//                 <Container>
//                     <Row>
//                         <Col lg='2' md='2' sm='12' xs='12'>
//                             <div className='em-logo'>
//                                 <div className='em-media'>
//                                     <figure>
//                                         <Link to="#"><img src='' alt="Wayne_Auto_Sales" /></Link>
//                                     </figure>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col lg='10' md='10' sm='12' xs='12'>
//                             <div className='em-main-nav'>
//                                 <nav id='main-navigation'>
//                                     <ul>
//                                         <li><Link to='/'>home</Link></li>
//                                         <li><Link to='/about'>about</Link></li>
//                                         <li><Link to='/stock'>stock</Link></li>
//                                         <li><Link to='/under-construction'>compare</Link></li>
//                                         <li><Link to='/updates'>updates</Link></li>
//                                         <li><Link to='/shop'>shop</Link></li>
//                                         <li>
//                                             <Link to='#'>more</Link>
//                                             <ul className={submenuOpen ? 'active' : ''}>
//                                                 <li><Link to='/team'>our team</Link></li>
//                                                 <li><Link to='/faqs'>faq's & help</Link></li>
//                                             </ul>
//                                         </li>
//                                         <li><Link to='/contact'>contact-us</Link></li>
//                                         <li className='em-user-option'>
//                                             {user?.id ? (
//                                                 <div className='em-login'>
//                                                     <div className='em-login-dropdown'>
//                                                         <Link to=''>
//                                                             <FontAwesomeIcon icon={faUser} /> {user.firstname ? user.lastname : "User"} <FontAwesomeIcon icon={faChevronDown} />
//                                                         </Link>
//                                                         <div className='em-user-dropdown'>
//                                                             <strong style={{ color: '#ff2121', cursor: 'pointer' }} className='post-ad'>Post New Ad</strong>
//                                                             <ul>
//                                                                 <li><Link to='/user-general-setting'>General Settings<span>3</span></Link></li>
//                                                                 <li><Link to='/user-car-listing'>My Posted Cars<span>23</span></Link></li>
//                                                                 <li><Link to='/user-post-new-vehicle'>Post New Car</Link></li>
//                                                                 <li><Link to='/user-car-shortlist'>Shortlisted</Link></li>
//                                                                 <li><Link to='/user-payments'>Payment</Link></li>
//                                                                 <li><Link to='/user-packages'>Packages</Link></li>
//                                                             </ul>
//                                                         </div>
//                                                     </div>
//                                                     <Link to='/sell-car' className='btn-sell-car'>
//                                                         <FontAwesomeIcon icon={faPlus} /> Sell Car
//                                                     </Link>
//                                                 </div>
//                                             ) : (
//                                                 <div
//                                                     className="text-gray-300 hover:text-white cursor-pointer hover:underline"
//                                                     onClick={handleLoginClick}
//                                                 >
//                                                     <span className="capitalize flex items-center text-1xl space-x-1 relative">
//                                                         <FaUser />
//                                                         <strong className="text-xs mt-1 flex items-center">
//                                                             Login
//                                                         </strong>
//                                                     </span>
//                                                 </div>
//                                             )}
//                                         </li>
//                                     </ul>
//                                 </nav>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </header>

//             {/* Mobile Navigation */}
//             <header id='mobile-header'>
//                 <div className='mobile-em-logo'>
//                     <div className='em-media'>
//                         <figure>
//                             <Link to=''><img src='' alt="Wayne_Auto_Sales" /></Link>
//                         </figure>
//                     </div>
//                 </div>
//                 <div className='mobile-menu'>
//                     <div className='mobile-display-menu-items' onClick={toggleMenu}>
//                         <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} />
//                     </div>
//                     <nav id='mobile-main-navbar' className={menuOpen ? 'active' : ''}>
//                         <div className='mobile-exit-menu-items' onClick={toggleMenu}>
//                             <FontAwesomeIcon icon={faTimes} style={{ color: '#ff2121', fontSize: '40px' }} />
//                         </div>
//                         <ul>
//                             <li><Link to='/'>home</Link></li>
//                             <li><Link to='/about'>about</Link></li>
//                             <li><Link to='/stock'>stock</Link></li>
//                             <li><Link to='/under-construction'>compare</Link></li>
//                             <li><Link to='/updates'>updates</Link></li>
//                             <li><Link to='/shop'>shop</Link></li>
//                             <li>
//                                 <span onClick={toggleMoremenu}>more</span>
//                                 <ul className={submenuOpen ? 'active' : ''}>
//                                     <li><Link to='/team' style={{ marginTop: '-80px' }}>our team</Link></li>
//                                     <li><Link to='/mobile-faq' style={{ marginTop: '-40px' }}>faq's & help</Link></li>
//                                 </ul>
//                             </li>
//                             <li><Link to='/contact'>contact-us</Link></li>
//                         </ul>
//                     </nav>
//                     <div className='mobile-em-user-option'>
//                         {user?.id ? (
//                             <div className='mobile-em-login'>
//                                 <div className='mobile-em-login-dropdown'>
//                                     <span>
//                                         <FontAwesomeIcon icon={faUser} /> {user.firstname ? user.lastname : "User"} <FontAwesomeIcon icon={faChevronDown} />
//                                     </span>
//                                     <div className='mobile-em-user-dropdown'>
//                                         <strong style={{ color: '#ff2121', cursor: 'pointer' }} className='post-ad'>Post New Ad</strong>
//                                         <ul>
//                                             <li><Link to='/user-general-setting'>General Settings<span>3</span></Link></li>
//                                             <li><Link to='/user-car-listing'>My Posted Cars<span>23</span></Link></li>
//                                             <li><Link to='/user-post-new-vehicle'>Post New Car</Link></li>
//                                             <li><Link to='/user-car-shortlist'>Shortlisted</Link></li>
//                                             <li><Link to='/user-payments'>Payment</Link></li>
//                                             <li><Link to='/user-packages'>Packages</Link></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <Link to='/sell-car' className='mobile-btn-sell-car'>
//                                     <FontAwesomeIcon icon={faPlus} /> Sell Car
//                                 </Link>
//                             </div>

//                         ) : (
//                             <div
//                                 className="text-gray-300 hover:text-white cursor-pointer hover:underline"
//                                 onClick={handleLoginClick}
//                             >
//                                 <span className="capitalize flex items-center text-1xl space-x-1 relative">
//                                     <FaUser />
//                                     <strong className="text-xs mt-1 flex items-center">
//                                         Login
//                                     </strong>
//                                 </span>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </header>

//             {/* ---------------------------------Login Form---------------------------------- */}

//             {isLoginOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-xl font-bold text-center mb-8">USER SIGN IN</h2>

//                         <form onClick={handleLoginSubmit} className='overflow-y-auto'>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         placeholder="Enter Your Email"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 ml-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 ml-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4 flex justify-end items-center cursor-pointer">
//                                 <span
//                                     className="text-gray-500 text-sm hover:underline flex items-center"
//                                     onClick={handleForgotPasswordClick}
//                                 >
//                                     <span className="mr-2">
//                                         <AiFillQuestionCircle />
//                                     </span>{" "}
//                                     Forgot Password?
//                                 </span>
//                             </div>

//                             <button
//                                 type="submit"
//                                 // value={loading ? 'LOGGING IN...' : 'LOGIN'}
//                                 disabled={loading}
//                                 className="w-full bg-red-600 text-white py-2 rounded border border-red-600 hover:bg-red-500"
//                             >
//                                 {loading ? 'SIGNING IN...' : 'SIGNIN'}
//                             </button>

//                             {/* <div className="my-4 flex items-center justify-center">
//                                 <hr className="w-1/5 border-gray-300" />
//                                 <span className="mx-2 text-gray-500 text-sm">OR</span>
//                                 <hr className="w-1/5 border-gray-300" />
//                             </div>

//                             <p className="text-center text-sm text-gray-500 mb-4">
//                                 Signin with your Social Networks
//                             </p>

//                             <div className="flex justify-between">
//                                 <div className="bg-blue-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 cursor-pointer">
//                                     <FaFacebookF className="mr-2" /> Facebook
//                                 </div>
//                                 <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-400 cursor-pointer">
//                                     <FaTwitter className="mr-2" /> Twitter
//                                 </div>
//                                 <div className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-500 cursor-pointer">
//                                     <FaGoogle className="mr-2" /> Google
//                                 </div>
//                             </div> */}
//                             <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleSignUpClick}
//                             >
//                                 <span className="mr-2 mt-1">
//                                     <AiFillQuestionCircle />
//                                 </span>
//                                 Don't Have Account
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* -------------------------------------------Forgot Password Form--------------------------------------- */}
//             {isForgotPasswordOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//                         <div className="flex justify-end">
//                             <div
//                                 className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                                 onClick={handleCloseOverlay}
//                             >
//                                 <RxCross2 />
//                             </div>
//                         </div>
//                         <h2 className="text-center text-xl font-semibold mb-4">
//                             Password Recovery
//                         </h2>
//                         <form >
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm font-bold mb-2"
//                                     htmlFor="email"
//                                 >
//                                     Email
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         id="email"
//                                         type="email"
//                                         className="shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                         placeholder="Enter your email"
//                                         // value={email}
//                                         // onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                     <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//                                         <MdEmail />
//                                     </span>
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                             >
//                                 Send
//                             </button>
//                         </form>
//                         <div className="text-center mt-4">
//                             <span className="text-gray-600">Not a Member yet? </span>
//                             <span
//                                 className="text-red-500 font-bold hover:underline cursor-pointer"
//                                 onClick={handleSignUpClick}
//                             >
//                                 Signup Now
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* -------------------------------SignUp Form------------------------------------ */}

//             {isSignUpOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-2xl font-bold text-center mb-8">
//                             CREATE A CUSTOMER ACCOUNT
//                         </h2>

//                         <form onClick={handleSignUpSubmit}>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="firstname"
//                                 >
//                                     FIRSTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="firstname"
//                                         value={formData.firstname}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Enter Your FirstName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="lastname"
//                                 >
//                                     LASTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="lastname"
//                                         value={formData.lastName}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Enter Your LastName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         value={formData.email}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Enter Valid EmailAddress"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         value={formData.password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//                             >
//                                 Create Account
//                             </button>
//                             <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleSellerSignUpClick}
//                             >
//                                 signup as a seller
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* --------------------------------------Seller SignUp ---------------------------------------- */}
//             {isSellerSignUpOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-2xl font-bold text-center mb-8">
//                             CREATE A SELLER ACCOUNT
//                         </h2>

//                         <form>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="firstname"
//                                 >
//                                     FIRSTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="firstname"
//                                         // value={formData.firstname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your FirstName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="lastname"
//                                 >
//                                     LASTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="lastname"
//                                         // value={formData.lastname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your LastName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         // value={formData.email}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Valid EmailAddress"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         // value={formData.password}
//                                         // onChange={handleChange}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//                             >
//                                 Create Account
//                             </button>
//                             <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleCustomerSignUpClick}
//                             >
//                                 signup as a customer
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* ---------------------------------customerSignUp Form---------------------------------- */}
//             {isCustomerSignUpOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-2xl font-bold text-center mb-8">
//                             CREATE A CUSTOMER ACCOUNT
//                         </h2>

//                         <form>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="firstname"
//                                 >
//                                     FIRSTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="firstname"
//                                         // value={formData.firstname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your FirstName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="lastname"
//                                 >
//                                     LASTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="lastname"
//                                         // value={formData.lastname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your LastName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         // value={formData.email}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Valid EmailAddress"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         // value={formData.password}
//                                         // onChange={handleChange}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//                             >
//                                 Create Account
//                             </button>
//                             <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleSignInClick}
//                             >
//                                 already have an account
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* ---------------------------------Login Form---------------------------------- */}
//             {isSignInOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-xl font-bold text-center mb-8">USER SIGN IN</h2>
//                         <form className='overflow-y-auto'>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="email"
//                                         // value={email}
//                                         // onChange={(e) => setEmail(e.target.value)}
//                                         placeholder="Enter Your Email"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 ml-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         // value={password}
//                                         // onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 ml-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4 flex justify-end items-center cursor-pointer">
//                                 <span
//                                     className="text-gray-500 text-sm hover:underline flex items-center"
//                                     onClick={handleForgotPasswordClick}
//                                 >
//                                     <span className="mr-2">
//                                         <AiFillQuestionCircle />
//                                     </span>{" "}
//                                     Forgot Password?
//                                 </span>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded border border-red-600 hover:bg-red-500"
//                             >
//                                 SIGN IN
//                             </button>

//                             {/* <div className="my-4 flex items-center justify-center">
//                                 <hr className="w-1/5 border-gray-300" />
//                                 <span className="mx-2 text-gray-500 text-sm">OR</span>
//                                 <hr className="w-1/5 border-gray-300" />
//                             </div>

//                             <p className="text-center text-sm text-gray-500 mb-4">
//                                 Signin with your Social Networks
//                             </p>

//                             <div className="flex justify-between">
//                                 <div className="bg-blue-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700 cursor-pointer">
//                                     <FaFacebookF className="mr-2" /> Facebook
//                                 </div>
//                                 <div className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-400 cursor-pointer">
//                                     <FaTwitter className="mr-2" /> Twitter
//                                 </div>
//                                 <div className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-500 cursor-pointer">
//                                     <FaGoogle className="mr-2" /> Google
//                                 </div>
//                             </div> */}
//                             <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleUserSignUpClick}
//                             >
//                                 <span className="mr-2 mt-1">
//                                     <AiFillQuestionCircle />
//                                 </span>
//                                 Don't Have Account
//                             </span>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* ---------------------------------customerSignUp Form---------------------------------- */}
//             {isUserSignInOverlayVisible && (
//                 <div
//                     className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
//                 >
//                     <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
//                         <div
//                             className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
//                             onClick={handleCloseOverlay}
//                         >
//                             <RxCross2 />
//                         </div>
//                         <h2 className="text-2xl font-bold text-center mb-8">
//                             CREATE A CUSTOMER ACCOUNT
//                         </h2>

//                         <form>
//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="firstname"
//                                 >
//                                     FIRSTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="firstname"
//                                         // value={formData.firstname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your FirstName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="lastname"
//                                 >
//                                     LASTNAME
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="text"
//                                         id="lastname"
//                                         // value={formData.lastname}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Your LastName"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaUser className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="email"
//                                 >
//                                     EMAIL
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         // value={formData.email}
//                                         // onChange={handleChange}
//                                         placeholder="Enter Valid EmailAddress"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>

//                             <div className="mb-4">
//                                 <label
//                                     className="block text-gray-700 text-sm mb-2"
//                                     htmlFor="password"
//                                 >
//                                     PASSWORD
//                                 </label>
//                                 <div className="flex items-center border border-gray-300 rounded">
//                                     <input
//                                         type="password"
//                                         id="password"
//                                         // value={formData.password}
//                                         // onChange={handleChange}
//                                         placeholder="******"
//                                         className="w-full focus:outline-none"
//                                         required
//                                     />
//                                     {/* <FaLock className="text-gray-400 mr-2" /> */}
//                                 </div>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
//                             >
//                                 Create Account
//                             </button>
//                             {/* <span
//                                 className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
//                                 onClick={handleSellerSignUpClick}
//                             >
//                                 signup as a seller
//                             </span> */}
//                         </form>
//                     </div>
//                 </div>
//             )}
//             <Toaster />
//         </>
//     );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
    FaUser,
    FaBars,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
// import ROLE from "../Common/role";
import toast from 'react-hot-toast';
import { loginUser, registerUser, registerSeller } from '../../store/reducers/userReducers.js'
import axios from "axios";


const Header = () => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);
    const [isSignUpOverlayVisible, setIsSignUpOverlayVisible] = useState(false);
    const [isForgotPasswordOverlayVisible, setIsForgotPasswordOverlayVisible] =
        useState(false);
    const { user } = useSelector((state) => state?.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [animationClass, setAnimationClass] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ROLE = 'jj'

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    });

    //   const handleLogout = async () => {
    //     try {
    //       // Send logout request
    //     //   const response = await axios(SummaryApi.logout_user.url, {
    //         // method: SummaryApi.logout_user.method,
    //         withCredentials: true,
    //       });

    // Access the response data directly (since axios parses it as JSON)
    //       const data = response.data;

    //       // Handle successful logout
    //       if (data.success) {
    //         toast.success(data.message);
    //         // dispatch(setUser(null));
    //         window.location.reload()
    //         navigate("/");
    //       } else if (data.error) {
    //         toast.error(data.message);
    //       }
    //     } catch (error) {
    //       // Handle error if the request fails
    //       toast.error("Logout failed. Please try again.");
    //     }
    //   };

    const handleMailSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8081/auth/user/forgot-password",
                { email }
            );
            toast.success(response.data.message);
            setEmail("");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8081/auth/user/signup",
                formData
            );
            if (response.status === 201) {
                toast.success(response.data.message);
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                });
                navigate("/");
            }
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    const handleCloseOverlay = () => {
        setAnimationClass("slide-down");
        setTimeout(() => {
            setIsLoginOverlayVisible(false);
            setIsSignUpOverlayVisible(false);
            setIsForgotPasswordOverlayVisible(false);
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8081/auth/user/login",
                {
                    email,
                    password,
                },
                { withCredentials: true }
            );

            toast.success(response.data.message);
            //   dispatch(loadUser());
            setEmail("");
            setPassword("");
            handleCloseOverlay();
            navigate("/");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "An error occurred. Please try again.";
            toast.error(errorMessage);
        }
    };

    const toggleSubmenu = () => {
        setIsSubmenuOpen(!isSubmenuOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLoginClick = () => {
        setAnimationClass("slide-up");
        setTimeout(() => setIsLoginOverlayVisible(true), 300);
    };

    const handleSignUpClick = () => {
        setAnimationClass("slide-up");
        setTimeout(() => setIsSignUpOverlayVisible(true), 300);
    };

    const handleForgotPasswordClick = () => {
        setAnimationClass("slide-up");
        setTimeout(() => setIsForgotPasswordOverlayVisible(true), 300);
    };

    return (
        <header className="bg-gray-900 p-4 mb-0">
            <div className="container mx-auto flex justify-between items-center">
                <div id="logo" className="flex items-center space-x-2">
                    <div className="flex items-center text-white font-bold">
                        {/* <div className="bg-red-600 rounded-full p-2">
              <span className="text-xl">EC</span>
            </div> */}
                        <span className="text-lg ml-2">Wayne Auto Sales</span>
                    </div>
                </div>

                <nav id="nav" className="text-xs flex space-x-6 uppercase no-underline">
                    <Link to="/" className="text-gray-300 hover:text-white no-underline">
                        home
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-white no-underline">
                        about
                    </Link>
                    <Link to="/listing" className="text-gray-300 hover:text-white no-underline">
                        listing
                    </Link>
                    <Link to="/faq" className="text-gray-300 hover:text-white no-underline">
                        faq's & help
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-white no-underline">
                        contact-us
                    </Link>
                    <Link to="/shop" className="text-gray-300 hover:text-white no-underline">
                        shop
                    </Link>
                </nav>

                <div id="user-options" className="text-sm flex items-center space-x-6">
                    {user?.id ? (
                        <div
                            className="text-gray-300 hover:text-white cursor-pointer hover:underline"
                            onClick={toggleSubmenu}
                        >
                            <span className="capitalize flex items-center text-1xl space-x-1 relative">
                                <FaUser />
                                <strong className="text-xs mt-1 flex items-center">
                                    {user.firstname ? user.firstname : "User"}
                                    <span className="text-2xl">
                                        <RiArrowDropDownLine />
                                    </span>
                                </strong>
                            </span>
                        </div>
                    ) : (
                        <div
                            className="text-gray-300 hover:text-white cursor-pointer hover:underline"
                            onClick={handleLoginClick}
                        >
                            <span className="capitalize flex items-center text-1xl space-x-1 relative">
                                <FaUser />
                                <strong className="text-xs mt-1 flex items-center">
                                    Login
                                </strong>
                            </span>
                        </div>
                    )}
                    {isSubmenuOpen && (
                        <div className="absolute right-20 mt-40 w-40 bg-gray-800 text-white rounded shadow-lg z-50">
                            {user?.role === ROLE.Admin && (
                                <Link
                                    to={"/admin panel/dashboard"}
                                    className="whitespace-nowrap hidden md:block hover:bg-gray-700 p-2"
                                >
                                    Admin Panel
                                </Link>
                            )}

                            {user?.role === ROLE.User && (
                                <Link
                                    to={"/user panel"}
                                    className="whitespace-nowrap hidden md:block hover:bg-gray-700 p-2"
                                >
                                    My Dashboard
                                </Link>
                            )}
                            <Link
                                to="#"
                                className="block px-4 py-2 text-sm hover:bg-gray-700"
                            >
                                Settings
                            </Link>
                            <span
                                className="block px-4 py-2 text-sm hover:bg-gray-700"
                            // onClick={handleLogout}
                            >
                                Logout
                            </span>
                        </div>
                    )}
                    <Link
                        to="/sell-car"
                        className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 no-underline"
                    >
                        Sell-Car
                    </Link>
                </div>
            </div>

            {/*------------------------------------- Mobile Menu--------------------------------------- */}

            <div className="flex items-center justify-center space-x-2 border-b border-gray-200 md:hidden">
                <div className="flex items-center text-white font-bold">
                    {/* <div className="bg-red-600 rounded-full p-2">
              <span className="text-xl">EC</span>
            </div> */}
                    <span className="text-lg">Wayne Auto Sales</span>
                </div>
            </div>

            <div
                id="mobile-user-options"
                className="text-sm flex items-center space-x-6 mt-4 md:hidden"
            >
                <div
                    className="text-white flex flex-row items-center border border-gray-200 p-1 md:hidden"
                    onClick={toggleMenu}
                >
                    <span className="mr-2">
                        MENU
                    </span>
                    <FaBars className="h-6 w-6" />
                    {isMenuOpen && (
                        <div
                            className="absolute uppercase right-0 pt-10 mt-30 bg-gray-800 text-white shadow-lg z-50 overflow-y-auto"
                            style={{ top: "1px", width: "100%", height: "100vh" }}
                        >
                            <div
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={handleCloseOverlay}
                            >
                                <RxCross2 />
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="border border-gray-200 p-2 w-40 rounded-full flex items-center justify-center bg-red-600">
                                    Wayne Auto Sales
                                </p>
                            </div>
                            <Link
                                to="/"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                home
                            </Link>
                            <Link
                                to="/about"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                about
                            </Link>
                            <Link
                                to="/listing"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                listing
                            </Link>
                            <Link
                                to="/faq"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                faq's & help
                            </Link>
                            <Link
                                to="/contact"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                contact-us
                            </Link>
                            <Link
                                to="/shop"
                                className="block px-4 py-4 text-sm border-b border-gray-200 hover:bg-gray-700"
                            >
                                shop
                            </Link>
                        </div>
                    )}
                </div>
                {user?.id ? (
                    <div
                        className="text-gray-300 hover:text-white cursor-pointer hover:underline"
                        onClick={toggleSubmenu}
                    >
                        <span className="capitalize flex items-center text-1xl space-x-1 relative">
                            <FaUser />
                            <strong className="text-xs mt-1 flex items-center">
                                {user.firstname ? user.firstname : "User"}
                                <span className="text-2xl">
                                    <RiArrowDropDownLine />
                                </span>
                            </strong>
                        </span>
                    </div>
                ) : (
                    <div
                        className="text-gray-300 hover:text-white cursor-pointer hover:underline"
                        onClick={handleLoginClick}
                    >
                        <span className="capitalize flex items-center text-1xl space-x-1 relative">
                            <FaUser />
                            <strong className="text-xs mt-1 flex items-center">Login</strong>
                        </span>
                    </div>
                )}
                {isSubmenuOpen && (
                    <div className="absolute right-20 mt-40 w-40 bg-gray-800 text-white rounded shadow-lg z-50">
                        {user?.role === ROLE.Admin && (
                            <Link
                                to={"/admin panel"}
                                className="whitespace-nowrap hidden md:block hover:bg-gray-700 p-2"
                            >
                                Admin Panel
                            </Link>
                        )}

                        {user?.role === ROLE.User && (
                            <Link
                                to={"/user panel"}
                                className="whitespace-nowrap hidden md:block hover:bg-gray-700 p-2"
                            >
                                My Dashboard
                            </Link>
                        )}
                        <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-700">
                            Settings
                        </Link>
                        <span
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
                        //   onClick={handleLogout}
                        >
                            Logout
                        </span>
                    </div>
                )}
                <Link
                    to="/sell-car"
                    className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 no-underline"
                >
                    Sell-Car
                </Link>
            </div>

            {/* ---------------------------------Login Form---------------------------------- */}

            {isLoginOverlayVisible && (
                <div
                    className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                        <div
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={handleCloseOverlay}
                        >
                            <RxCross2 />
                        </div>
                        <h2 className="text-xl font-bold text-center mb-8">USER SIGN IN</h2>

                        <form className='overflow-y-auto'>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="email"
                                >
                                    EMAIL
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaUser className="text-gray-400 ml-2" /> */}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="password"
                                >
                                    PASSWORD
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="******"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaLock className="text-gray-400 ml-2" /> */}
                                </div>
                            </div>

                            <div className="mb-4 flex justify-end items-center cursor-pointer">
                                <span
                                    className="text-gray-500 text-sm hover:underline flex items-center"
                                    onClick={handleForgotPasswordClick}
                                >
                                    <span className="mr-2">
                                        <AiFillQuestionCircle />
                                    </span>{" "}
                                    Forgot Password?
                                </span>
                            </div>

                            <button
                                type="submit"
                                // value={loading ? 'LOGGING IN...' : 'LOGIN'}
                                // disabled={loading}
                                className="w-full bg-red-600 text-white py-2 rounded border border-red-600 hover:bg-red-500"
                            >
                                {/* {loading ? 'SIGNING IN...' : 'SIGNIN'} */} signin
                            </button>
                            <span
                                className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
                                onClick={handleSignUpClick}
                            >
                                <span className="mr-2 mt-1">
                                    <AiFillQuestionCircle />
                                </span>
                                Don't Have Account
                            </span>
                        </form>
                    </div>
                </div>
            )}

            {/* -------------------------------------------Forgot Password Form--------------------------------------- */}
            {isForgotPasswordOverlayVisible && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
                >
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
                        <div className="flex justify-end">
                            <div
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={handleCloseOverlay}
                            >
                                <RxCross2 />
                            </div>
                        </div>
                        <h2 className="text-center text-xl font-semibold mb-4">
                            Password Recovery
                        </h2>
                        <form onSubmit={handleMailSubmit}>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <MdEmail />
                                    </span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Send
                            </button>
                        </form>
                        <div className="text-center mt-4">
                            <span className="text-gray-600">Not a Member yet? </span>
                            <span
                                className="text-red-500 font-bold hover:underline cursor-pointer"
                                onClick={handleSignUpClick}
                            >
                                Signup Now
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* -------------------------------SignUp Form------------------------------------ */}

            {isSignUpOverlayVisible && (
                <div
                    className={` overflow-y-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                        <div
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                            onClick={handleCloseOverlay}
                        >
                            <RxCross2 />
                        </div>
                        <h2 className="text-2xl font-bold text-center mb-8">
                            CREATE A CUSTOMER ACCOUNT
                        </h2>

                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="firstname"
                                >
                                    FIRSTNAME
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        id="firstname"
                                        value={formData.firstname}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Your FirstName"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaUser className="text-gray-400 mr-2" /> */}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="lastname"
                                >
                                    LASTNAME
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        id="lastname"
                                        value={formData.lastName}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Your LastName"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaUser className="text-gray-400 mr-2" /> */}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="email"
                                >
                                    EMAIL
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Valid EmailAddress"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaEnvelope className="text-gray-400 mr-2" /> */}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm mb-2"
                                    htmlFor="password"
                                >
                                    PASSWORD
                                </label>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="******"
                                        className="w-full focus:outline-none"
                                        required
                                    />
                                    {/* <FaLock className="text-gray-400 mr-2" /> */}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                            >
                                Create Account
                            </button>
                            <span
                                className="flex justify-center text-gray-500 mt-4 hover:underline cursor-pointer hover:text-red-700"
                                // onClick={handleSellerSignUpClick}
                            >
                                signup as a seller
                            </span>
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

