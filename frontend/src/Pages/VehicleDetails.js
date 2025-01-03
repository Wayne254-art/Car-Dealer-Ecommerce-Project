import {
  faBuilding,
  faCar,
  faChartLine,
  faCogs,
  faGasPump,
  faMapMarkerAlt,
  faPhotoFilm,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/vehicle-detail.css";
import axios from "axios";
import Slider from "react-slick";
import { useParams } from "react-router-dom";

const VehicleDetails = () => {
  const [vehiclePrice, setVehiclePrice] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [period, setPeriod] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [formattedPrice, setFormattedPrice] = useState("");
  // const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleFormatChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, ""); // Remove existing commas
    if (!isNaN(rawValue)) {
      setVehiclePrice(rawValue);
      setFormattedPrice(formatNumberWithCommas(rawValue));
    }
  };

  const { vehicleId } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [formData, setFormData] = useState({
    vehicleId: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const [currentImageIndex] = useState(0);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        //${vehicleId}
        const response = await axios.get(
          `http://localhost:7071/api/vehicles/detail/fetch/${vehicleId}`
        );
        //console.log(response.data);
        setListing(response.data);
        if (
          response.data.listingImages &&
          response.data.listingImages.length > 0
        ) {
          setSelectedImage(response.data.listingImages[0]);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching vehicle data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [vehicleId]);

  useEffect(() => {
    if (listing && listing.listingImages && listing.listingImages.length > 0) {
      setSelectedImage(listing.listingImages[currentImageIndex]);
    }
  }, [currentImageIndex, listing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:7071/api/vehicles/detail/contact/submit",
        {
          ...formData,
          vehicleId: listing.listing_id, // Using vehicle.listing_id from the vehicle state
        }
      );
      toast.success(response.data.message);
      setFormData({
        vehicleId: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Error submitting form. Please try again.");
    }
    setFormLoading(false);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h3>{error.message}</h3>
      </div>
    );
  }

  // const handleRevealClick = () => {
  //     setShowPhoneNumber(true);
  // };

  const revealNumber = () => {
    setRevealed(true);
  };

  //Financing Calculator
  const handleCalculate = () => {
    const price = parseFloat(vehiclePrice);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseInt(period);
    const down = parseFloat(downPayment);

    if (!isNaN(price) && !isNaN(rate) && !isNaN(months) && !isNaN(down)) {
      const loanAmount = price - down;
      const monthly = (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
      const instalments = Math.ceil(monthly.toFixed(2));
      setMonthlyPayment(instalments.toLocaleString());
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="em-car-listing-detail">
      <ToastContainer />
      <Container>
        <Row>
          <Col lg="8" md="8" sm="12" xs="12">
            <div className="custom-content">
              <Row>
                <Col lg="12" md="12" sm="12" xs="12">
                  <div className="em-car-image-container">
                    <div className="em-main-image-container">
                      {selectedImage && (
                        <img
                          src={selectedImage}
                          alt="Main Preview"
                          className="em-main-image"
                        />
                      )}
                      {listing.listingImages && (
                        <div
                          className="image-counter"
                          style={{ fontWeight: "bold" }}
                        >
                          <FontAwesomeIcon icon={faPhotoFilm} />{" "}
                          {listing.listingImages.length} photos
                        </div>
                      )}
                    </div>
                    <Col lg="12" md="12" sm="12" xs="12">
                      <Slider {...settings} className="slider">
                        {listing.listingImages.map((src, index) => (
                          <div key={index}>
                            <img
                              src={src}
                              alt={`Thumbnail ${index}`}
                              className={`thumbnail ${
                                selectedImage === src ? "selected" : ""
                              }`}
                              onClick={() => setSelectedImage(src)}
                              style={{ marginTop: "30px" }}
                            />
                          </div>
                        ))}
                      </Slider>
                    </Col>
                  </div>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12">
                  <div className="car-detail-heading">
                    <div className="auto-text">
                      <h2 style={{ color: "#000000" }}>
                        {listing.modelYear} {listing.listingMake}{" "}
                        {listing.listingModel} {listing.numberOfDoors}-Door{" "}
                        {listing.exteriorColor}
                      </h2>
                      <span>
                        <FontAwesomeIcon icon={faBuilding} />{" "}
                        {listing.exteriorColor} Exterior
                      </span>
                      <address>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        {listing.county}, {listing.residence}
                      </address>
                    </div>
                    {/* <div className='auto-price'><span className='em-color'>Ksh.{vehicle.vehicle_price}</span></div> */}
                  </div>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12">
                  <div className="em-detail-nav">
                    <ul>
                      <li>
                        <a className="active" href="#vehicle">
                          Vehicle overview
                        </a>
                      </li>
                      <li>
                        <a href="#specification">Technical Specification</a>
                      </li>
                      {/* <li><a href="#accessories">Accessories</a></li> */}
                      <li>
                        <a href="#location">Location</a>
                      </li>
                      <li>
                        <a href="#contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="on-scroll">
                    <div id="vehicle" className="auto-overview detail-content">
                      <ul>
                        <Row>
                          <li>
                            <Col lg="3" md="3" sm="6" xs="6">
                              <div className="em-media">
                                <figure>
                                  <FontAwesomeIcon icon={faRoad} />
                                </figure>
                              </div>
                              <div className="auto-text">
                                <span>Year</span>
                                <strong>{listing.modelYear}</strong>
                              </div>
                            </Col>
                          </li>
                          <li>
                            <Col lg="3" md="3" sm="6" xs="6">
                              <div className="em-media">
                                <figure>
                                  <FontAwesomeIcon icon={faCar} />
                                </figure>
                              </div>
                              <div className="auto-text">
                                <span>Mileage</span>
                                <strong>{listing.listingMileage}km</strong>
                              </div>
                            </Col>
                          </li>
                          <li>
                            <Col lg="3" md="3" sm="6" xs="6">
                              <div className="em-media">
                                <figure>
                                  <FontAwesomeIcon icon={faCogs} />
                                </figure>
                              </div>
                              <div className="auto-text">
                                <span>Trans</span>
                                <strong>{listing.transmission}</strong>
                              </div>
                            </Col>
                          </li>
                          <li>
                            <Col lg="3" md="3" sm="6" xs="6">
                              <div className="em-media">
                                <figure>
                                  <FontAwesomeIcon icon={faGasPump} />
                                </figure>
                              </div>
                              <div className="auto-text">
                                <span>Fuel</span>
                                <strong>{listing.fuelType}</strong>
                              </div>
                            </Col>
                          </li>
                        </Row>
                      </ul>
                    </div>
                    <div
                      id="specificstions"
                      className="auto-specifications detail-content"
                    >
                      <div className="section-title">
                        <h4>Technical specifications</h4>
                      </div>
                      <ul>
                        <Row>
                          <li>
                            <Col lg="8" md="8" sm="12" xs="12">
                              <div className="element-title">
                                <FontAwesomeIcon icon={faCogs} />
                                <span style={{ marginLeft: "10px" }}>
                                  Engine and Drive Train
                                </span>
                              </div>
                            </Col>
                          </li>
                          <li>
                            <Col lg="8" md="8" sm="12" xs="12">
                              <div
                                className="specifications-info"
                                style={{ fontSize: "25px" }}
                              >
                                <ul>
                                  <li>
                                    <span>Engine Type</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.engineSize}
                                    </strong>
                                  </li>
                                  <li>
                                    <span>Engine Capacity</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.engineCapacity}
                                    </strong>
                                  </li>
                                  <li>
                                    <span>Transmission</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.transmission}
                                    </strong>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </li>
                        </Row>
                      </ul>
                    </div>
                    <div
                      id="specificstions"
                      className="auto-specifications detail-content"
                    >
                      <ul>
                        <Row>
                          <li>
                            <Col lg="8" md="8" sm="12" xs="12">
                              <div className="element-title">
                                <FontAwesomeIcon icon={faRoad} />
                                <span style={{ marginLeft: "10px" }}>
                                  Engine Transmission
                                </span>
                              </div>
                            </Col>
                          </li>
                          <li>
                            <Col lg="8" md="8" sm="12" xs="12">
                              <div className="specifications-info">
                                <ul>
                                  <li>
                                    <span>Mileage</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.listingMileage}Km
                                    </strong>
                                  </li>
                                  <li>
                                    <span>Transmission</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.transmission}
                                    </strong>
                                  </li>
                                  <li>
                                    <span>Number of Cylinders</span>
                                    <strong style={{ marginLeft: "10px" }}>
                                      {listing.listingCylinders}
                                    </strong>
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </li>
                        </Row>
                      </ul>
                    </div>
                  </div>
                  <div id="contact" className="em-contact-form detail-content">
                    <div className="section-title">
                      <h4>Contact Us</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder={listing.listing_id}
                        name="vehicleId"
                        value={listing.listing_id}
                        onChange={handleChange}
                        readOnly
                      />
                      <input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                      <textarea
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="submit"
                        style={{ fontWeight: "bold" }}
                        value={formLoading ? "submitting..." : "Submit"}
                        disabled={formLoading}
                        className="cs-bgcolor"
                      />
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="4" md="4" sm="12" xs="12">
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <div>
                  <h3
                    style={{
                      marginTop: "40px",
                      color: "#000000",
                      borderBottom: "#ddd 1px solid",
                    }}
                  >
                    {listing.listingMake} {listing.listingModel}
                  </h3>
                  <div className="details text-muted">
                    <span>{listing.modelYear}</span>
                    <span>{listing.listingMileage}Km</span>
                    <span>{listing.driveType}</span>
                    <span>{listing.fuelType}</span>
                    <hr></hr>
                    <div className="price">Ksh.{listing.listingPrice}</div>
                  </div>
                </div>

                <div class="car-details-container">
                  <table class="table car-details-table">
                    <tbody>
                      <tr>
                        <td>Condition:</td>
                        <td>
                          {listing.listingCondition} ({listing.listingStatus})
                        </td>
                      </tr>
                      <tr>
                        <td>Vehicle Type:</td>
                        <td>{listing.driveType}</td>
                      </tr>
                      <tr>
                        <td>Make:</td>
                        <td>{listing.listingMake}</td>
                      </tr>
                      <tr>
                        <td>Model:</td>
                        <td>{listing.listingModel}</td>
                      </tr>
                      <tr>
                        <td>Exterior-Color:</td>
                        <td>{listing.exteriorColor}</td>
                      </tr>
                      <tr>
                        <td>Interior-Color:</td>
                        <td>{listing.interiorColor}</td>
                      </tr>
                      <tr>
                        <td>Year:</td>
                        <td>{listing.modelYear}</td>
                      </tr>
                      <tr>
                        <td>Mileage:</td>
                        <td>{listing.listingMileage}(Km)</td>
                      </tr>
                      <tr>
                        <td>Fuel Type:</td>
                        <td>{listing.fuelType}</td>
                      </tr>
                      <tr>
                        <td>Engine Size:</td>
                        <td>{listing.engineSize}</td>
                      </tr>
                      <tr>
                        <td>Cylinders:</td>
                        <td>{listing.listingCylinders}</td>
                      </tr>
                      <tr>
                        <td>Engine Type:</td>
                        <td>{listing.engineCapacity}</td>
                      </tr>
                      <tr>
                        <td>Doors:</td>
                        <td>{listing.numberOfDoors}-Door</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg="12" md="12" sm="12" xs="12">
                <div className="seller-details">
                  {/* <div className="contact-card">
                                                <div className="contact-header">
                                                    <div className="contact-info">
                                                        <h2>
                                                            {listing.firstName} {listing.lastName}
                                                        </h2>
                                                        <p
                                                            style={{
                                                                textTransform: "uppercase",
                                                                fontWeight: "bolder",
                                                            }}
                                                        >
                                                            seller
                                                        </p>
                                                        <p className="contact-address">
                                                            {listing.county},{listing.residence}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="contact-details">
                                                    <div className="contact-email">
                                                        <i class="ri-mail-fill"></i>
                                                        <span>{listing.emailAddress}</span>
                                                    </div>
                                                    <div className="contact-phone">
                                                        <i class="ri-phone-fill"></i>
                                                        <span>
                                                            {showPhoneNumber
                                                                ? "+254-799-703-637"
                                                                : "+254 *** *** - "}
                                                            {!showPhoneNumber && (
                                                                <button onClick={handleRevealClick}>
                                                                    reveal
                                                                </button>
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div> */}
                  <div className="contact-info">
                    <div className="contact-number">
                      <i class="ri-phone-fill" style={{fontSize:'30px'}}></i>
                      <span>
                        {revealed ? "(+254)-799-703-637" : "(+254)- *** ***"} -{" "}
                        <span onClick={revealNumber} className="reveal-link">
                          reveal
                        </span>
                      </span>
                    </div>
                    <button className="whatsapp-button">
                      <i class="ri-whatsapp-fill" style={{fontSize:'30px',color:'#000000'}}></i> Chat via WhatsApp
                    </button>
                    <button className="message-button">
                      <i class="ri-message-2-fill" style={{fontSize:'30px',color:'#000000'}}></i>Send message
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <div
                className="financing-calculator"
                style={{ marginTop: "20px", marginBottom: "20px" }}
              >
                <Col lg="12" md="12" sm="12" xs="12">
                  <h2>
                    {" "}
                    <FontAwesomeIcon icon={faChartLine} /> Financing Calculator
                  </h2>
                  <div className="form-group">
                    <label>Vehicle Price (Ksh)</label>
                    <input
                      type="text"
                      value={formattedPrice}
                      onChange={handleFormatChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Interest Rate (%)</label>
                    <input
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Period (Months)</label>
                    <input
                      type="number"
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Down Payment (Ksh)</label>
                    <input
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(e.target.value)}
                    />
                  </div>
                  <button onClick={handleCalculate}>Calculate</button>
                  {monthlyPayment && (
                    <div className="result">
                      <h3>Monthly Payment: Ksh. {monthlyPayment}</h3>
                    </div>
                  )}
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VehicleDetails;
