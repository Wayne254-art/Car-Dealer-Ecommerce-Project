import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RiArrowDropDownLine } from "react-icons/ri";
import {
    FaUser,
    FaLock,
    FaFacebookF,
    FaTwitter,
    FaGoogle,
    FaEnvelope,
    FaBars,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import './header.css';
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [isLoginOverlayVisible, setIsLoginOverlayVisible] = useState(false);
    const [isSignUpOverlayVisible, setIsSignUpOverlayVisible] = useState(false);
    const [isForgotPasswordOverlayVisible, setIsForgotPasswordOverlayVisible] = useState(false);
    const [animationClass, setAnimationClass] = useState("");
    const location = useLocation();

    const { user } = useSelector((state) => state?.user);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleMoremenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    useEffect(() => {
        setMenuOpen(false);
        setSubmenuOpen(false);
    }, [location]);

    const handleCloseOverlay = () => {
        setAnimationClass("slide-down");
        setTimeout(() => {
            setIsLoginOverlayVisible(false);
            setIsSignUpOverlayVisible(false);
            setIsForgotPasswordOverlayVisible(false);
        }, 300);
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
        <>
            <header id='header'>
                <Container>
                    <Row>
                        <Col lg='2' md='2' sm='12' xs='12'>
                            <div className='em-logo'>
                                <div className='em-media'>
                                    <figure>
                                        <Link to="#"><img src='' alt="Elite_Motors" /></Link>
                                    </figure>
                                </div>
                            </div>
                        </Col>

                        <Col lg='10' md='10' sm='12' xs='12'>
                            <div className='em-main-nav'>
                                <nav id='main-navigation'>
                                    <ul>
                                        <li><Link to='/'>home</Link></li>
                                        <li><Link to='/about'>about</Link></li>
                                        <li><Link to='/stock'>stock</Link></li>
                                        <li><Link to='/under-construction'>compare</Link></li>
                                        <li><Link to='/updates'>updates</Link></li>
                                        <li>
                                            <Link to='#'>more</Link>
                                            <ul className={submenuOpen ? 'active' : ''}>
                                                <li><Link to='/team'>our team</Link></li>
                                                <li><Link to='/faqs'>faq's & help</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to='/contact'>contact-us</Link></li>
                                        <li className='em-user-option'>
                                            {user?.id ? (
                                                <div className='em-login'>
                                                    <div className='em-login-dropdown'>
                                                        <Link to=''>
                                                            <FontAwesomeIcon icon={faUser} /> {user.firstname ? user.lastname : "User"} <FontAwesomeIcon icon={faChevronDown} />
                                                        </Link>
                                                        <div className='em-user-dropdown'>
                                                            <strong style={{ color: '#ff2121', cursor: 'pointer' }} className='post-ad'>Post New Ad</strong>
                                                            <ul>
                                                                <li><Link to='/user-general-setting'>General Settings<span>3</span></Link></li>
                                                                <li><Link to='/user-car-listing'>My Posted Cars<span>23</span></Link></li>
                                                                <li><Link to='/user-post-new-vehicle'>Post New Car</Link></li>
                                                                <li><Link to='/user-car-shortlist'>Shortlisted</Link></li>
                                                                <li><Link to='/user-payments'>Payment</Link></li>
                                                                <li><Link to='/user-packages'>Packages</Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <Link to='/sell-car' className='btn-sell-car'>
                                                        <FontAwesomeIcon icon={faPlus} /> Sell Car
                                                    </Link>
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
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

            {/* Mobile Navigation */}
            <header id='mobile-header'>
                <div className='mobile-em-logo'>
                    <div className='em-media'>
                        <figure>
                            <Link to=''><img src='' alt="Elite_Motors" /></Link>
                        </figure>
                    </div>
                </div>
                <div className='mobile-menu'>
                    <div className='mobile-display-menu-items' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px' }} />
                    </div>
                    <nav id='mobile-main-navbar' className={menuOpen ? 'active' : ''}>
                        <div className='mobile-exit-menu-items' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faTimes} style={{ color: '#ff2121', fontSize: '40px' }} />
                        </div>
                        <ul>
                            <li><Link to='/'>home</Link></li>
                            <li><Link to='/about'>about</Link></li>
                            <li><Link to='/stock'>stock</Link></li>
                            <li><Link to='/under-construction'>compare</Link></li>
                            <li><Link to='/updates'>updates</Link></li>
                            <li>
                                <span onClick={toggleMoremenu}>more</span>
                                <ul className={submenuOpen ? 'active' : ''}>
                                    <li><Link to='/team' style={{ marginTop: '-80px' }}>our team</Link></li>
                                    <li><Link to='/mobile-faq' style={{ marginTop: '-40px' }}>faq's & help</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/contact'>contact-us</Link></li>
                        </ul>
                    </nav>
                    <div className='mobile-em-user-option'>
                        {user?.id ? (
                            <div className='mobile-em-login'>
                                <div className='mobile-em-login-dropdown'>
                                    <span>
                                        <FontAwesomeIcon icon={faUser} /> {user.firstname ? user.lastname : "User"} <FontAwesomeIcon icon={faChevronDown} />
                                    </span>
                                    <div className='mobile-em-user-dropdown'>
                                        <strong style={{ color: '#ff2121', cursor: 'pointer' }} className='post-ad'>Post New Ad</strong>
                                        <ul>
                                            <li><Link to='/user-general-setting'>General Settings<span>3</span></Link></li>
                                            <li><Link to='/user-car-listing'>My Posted Cars<span>23</span></Link></li>
                                            <li><Link to='/user-post-new-vehicle'>Post New Car</Link></li>
                                            <li><Link to='/user-car-shortlist'>Shortlisted</Link></li>
                                            <li><Link to='/user-payments'>Payment</Link></li>
                                            <li><Link to='/user-packages'>Packages</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <Link to='/sell-car' className='mobile-btn-sell-car'>
                                    <FontAwesomeIcon icon={faPlus} /> Sell Car
                                </Link>
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
                    </div>
                </div>
                {/* ---------------------------------Login Form---------------------------------- */}

                {isLoginOverlayVisible && (
                    <div
                        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={handleCloseOverlay}
                            >
                                <RxCross2 />
                            </button>
                            <h2 className="text-xl font-bold text-center mb-8">USER SIGN IN</h2>
                            <form>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="email"
                                    >
                                        EMAIL
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="text"
                                            id="email"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Your Email"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaUser className="text-gray-400 ml-2" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="password"
                                    >
                                        PASSWORD
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="password"
                                            id="password"
                                            // value={password}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            placeholder="******"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaLock className="text-gray-400 ml-2" />
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
                                    className="w-full bg-red-600 text-white py-2 rounded border border-red-600 hover:bg-white hover:text-red-600"
                                >
                                    SIGN IN
                                </button>

                                <div className="my-4 flex items-center justify-center">
                                    <hr className="w-1/5 border-gray-300" />
                                    <span className="mx-2 text-gray-500 text-sm">OR</span>
                                    <hr className="w-1/5 border-gray-300" />
                                </div>

                                <p className="text-center text-sm text-gray-500 mb-4">
                                    Signin with your Social Networks
                                </p>

                                <div className="flex justify-between">
                                    <button className="bg-blue-800 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700">
                                        <FaFacebookF className="mr-2" /> Facebook
                                    </button>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-400">
                                        <FaTwitter className="mr-2" /> Twitter
                                    </button>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-500">
                                        <FaGoogle className="mr-2" /> Google
                                    </button>
                                </div>
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
                                <button
                                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                                    onClick={handleCloseOverlay}
                                >
                                    <RxCross2 />
                                </button>
                            </div>
                            <h2 className="text-center text-xl font-semibold mb-4">
                                Password Recovery
                            </h2>
                            <form >
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
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
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
                        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ${animationClass}`}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
                                onClick={handleCloseOverlay}
                            >
                                <RxCross2 />
                            </button>
                            <h2 className="text-2xl font-bold text-center mb-8">
                                CREATE ACCOUNT
                            </h2>

                            <form>
                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="firstname"
                                    >
                                        FIRSTNAME
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="text"
                                            id="firstname"
                                            // value={formData.firstname}
                                            // onChange={handleChange}
                                            placeholder="Enter Your FirstName"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaUser className="text-gray-400 mr-2" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="lastname"
                                    >
                                        LASTNAME
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="text"
                                            id="lastname"
                                            // value={formData.lastname}
                                            // onChange={handleChange}
                                            placeholder="Enter Your LastName"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaUser className="text-gray-400 mr-2" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="email"
                                    >
                                        EMAIL
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="email"
                                            id="email"
                                            // value={formData.email}
                                            // onChange={handleChange}
                                            placeholder="Enter Valid EmailAddress"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaEnvelope className="text-gray-400 mr-2" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        className="block text-gray-700 text-sm mb-2"
                                        htmlFor="password"
                                    >
                                        PASSWORD
                                    </label>
                                    <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                                        <input
                                            type="password"
                                            id="password"
                                            // value={formData.password}
                                            // onChange={handleChange}
                                            placeholder="******"
                                            className="w-full focus:outline-none"
                                            required
                                        />
                                        <FaLock className="text-gray-400 mr-2" />
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
                                    onClick={handleLoginClick}
                                >
                                    Already Have Account
                                </span>
                            </form>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
