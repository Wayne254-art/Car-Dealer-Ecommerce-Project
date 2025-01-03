import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faPlus, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const location = useLocation();

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
                                            <div className='em-login'>
                                                <div className='em-login-dropdown'>
                                                    <Link to=''>
                                                        <FontAwesomeIcon icon={faUser} /> Wayne <FontAwesomeIcon icon={faChevronDown} />
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
                        <FontAwesomeIcon icon={faBars} style={{fontSize:'30px'}}/>
                    </div>
                    <nav id='mobile-main-navbar' className={menuOpen ? 'active' : ''}>
                        <div className='mobile-exit-menu-items' onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faTimes} style={{color:'#ff2121',fontSize:'40px'}}/>
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
                                    <li><Link to='/team' style={{marginTop:'-80px'}}>our team</Link></li>
                                    <li><Link to='/mobile-faq' style={{marginTop:'-40px'}}>faq's & help</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/contact'>contact-us</Link></li>
                        </ul>
                    </nav>
                    <div className='mobile-em-user-option'>
                        <div className='mobile-em-login'>
                            <div className='mobile-em-login-dropdown'>
                                <span>
                                    <FontAwesomeIcon icon={faUser} /> Wayne <FontAwesomeIcon icon={faChevronDown} />
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
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
