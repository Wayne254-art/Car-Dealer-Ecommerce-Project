import React, { useRef, useState } from "react";
import "./admin-add-listing.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SellCar = () => {
  const [make, setMake] = useState("");
  const [models, setModels] = useState([]);
  const [formData, setFormData] = useState({
    listingTitle: "",
    listingCondition: "",
    listingType: "",
    listingMake: "",
    listingModel: "",
    listingPrice: "",
    modelYear: "",
    driveType: "",
    transmission: "",
    fuelType: "",
    engineCapacity: "",
    engineSize: "",
    listingCylinders: "",
    horsePower: "",
    listingMileage: "",
    exteriorColor: "",
    interiorColor: "",
    numberOfDoors: "",
    listingVin: "",
    listingDescription: "",
    listingImages: [],
    listingAttachments: [],
    firstName: "",
    lastName: "",
    contact: "",
    emailAddress: "",
    county: "",
    residence: "",
  });
  const [formLoading, setFormLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          form.append(`${key}[${index}]`, item);
        });
      } else {
        form.append(key, formData[key]);
      }
    });

    try {
      setFormLoading(true);
      const response = await fetch("http://localhost:7071/api/add/listing/submit", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        toast.success("Listing Added Successfully!");
        setFormData({
          listingTitle: "",
          listingCondition: "",
          listingType: "",
          listingMake: "",
          listingModel: "",
          listingPrice: "",
          modelYear: "",
          driveType: "",
          transmission: "",
          fuelType: "",
          engineCapacity: "",
          engineSize: "",
          listingCylinders: "",
          horsePower: "",
          listingMileage: "",
          exteriorColor: "",
          interiorColor: "",
          numberOfDoors: "",
          listingVin: "",
          listingDescription: "",
          listingImages: [],
          listingAttachments: [],
          firstName: "",
          lastName: "",
          contact: "",
          emailAddress: "",
          county: "",
          residence: "",
        });
      } else {
        toast.error("Failed to add listing");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
    setFormLoading(false);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], ...files],
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const triggerFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData((prevData) => ({
      ...prevData,
      listingImages: [...prevData.listingImages, ...files],
    }));
  };

  const handleFileAttachmentsChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData((prevData) => ({
      ...prevData,
      listingAttachments: [...prevData.listingAttachments, ...files],
    }));
  };

  return (
    <div className="sell-car-form-container">
      <form className="sell-car-form" onSubmit={handleSubmit}>
        <h2>Add Listing</h2>
        <p className="login-register-message">
          You can also <a href="/login">Log in</a> or{" "}
          <a href="/register">Register</a> first.
        </p>

        <div className="title-form-group">
          <label htmlFor="listingTitle">Listing Title *</label>
          <input
            type="text"
            id="listingTitle"
            name="listingTitle"
            placeholder="Enter title here"
            value={formData.listingTitle}
            onChange={handleChange}
            
            style={{ textTransform: "uppercase" }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition *</label>
          <select
            id="condition"
            name="listingCondition"
            
            value={formData.listingCondition}
            onChange={handleChange}
          >
            <option value="new">New</option>
            <option value="used">Used</option>
            {/* Add options */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="listingType"
            
            value={formData.listingType}
            onChange={handleChange}
          >
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="coupe">Coupe</option>
            <option value="convertible">Convertible</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="wagon">Wagon</option>
            <option value="crossover">Crossover</option>
            <option value="minivan">Minivan</option>
            <option value="pickup-truck">Pickup Truck</option>
            <option value="roadster">Roadster</option>
            <option value="luxury-car">Luxury Car</option>
            <option value="hybrid-car">Hybrid Car</option>
            <option value="electric-car">Electric Car</option>
            <option value="compact-car">Compact Car</option>
            <option value="subcompact-car">Subcompact Car</option>
            <option value="sports-car">Sports Car</option>
            <option value="supercar">Supercar</option>
            <option value="off-road-vehicle">Off-Road Vehicle</option>
            <option value="limousine">Limousine</option>
            <option value="microcar">Microcar</option>
            <option value="kei-car">Kei Car</option>
            <option value="station-wagon">Station Wagon</option>
            <option value="muscle-car">Muscle Car</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="make">Make</label>
          <select
            id="make"
            name="listingMake"
            
            value={formData.listingMake}
            onChange={(e) => {
              handleChange(e);
              // updateModels(e.target.value);
            }}
          >
            <option value="">Select Make</option>
            <option value="acura">Acura</option>
            <option value="alfa-romeo">Alfa Romeo</option>
            <option value="aston-martin">Aston Martin</option>
            <option value="audi">Audi</option>
            <option value="bentley">Bentley</option>
            <option value="bmw">BMW</option>
            <option value="bugatti">Bugatti</option>
            <option value="buick">Buick</option>
            <option value="cadillac">Cadillac</option>
            <option value="chevrolet">Chevrolet</option>
            <option value="chrysler">Chrysler</option>
            <option value="citroen">Citroen</option>
            <option value="dodge">Dodge</option>
            <option value="ferrari">Ferrari</option>
            <option value="fiat">Fiat</option>
            <option value="ford">Ford</option>
            <option value="genesis">Genesis</option>
            <option value="gmc">GMC</option>
            <option value="honda">Honda</option>
            <option value="hyundai">Hyundai</option>
            <option value="infiniti">Infiniti</option>
            <option value="jaguar">Jaguar</option>
            <option value="jeep">Jeep</option>
            <option value="kia">Kia</option>
            <option value="lamborghini">Lamborghini</option>
            <option value="land-rover">Land Rover</option>
            <option value="lexus">Lexus</option>
            <option value="lincoln">Lincoln</option>
            <option value="maserati">Maserati</option>
            <option value="mazda">Mazda</option>
            <option value="mclaren">McLaren</option>
            <option value="mercedes-benz">Mercedes-Benz</option>
            <option value="mini">Mini</option>
            <option value="mitsubishi">Mitsubishi</option>
            <option value="nissan">Nissan</option>
            <option value="pagani">Pagani</option>
            <option value="peugeot">Peugeot</option>
            <option value="porsche">Porsche</option>
            <option value="ram">Ram</option>
            <option value="renault">Renault</option>
            <option value="rolls-royce">Rolls-Royce</option>
            <option value="saab">Saab</option>
            <option value="subaru">Subaru</option>
            <option value="suzuki">Suzuki</option>
            <option value="tesla">Tesla</option>
            <option value="toyota">Toyota</option>
            <option value="volkswagen">Volkswagen</option>
            <option value="volvo">Volvo</option>
            <option value="vauxhall">Vauxhall</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            name="listingModel"
            
            value={formData.listingModel}
            onChange={handleChange}
          >
            {make ? (
              models.length > 0 ? (
                models.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))
              ) : (
                <option value="">No models available</option>
              )
            ) : (
              <option value="">Select Make first</option>
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price (KSH)</label>
          <input
            type="text"
            id="price"
            placeholder="Ksh."
            name="listingPrice"
            value={formData.listingPrice}
            // onChange={handlePriceChange}
            
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            name="modelYear"
            value={formData.modelYear}
            onChange={handleChange}
            
            maxLength="4"
            pattern="\d*"
            title="Please enter digits only."
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="driveType">Drive Type</label>
          <select
            id="driveType"
            name="driveType"
            value={formData.driveType}
            onChange={handleChange}
          >
            <option value="awd/4wd">AWD/4WD</option>
            <option value="front-wheel-drive">Front wheel Drive</option>
            <option value="rear-whee-drive">Rear wheel Drive</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="transmission">Transmission</label>
          <select
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          >
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
            <option value="semi-automatic">Semi Automatic</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={handleChange}
          >
            <option value="diesel">Diesel</option>
            <option value="petrol">Petrol</option>
            <option value="hybrid">Hybrid</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="engineCapacity">Engine-Capacity</label>
          <select
            type="text"
            id="engineCapacity"
            name="engineCapacity"
            value={formData.engineCapacity}
            onChange={handleChange}
          >
            <option value="600cc">600cc</option>
            <option value="800cc">800cc</option>
            <option value="1000cc">1000cc</option>
            <option value="1200cc">1200cc</option>
            <option value="1400cc">1400cc</option>
            <option value="1500cc">1500cc</option>
            <option value="1600cc">1600cc</option>
            <option value="1800cc">1800cc</option>
            <option value="2000cc">2000cc</option>
            <option value="2200cc">2200cc</option>
            <option value="2400cc">2400cc</option>
            <option value="2500cc">2500cc</option>
            <option value="2700cc">2700cc</option>
            <option value="3000cc">3000cc</option>
            <option value="3200cc">3200cc</option>
            <option value="3500cc">3500cc</option>
            <option value="4000cc">4000cc</option>
            <option value="4200cc">4200cc</option>
            <option value="4400cc">4400cc</option>
            <option value="4500cc">4500cc</option>
            <option value="4600cc">4600cc</option>
            <option value="5000cc">5000cc</option>
            <option value="5200cc">5200cc</option>
            <option value="5500cc">5500cc</option>
            <option value="6000cc">6000cc</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="engineSize">Engine Size</label>
          <select
            type="text"
            id="engineSize"
            name="engineSize"
            value={formData.engineSize}
            onChange={handleChange}
          >
            <option value="1.0L">1.0L</option>
            <option value="1.2L">1.2L</option>
            <option value="1.4L">1.4L</option>
            <option value="1.5L">1.5L</option>
            <option value="1.6L">1.6L</option>
            <option value="1.8L">1.8L</option>
            <option value="2.0L">2.0L</option>
            <option value="2.2L">2.2L</option>
            <option value="2.4L">2.4L</option>
            <option value="2.5L">2.5L</option>
            <option value="2.7L">2.7L</option>
            <option value="3.0L">3.0L</option>
            <option value="3.2L">3.2L</option>
            <option value="3.5L">3.5L</option>
            <option value="4.0L">4.0L</option>
            <option value="4.2L">4.2L</option>
            <option value="4.4L">4.4L</option>
            <option value="4.6L">4.6L</option>
            <option value="5.0L">5.0L</option>
            <option value="5.2L">5.2L</option>
            <option value="5.5L">5.5L</option>
            <option value="6.0L">6.0L</option>
            <option value="6.2L">6.2L</option>
            <option value="6.5L">6.5L</option>
            <option value="7.0L">7.0L</option>
            <option value="7.2L">7.2L</option>
            <option value="7.4L">7.4L</option>
            <option value="7.5L">7.5L</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cylinders">Cylinders</label>
          <select
            id="cylinders"
            name="listingCylinders"
            value={formData.listingCylinders}
            onChange={handleChange}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="12">12</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="horsePower">Horse Power</label>
          <input
            type="text"
            id="horsepower"
            placeholder="Horse Power"
            name="horsePower"
            value={formData.horsePower}
            onChange={handleChange}
            maxLength="4"
            pattern="\d*"
            title="Please enter digits only."
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mileage">Mileage</label>
          <input
            type="text"
            id="mileage"
            placeholder="mileage"
            name="listingMileage"
            value={formData.listingMileage}
            onChange={handleChange}
            
            pattern="\d*"
            title="Please enter digits only."
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exterior-color">Exterior-Color</label>
          <input
            type="text"
            id="exterior-color"
            name="exteriorColor"
            value={formData.exteriorColor}
            onChange={handleChange}
            pattern="[A-Za-z]*"
            title="Please enter letters only."
            onKeyPress={(event) => {
              if (!/[A-Za-z]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="interior-color">Interior-Color</label>
          <input
            type="text"
            id="interior-color"
            name="interiorColor"
            value={formData.interiorColor}
            onChange={handleChange}
            pattern="[A-Za-z]*"
            title="Please enter letters only."
            onKeyPress={(event) => {
              if (!/[A-Za-z]/.test(event.key)) {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="doors">Doors</label>
          <select
            id="doors"
            name="numberOfDoors"
            value={formData.numberOfDoors}
            onChange={handleChange}
          >
            <option value="2-door">2-Door</option>
            <option value="3-door">3-Door</option>
            <option value="4-door">4-Door</option>
            <option value="5-door">5-Door</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vin">VIN</label>
          <input
            type="text"
            id="vin"
            name="listingVin"
            value={formData.listingVin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="listingDescription"
            value={formData.listingDescription}
            onChange={handleChange}
            id="description"
            rows="4"
            placeholder="Describe the features of your car.i.e has keyless entry"
          ></textarea>
        </div>

        <div className="media-sections">
          <div className="gallery-section">
            <div className="gallery-header">
              <span className="quick-tips">Quick tips</span>
              <span className="tips-description">
                Attractive photos increase the popularity of the advertisement
                up to 5 times!{" "}
                <Link to="#">How do you take good pictures?</Link>
              </span>
            </div>
            <div className="gallery-body" onClick={triggerFileInputClick}>
              <input
                type="file"
                name="listingImages"
                multiple
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
                id="galleryFileInput"
              />
              <label htmlFor="galleryFileInput" className="add-images">
                <span>
                  <FontAwesomeIcon icon={faImages} size="2x" color="#ff2121" />
                  Add images
                </span>
              </label>
              <div className="image-list">
                {Array.isArray(formData.listingImages) &&
                  formData.listingImages.length > 0 &&
                  formData.listingImages.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="attachments-section">
            <input
              type="file"
              name="listingAttachments"
              multiple
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="attachmentsFileInput"
            />
            <label htmlFor="attachmentsFileInput" className="add-attachments">
              <FontAwesomeIcon icon={faPaperclip} size="2x" color="#ff2121" />
              <span>Add attachments</span>
            </label>
            <div className="file-list">
              {formData.listingAttatchments &&
                formData.listingAttatchments.length > 0 &&
                formData.listingAttatchments.map((file, index) => (
                  <div key={index} className="file-item">
                    {file.name}
                  </div>
                ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="county">County</label>
            <input
              type="text"
              id="county"
              name="county"
              value={formData.county}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="residence">Residence</label>
            <input
              type="text"
              id="residence"
              name="residence"
              value={formData.residence}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={formLoading}>
          {formLoading ? "Loading..." : "Add-Listing"}
        </button>
      </form>
    </div>
  );
};

export default SellCar;