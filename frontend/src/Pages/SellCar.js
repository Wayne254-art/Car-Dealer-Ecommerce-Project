import React, { useState } from "react";
import "../Styles/sell-car.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";

const SellCar = () => {
  const [make, setMake] = useState("");
  const [models, setModels] = useState([]);
  const [listingAttachments, setLiistingAttachments] = useState([]);
  const [listingImages, setListingImages] = useState([]);
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
    listingStatus: "For Import",
    // listingImages: [],
    // listingAttatchments: [],
    firstName: "",
    lastName: "",
    contact: "",
    emailAddress: "",
    county: "",
    residence: "",
  });
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    listingImages.forEach((image) => {
      newForm.append("listingImages", image);
    });

    listingAttachments.forEach((attachments) => {
      newForm.append("listingAttachments", attachments);
    });

    newForm.append("listingTitle", formData.listingTitle);
    newForm.append("listingCondition", formData.listingCondition);
    newForm.append("listingType", formData.listingType);
    newForm.append("listingMake", formData.listingMake);
    newForm.append("listingModel", formData.listingModel);
    newForm.append("listingPrice", formData.listingPrice);
    newForm.append("modelYear", formData.modelYear);
    newForm.append("driveType", formData.driveType);
    newForm.append("transmission", formData.transmission);
    newForm.append("fuelType", formData.fuelType);
    newForm.append("engineCapacity", formData.engineCapacity);
    newForm.append("engineSize", formData.engineSize);
    newForm.append("listingCylinders", formData.listingCylinders);
    newForm.append("horsePower", formData.horsePower);
    newForm.append("listingMileage", formData.listingMileage);
    newForm.append("exteriorColor", formData.exteriorColor);
    newForm.append("interiorColor", formData.interiorColor);
    newForm.append("numberOfDoors", formData.numberOfDoors);
    newForm.append("listingVin", formData.listingVin);
    newForm.append("listingStatus", formData.listingStatus);
    newForm.append("listingImages", listingImages);
    newForm.append("listingAttatchments", listingAttachments);
    newForm.append("firstName", formData.firstName);
    newForm.append("lastName", formData.lastName);
    newForm.append("Contact", formData.contact);
    newForm.append("emailAddress", formData.emailAddress);
    newForm.append("county", formData.county);
    newForm.append("residence", formData.residence);

    try {
      setFormLoading(true);
      const response = await fetch(
        "http://localhost:5000/api/add/listing/submission",
        {
          method: "POST",
          body: newForm,
        }
      );

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
          listingStatus: "",
          listingImages: ([]),
          listingAttatchments: ([]),
          firstName: "",
          lastName: "",
          contact: "",
          emailAddress: "",
          county: "",
          residence: "",
        });
      } else {
        toast.error(response.error, "Failed to add-Listing");
        console.log(response);
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
    setFormLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevDsetFormData) => ({ ...prevDsetFormData, [name]: value }));
  };

  const handleRemoveImage = (index) => {
    setListingImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let images = Array.from(e.target.files);
    setListingImages((prevImages) => [...prevImages, ...images]);
  };
  const handleAttachmentChange = (e) => {
    e.preventDefault();

    let attachments = Array.from(e.target.files);
    setLiistingAttachments((prevImages) => [...prevImages, ...attachments]);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;

    // Remove any non-digit characters
    const onlyDigitsValue = value.replace(/\D/g, "");

    // Format the value with commas
    const formattedValue = onlyDigitsValue.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    // Update the form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  // console.log("formData", formData);
  // console.log("Attachments", listingAttachments);
  // console.log("images", listingImages);

  const updateModels = (selectedMake) => {
    setMake(selectedMake);
    // Dynamically update models based on selected make
    if (selectedMake === "toyota") {
      setModels([
        "4Runner",
        "Allex",
        "Allion",
        "Alphard",
        "Aqua",
        "Aurion",
        "Auris",
        "Avanza",
        "Avensis",
        "Axio",
        "Belta",
        "Blade",
        "Brevis",
        "Caldina",
        "Cami",
        "Camry",
        "Carib",
        "Celsior",
        "C-HR",
        "Coaster",
        "Comfort",
        "Corolla",
        "Corolla Axio",
        "Corolla Fielder",
        "Corolla Rumion",
        "Corolla RunX",
        "Corolla Spacio",
        "Corolla Verso",
        "Corona",
        "Cynos",
        "Duet",
        "Estima",
        "Fortuner",
        "Gaia",
        "Harrier",
        "Hiace",
        "Highlander",
        "Hilux",
        "Ipsum",
        "Isis",
        "Ist",
        "Land Cruiser",
        "Land Cruiser Prado",
        "Mark II",
        "Mark X",
        "Noah",
        "Passo",
        "Porte",
        "Premio",
        "Prius",
      ]);
    } else if (selectedMake === "honda") {
      setModels([
        "Accord",
        "Acty",
        "Airwave",
        "Amaze",
        "Avancier",
        "Ballade",
        "Beat",
        "BR-V",
        "Capa",
        "City",
        "Civic",
        "Clarity",
        "Concerto",
        "CR-V",
        "CR-X",
        "CR-Z",
        "Crossroad",
        "Domani",
        "Element",
        "Elysion",
        "Fit",
        "Freed",
        "HR-V",
        "Insight",
        "Inspire",
        "Integra",
        "Jade",
        "Jazz",
        "Legend",
        "Life",
        "Logo",
        "Mobilio",
        "N-Box",
        "N-One",
        "N-Van",
        "N-WGN",
        "Odyssey",
        "Orthia",
        "Passport",
        "Pilot",
        "Prelude",
        "Rafaga",
        "Ridgeline",
        "S2000",
        "Shuttle",
        "Spirior",
        "Stream",
        "Thats",
        "Today",
        "Vamos",
      ]);
    } else if (selectedMake === "audi") {
      setModels([
        "A3",
        "A4",
        "A6",
        "Q5",
        "A1",
        "A2",
        "A5",
        "A7",
        "A8",
        "Q1",
        "Q2",
        "Q3",
        "Q4",
        "Q6",
        "Q7",
        "Q8",
        "R8",
        "RS Q3",
        "RS Q8",
        "RS3",
        "RS4",
        "RS5",
        "RS6",
        "RS7",
        "S1",
        "S3",
        "S4",
        "S5",
        "S6",
        "S7",
        "S8",
        "SQ2",
        "SQ5",
        "SQ7",
        "SQ8",
        "TT",
        "TT RS",
        "TTS",
        "e-tron",
        "e-tron GT",
        "e-tron Q4",
        "e-tron S",
        "e-tron Sportback",
        "e-tron GT RS",
        "e-tron S Sportback",
        "e-tron GT RS Sportback",
        "A3 e-tron",
        "Q3 Sportback",
        "Q5 Sportback",
        "A3 Sportback",
      ]);
    } else if (selectedMake === "bmw") {
      setModels([
        "1 Series",
        "2 Series",
        "3 Series",
        "4 Series",
        "5 Series",
        "6 Series",
        "7 Series",
        "8 Series",
        "Alpina B7",
        "i3",
        "i4",
        "i8",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X6",
        "X7",
        "X8",
        "X3 M",
        "X4 M",
        "X5 M",
        "X6 M",
        "X7 M",
        "Z3",
        "Z4",
        "Z8",
        "iX",
        "iX3",
        "iX4",
        "iX5",
        "iX6",
        "1 Series GT",
        "2 Series GT",
        "3 Series GT",
        "4 Series GT",
        "5 Series GT",
        "6 Series GT",
        "7 Series GT",
        "X1 xDrive25e",
        "X2 xDrive25e",
        "X3 xDrive30e",
        "X5 xDrive45e",
      ]);
    } else if (selectedMake === "alfa-romeo") {
      setModels([
        "4C",
        "6C",
        "8C Competizione",
        "33 Stradale",
        "75",
        "90",
        "147",
        "155",
        "156",
        "159",
        "164",
        "166",
        "Alfetta",
        "Brera",
        "Giulia",
        "Giulietta",
        "GT",
        "GTA",
        "GTV",
        "Mito",
        "Montreal",
        "Spider",
        "Stelvio",
        "SZ/RZ",
        "Alfetta",
        "Arna",
        "Canguro",
        "Disco Volante",
        "Giulia Quadrifoglio",
        "Giulietta Quadrifoglio",
        "GT Junior",
        "GTV6",
        "MiTo Quadrifoglio",
        "RZ",
        "SZ",
        "Sprint",
        "Tipo 33",
        "Tipo 33 Stradale",
        "TZ",
        "TZ2",
        "147 GTA",
        "155 GTA",
        "156 GTA",
        "159 GTA",
        "164 Procar",
        "33",
        "33 SC 12",
        "75 Turbo Evoluzione",
        "90 Quadrifoglio Verde",
        "Disco Volante Concept",
      ]);
    } else if (selectedMake === "alpine") {
      setModels([
        "A106",
        "A108",
        "A110",
        "A310",
        "GTA/A610",
        "Berlinette",
        "V6 GT",
        "V6 Turbo",
        "A110-50",
        "A110-50 GT4",
        "A110 GT4",
        "A110S",
        "A310 Pack GT",
        "A310 Pack GT V6",
        "A310 Pack GT V6 Turbo",
        "A310 Pack GT V6 Turbo Gr.5",
        "A310 Pack GT V6 Turbo Gr.4",
        "A310 V6 Pack GT",
        "A610 Pack GT V6",
        "A610 Pack GT V6 Turbo",
        "A610 Turbo Le Mans",
        "Alpine Renault A110 1300",
        "Alpine Renault A110 1600",
        "Alpine Renault A110 1600S",
        "Alpine Renault A110 1600S Gr.4",
        "Alpine Renault A110 1600S Gr.5",
        "Alpine Renault A110 1800",
        "Alpine Renault A110 1800 Gr.4",
        "Alpine Renault A110 1800 Gr.5",
        "Alpine Renault A110 1800S",
        "Alpine Renault A110 1800S Gr.4",
        "Alpine Renault A110 1800S Gr.5",
        "Alpine Renault A110 1800S Gr.5 Tour de Corse",
        "Alpine Renault A110 1800S Gr.5 Tour de France",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1973",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1974",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1975",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1976",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1977",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1978",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1979",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1980",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1981",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1982",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1983",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1984",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1985",
        "Alpine Renault A110 1800S Gr.5 Tour de France 1986",
      ]);
    } else if (selectedMake === "aston-martin") {
      setModels([
        "DB1",
        "DB2",
        "DB2/4",
        "DB4",
        "DB4 GT",
        "DB4 GT Zagato",
        "DB5",
        "DB6",
        "DB7",
        "DB7 Vantage",
        "DB9",
        "DBS",
        "DBS V8",
        "DBS Superleggera",
        "Rapide",
        "Vanquish",
        "Vantage",
        "V8 Vantage",
        "V12 Vantage",
        "Virage",
        "Lagonda",
        "Valkyrie",
        "Valhalla",
        "DB10",
        "DB11",
        "DBX",
        "One-77",
        "Vantage GT12",
        "Vantage GT8",
        "Vantage GT3",
        "Vantage GT4",
        "Vulcan",
        "Cygnet",
        "Bulldog",
        "Lagonda Taraf",
        "Victor",
        "Vantage AMR",
        "DBS Superleggera Volante",
        "DBS Volante",
        "Vantage Roadster",
        "DB11 Volante",
        "DB5 Goldfinger Continuation",
        "DB4 GT Continuation",
        "DB4 Zagato Continuation",
        "DBS GT Zagato",
        "V12 Speedster",
        "CC100 Speedster",
        "Vantage AMR Pro",
        "Vantage GT4",
        "Vantage GTE",
      ]);
    } else if (selectedMake === "bentley") {
      setModels([
        "3 Litre",
        "4½ Litre",
        "4½ Litre Supercharged",
        "6½ Litre",
        "8 Litre",
        "Mark V",
        "R-Type",
        "S1",
        "S2",
        "S3",
        "Continental S1",
        "Continental S2",
        "Continental S3",
        "T-Series",
        "Turbo R",
        "Turbo RT",
        "Arnage",
        "Azure",
        "Brooklands",
        "Continental R",
        "Continental T",
        "Continental GT",
        "Continental Flying Spur",
        "Continental Supersports",
        "Mulsanne",
        "Mulsanne Turbo",
        "Mulsanne S",
        "Mulsanne EWB",
        "Eight",
        "Brooklands R Mulliner",
        "Arnage RL",
        "Arnage RL Mulliner",
        "Arnage Red Label",
        "Arnage T",
        "Arnage T-24 Mulliner",
        "Azure Mulliner",
        "Azure Final Series",
        "Brooklands Mulliner",
        "Brooklands LWB",
        "Continental GT Speed",
        "Continental GTC",
        "Continental GT3-R",
        "Continental GT Speed Convertible",
        "Continental GT3",
        "Continental GT Speed Black Edition",
        "Continental GT Convertible",
        "Continental GT V8",
        "Continental GT V8 S",
        "Continental GT V8 Convertible",
        "Bentayga",
      ]);
    } else if (selectedMake === "bugatti") {
      setModels([
        "Type 13",
        "Type 35",
        "Type 41 Royale",
        "Type 57",
        "Type 57SC Atlantic",
        "Type 101",
        "Type 251",
        "EB110",
        "Veyron",
        "Veyron Super Sport",
        "Chiron",
        "Chiron Sport",
        "Divo",
        "Centodieci",
        "La Voiture Noire",
        "Galibier",
        "Vision Gran Turismo",
        "Type 18",
        "Type 55",
        "Type 57G Tank",
        "Type 252",
        "Type 50",
        "Type 46",
        "Type 22",
        "Type 44",
        "Type 46S",
        "Type 50T",
        "Type 51",
        "Type 56",
        "Type 64",
        "Type 68",
        "Type 73C",
        "Type 251",
        "EB118",
        "EB218",
        "Veyron Grand Sport",
        "Veyron Vitesse",
        "Veyron Grand Sport Vitesse",
        "Chiron Pur Sport",
        "Chiron Super Sport 300+",
        "Bolide",
        "Type 101C",
        "Type 252",
        "Type 252 Grand Sport",
        "Type 252 Convertible",
        "Type 53",
        "Type 57A",
        "Type 57S",
        "Type 57SC",
        "Type 57SC Atalante",
      ]);
    } else if (selectedMake === "ferrari") {
      setModels([
        "125 S",
        "166 Inter",
        "212 Inter",
        "250 Testa Rossa",
        "250 GTO",
        "275 GTB",
        "288 GTO",
        "308 GTB/GTS",
        "328 GTB/GTS",
        "330 P4",
        "348",
        "360 Modena",
        "365 GTB/4 Daytona",
        "375 MM",
        "400 Superamerica",
        "410 Superamerica",
        "456 GT",
        "458 Italia",
        "488 GTB",
        "512 BB",
        "550 Maranello",
        "575M Maranello",
        "599 GTB Fiorano",
        "612 Scaglietti",
        "California",
        "Dino 246 GT",
        "Enzo Ferrari",
        "F12 Berlinetta",
        "F40",
        "F430",
        "F50",
        "FF",
        "LaFerrari",
        "Mondial",
        "Portofino",
        "Roma",
        "SF90 Stradale",
        "Superamerica 45",
        "Superamerica 60",
        "Testarossa",
        "488 Pista",
        "Monza SP1",
        "Monza SP2",
        "SF21",
        "Purosangue",
        "296 GTB",
        "Daytona SP3",
        "Omologata",
        "SP38",
        "SF90 Spider",
      ]);
    } else if (selectedMake === "fiat") {
      setModels([
        "500",
        "Panda",
        "Punto",
        "Tipo",
        "124 Spider",
        "126",
        "127",
        "128",
        "131",
        "132",
        "133",
        "147",
        "500L",
        "500X",
        "600",
        "850",
        "1100",
        "1200",
        "1300",
        "1500",
        "2300",
        "500 Abarth",
        "Bravo",
        "Brava",
        "Coupe",
        "Croma",
        "Dino",
        "Doblo",
        "Fiorino",
        "Freemont",
        "Idea",
        "Marea",
        "Multipla",
        "Palio",
        "Qubo",
        "Regata",
        "Ritmo",
        "Sedici",
        "Seicento",
        "Stilo",
        "Strada",
        "Tempra",
        "Tipo",
        "Ulysse",
        "Uno",
        "X1/9",
        "124",
        "125",
        "131",
        "132",
      ]);
    } else if (selectedMake === "lamborghini") {
      setModels([
        "350 GT",
        "400 GT",
        "Miura",
        "Espada",
        "Islero",
        "Jarama",
        "Urraco",
        "Countach",
        "Silhouette",
        "Jalpa",
        "LM002",
        "Diablo",
        "Murciélago",
        "Gallardo",
        "Reventón",
        "Aventador",
        "Huracán",
        "Urus",
        "Sesto Elemento",
        "Veneno",
        "Centenario",
        "Sián",
        "Terzo Millennio",
        "Essenza SCV12",
        "SC20",
        "Egoista",
        "Asterion",
        "Calà",
        "Miura Concept",
        "Estoque",
        "Cabrera",
        "Athon",
        "Bravo",
        "Cala",
        "Portofino",
        "Raptor",
        "Concept S",
        "Murciélago R-GT",
        "Murciélago LP640",
        "Murciélago Roadster",
        "Gallardo LP560-4",
        "Gallardo Spyder",
        "Gallardo LP570-4 Superleggera",
        "Gallardo LP570-4 Spyder Performante",
        "Gallardo LP550-2 Valentino Balboni",
        "Gallardo LP550-2 Spyder",
        "Gallardo LP570-4 Squadra Corse",
        "Huracán LP610-4",
        "Huracán LP620-2 Super Trofeo",
        "Huracán LP580-2",
      ]);
    } else if (selectedMake === "lancia") {
      setModels([
        "Appia",
        "Ardea",
        "Astura",
        "Aurelia",
        "Beta",
        "Dedra",
        "Delta",
        "Dilambda",
        "Flaminia",
        "Flavia",
        "Fulvia",
        "Gamma",
        "Hyena",
        "Kappa",
        "Lambda",
        "Lybra",
        "Montecarlo",
        "Musa",
        "Phedra",
        "Prisma",
        "Stratos",
        "Thema",
        "Thesis",
        "Trevi",
        "Ypsilon",
        "Zeta",
        "037",
        "2000",
        "2000 Coupe",
        "Aprilia",
        "Artena",
        "Augusta",
        "Beta Montecarlo",
        "D50",
        "Delta HF Integrale",
        "Delta S4",
        "ECV",
        "Epsilon",
        "Eta",
        "Fulvia Coupe",
        "Fulvia HF",
        "Gamma Coupe",
        "Gamma HPE",
        "Lambda Series 7",
        "LC1",
        "LC2",
        "Lybra SW",
        "Rally 037",
        "Thema 8.32",
      ]);
    } else if (selectedMake === "land-rover") {
      setModels([
        "Defender 110s",
        "Defender 110s dynamic",
        "Defender 130s",
        "Defender 130s dynamic",
        "Discovery",
        "Discovery Sport",
        "Range Rover",
        "Range Rover Evoque",
        "Range Rover Sport",
        "Range Rover Velar",
        "Range Rover Classic",
        "Range Rover P38A",
        "Range Rover L322",
        "Range Rover L405",
        "Range Rover Sport L494",
        "Range Rover Sport L550",
        "Freelander",
        "Freelander 2",
        "LR2",
        "LR3",
        "LR4",
        "Series I",
        "Series II",
        "Series III",
        "101 Forward Control",
        "Lightweight",
        "Range Rover Classic 2-Door",
        "Range Rover Classic 4-Door",
        "Range Rover Classic Vogue SE",
        "Range Rover Classic County",
        "Range Rover Classic County LWB",
        "Range Rover Classic County SWB",
        "Range Rover Classic Autobiography",
        "Series IIA",
        "Series IIB Forward Control",
        "Series IIB",
        'Series III 88"',
        'Series III 109"',
        'Series III 109" Station Wagon',
        'Series III 109" Forward Control',
        "Series III Lightweight",
        "Series III Military",
        "Series III Fire Truck",
        "Series III Police",
        "Series III Ambulance",
        "Series III FFR (Fitted For Radio)",
        "Series III Mortar Carrier",
        "Series III LWB (Long Wheelbase)",
        "Series III SWB (Short Wheelbase)",
        "Series III HCPU (High Capacity Pick Up)",
        "Series III GS (General Service)",
        "Series III SIII (Stage 3)",
        'Series III SIII 88"',
      ]);
    } else if (selectedMake === "maserati") {
      setModels([
        "Quattroporte",
        "Ghibli",
        "Levante",
        "GranTurismo",
        "GranCabrio",
        "Bora",
        "Merak",
        "Khamsin",
        "Biturbo",
        "Shamal",
        "Spyder",
        "Coupe",
        "3200 GT",
        "4200 GT",
        "GranSport",
        "GranCabrio",
        "MC12",
        "3500 GT",
        "Mistral",
        "Sebring",
        "Mexico",
        "Indy",
        "Kyalami",
        "MC20",
        "Birdcage 75th",
        "A6",
        "A6G",
        "250F",
        "5000 GT",
        "350S",
        "200S",
        "300S",
        "Tipo 61",
        "Tipo 63",
        "Tipo 65",
        "Tipo 151",
        "Tipo 154",
        "Tipo 152",
        "MC12 Corsa",
        "MC12 GT1",
        "MC12 Stradale",
        "Quattroporte GTS",
        "Ghibli S Q4",
        "Levante Trofeo",
        "GranTurismo MC Stradale",
        "GranCabrio Sport",
        "Alfieri",
        "MC12 Versione Corsa",
        "8CTF",
        "250F T2",
      ]);
    } else if (selectedMake === "mclaren") {
      setModels([
        "F1",
        "P1",
        "Senna",
        "Speedtail",
        "570S",
        "570GT",
        "600LT",
        "620R",
        "650S",
        "675LT",
        "720S",
        "GT",
        "MP4-12C",
        "12C Spider",
        "540C",
        "650S Spider",
        "570S Spider",
        "600LT Spider",
        "Elva",
        "Artura",
        "M6GT",
        "M6A",
        "M8D",
        "M23",
        "MP4/4",
        "MP4/5",
        "MP4/6",
        "MP4/7",
        "MP4/8",
        "MP4/9",
        "MP4/10",
        "MP4/11",
        "MP4/12",
        "MP4/13",
        "MP4/14",
        "MP4/15",
        "MP4-16",
        "MP4-17",
        "MP4-18",
        "MP4-19",
        "MP4-20",
        "MP4-21",
        "MP4-22",
        "MP4-23",
        "MP4-24",
        "MP4-25",
        "MP4-26",
        "MP4-27",
        "MP4-28",
        "MP4-29",
      ]);
    } else if (selectedMake === "mercedes-benz") {
      setModels([
        "A-Class",
        "B-Class",
        "C-Class",
        "CLA-Class",
        "CLS-Class",
        "E-Class",
        "G-Class",
        "GLA-Class",
        "GLB-Class",
        "GLC-Class",
        "GLE-Class",
        "GLS-Class",
        "S-Class",
        "SL-Class",
        "SLC-Class",
        "V-Class",
        "AMG GT",
        "Maybach S-Class",
        "EQC",
        "EQA",
        "EQB",
        "EQS",
        "A-Class Sedan",
        "A-Class Hatchback",
        "A-Class Limousine",
        "B-Class MPV",
        "C-Class Sedan",
        "C-Class Coupe",
        "C-Class Cabriolet",
        "CLA-Class Coupe",
        "CLA-Class Shooting Brake",
        "CLS-Class Coupe",
        "CLS-Class Shooting Brake",
        "E-Class Sedan",
        "E-Class Coupe",
        "E-Class Cabriolet",
        "E-Class Wagon",
        "G-Class SUV",
        "GLA-Class SUV",
        "GLB-Class SUV",
        "GLC-Class SUV",
        "GLC-Class Coupe",
        "GLE-Class SUV",
        "GLE-Class Coupe",
        "GLS-Class SUV",
        "S-Class Sedan",
        "S-Class Coupe",
        "S-Class Cabriolet",
        "SL-Class Roadster",
        "V-Class MPV",
      ]);
    } else if (selectedMake === "mini") {
      setModels([
        "Hatch",
        "Convertible",
        "Clubman",
        "Countryman",
        "Coupe",
        "Roadster",
        "Paceman",
        "Hardtop 2 Door",
        "Hardtop 4 Door",
        "John Cooper Works GP",
        "One",
        "Cooper",
        "Cooper S",
        "Cooper SE Electric",
        "Cooper SD",
        "Cooper D",
        "Cooper Clubman",
        "Cooper S Clubman",
        "Cooper D Clubman",
        "Cooper S E Countryman All4",
        "Cooper D Countryman",
        "Cooper S Countryman",
        "Cooper D Convertible",
        "Cooper S Convertible",
        "Cooper SD Convertible",
        "Cooper SE Countryman All4",
        "Cooper D Countryman All4",
        "Cooper S Countryman All4",
        "Cooper S E Countryman ALL4 PHEV",
        "Cooper D Countryman ALL4",
        "Cooper S Countryman ALL4",
        "Cooper SE Electric Countryman ALL4",
        "Cooper Classic",
        "Cooper S Classic",
        "Cooper D Classic",
        "Cooper SE Classic",
        "Cooper Exclusive",
        "Cooper S Exclusive",
        "Cooper D Exclusive",
        "Cooper SE Exclusive",
        "Electric",
      ]);
    } else if (selectedMake === "opel") {
      setModels([
        "Corsa",
        "Astra",
        "Insignia",
        "Crossland",
        "Grandland",
        "Mokka",
        "Adam",
        "Zafira",
        "Meriva",
        "Karl",
        "Combo",
        "Antara",
        "Cascada",
        "Vivaro",
        "Movano",
        "GT",
        "Calibra",
        "Vectra",
        "Omega",
        "Ampera",
      ]);
    } else if (selectedMake === "peugeot") {
      setModels([
        "106",
        "107",
        "108",
        "206",
        "207",
        "208",
        "306",
        "307",
        "308",
        "309",
        "406",
        "407",
        "408",
        "508",
        "605",
        "607",
        "1007",
        "2008",
        "3008",
        "4008",
        "5008",
        "806",
        "807",
        "RCZ",
        "Bipper",
        "Partner",
        "Expert",
        "Boxer",
        "iOn",
        "Rifter",
        "Traveller",
        "J5",
        "J7",
        "J9",
        "HX1",
        "EX1",
        "Asphalte",
        "Oxia",
        "205 T16",
        "Quasar",
        "Proxima",
        "Moonster",
        "Moovie",
        "20Cup",
        "Vroomster",
        "907",
        "908 RC",
        "SR1",
        "SR2",
        "e-Legend",
      ]);
    } else if (selectedMake === "porsche") {
      setModels([
        "911",
        "912",
        "914",
        "918 Spyder",
        "924",
        "928",
        "944",
        "959",
        "968",
        "Boxster",
        "Cayman",
        "Cayenne",
        "Macan",
        "Panamera",
        "Taycan",
        "Carrera GT",
        "356",
        "550 Spyder",
        "718 Cayman",
        "718 Boxster",
        "718 Spyder",
        "904 Carrera GTS",
        "906 Carrera 6",
        "907",
        "908",
        "910",
        "911 GT1",
        "912E",
        "914-6",
        "917",
        "924 Carrera GT",
        "930 Turbo",
        "944 Turbo",
        "968 Turbo S",
        "959S",
        "964",
        "993",
        "996",
        "997",
        "991",
        "992",
        "718",
        "804",
        "906",
        "907",
        "908",
        "917",
        "934",
        "935",
        "936",
      ]);
    } else if (selectedMake === "renault") {
      setModels([
        "Lautecia",
        "Twingo",
        "Clio",
        "Captur",
        "Zoe",
        "Megane",
        "Kadjar",
        "Scenic",
        "Talisman",
        "Espace",
        "Kangoo",
        "Trafic",
        "Master",
        "Fluence",
        "Laguna",
        "Koleos",
        "Latitude",
        "Wind",
        "Vel Satis",
        "Avantime",
        "Modus",
        "Pulse",
        "Scala",
        "Duster",
        "Symbol",
        "Pulse",
        "Kwid",
        "Logan",
        "Sandero",
        "Lodgy",
        "Triber",
        "Arkana",
        "Alaskan",
        "Z.E. Concept",
        "City K-ZE",
        "Megane RS",
        "Twizy",
        "Twingo Z.E.",
        "ZOE Z.E.",
        "Kangoo Z.E.",
        "Master Z.E.",
        "Zoe E-Sport Concept",
        "Talisman Estate",
        "Megane Estate",
        "Megane Sedan",
        "Espace F1",
        "Sport Spider",
        "Clio V6",
        "Clio RS16",
        "Clio Williams",
      ]);
    } else if (selectedMake === "mitsubishi") {
      setModels([
        "Mirage",
        "Attrage",
        "Lancer",
        "Eclipse Cross",
        "ASX",
        "Outlander",
        "Pajero",
        "Pajero Sport",
        "Triton",
        "L200",
        "Montero",
        "Xpander",
        "RVR",
        "Delica",
        "Galant"
      ]);
    } else if (selectedMake === "mazda") {
      setModels([
        "2",
        "3",
        "6",
        " CX-3",
        " CX-30",
        " CX-5",
        " CX-50",
        " CX-60",
        " CX-9",
        " CX-90",
        "MX-5 Miata",
        "MX-30",
        " RX-7",
        " RX-8",
        "5",
        " MPV",
        " Tribute",
        " B-Series",
        " BT-50",
        " Verisa",
        " Atenza"
      ]);
    } else if (selectedMake === "subaru") {
      setModels([
        "Impreza",
        "WRX",
        "WRX STI",
        "Legacy",
        "Outback",
        "Forester",
        "Forester XT",
        "Crosstrek",
        "Ascent",
        "BRZ",
        "Levorg",
        "Baja",
        "Tribeca",
        "SVX",
        "Alcyone"
      ]);

    } else if (selectedMake === "ford") {
      setModels([
        "Fiesta",
        "Focus",
        "Fusion",
        "Mustang",
        "EcoSport",
        "Escape",
        "Edge",
        "Explorer",
        "Expedition",
        "Bronco",
        "Bronco Sport",
        "Ranger",
        "F-150",
        "F-250",
        "F-350",
        "Transit Connect",
        "Transit",
        "Maverick",
        "GT",
        "Taurus",
        "C-MAX",
        "Flex"
      ]);
    }else if (selectedMake === "rolls-royce") {
      setModels([
        "Silver Ghost",
        "Phantom I",
        "Phantom II",
        "Phantom III",
        "Phantom IV",
        "Phantom V",
        "Phantom VI",
        "Silver Wraith",
        "Silver Dawn",
        "Silver Cloud",
        "Silver Shadow",
        "Silver Spirit",
        "Silver Spur",
        "Corniche",
        "Camargue",
        "Silver Seraph",
        "Park Ward",
        "Mulliner Park Ward",
        "Phantom Drophead Coupe",
        "Phantom Coupe",
        "Ghost",
        "Wraith",
        "Dawn",
        "Cullinan",
        "Sweptail",
        "Phantom VIII",
        "Ghost Extended Wheelbase",
        "Phantom EWB",
        "Black Badge Ghost",
        "Black Badge Wraith",
        "Black Badge Dawn",
        "Black Badge Cullinan",
        "Ghost Zenith Collection",
        "Wraith Luminary Collection",
        "Dawn Aero Cowling",
        "Silver Cloud II",
        "Silver Cloud III",
        "Silver Cloud IV",
        "Silver Shadow II",
        "Silver Spirit II",
        "Silver Spur II",
        "Silver Seraph Park Ward",
        "Phantom EWB Limousine",
        "Silver Cloud LWB",
        "Corniche Convertible",
        "Camargue Coupe",
        "Silver Spur LWB",
        "Silver Seraph Mulliner",
        "Phantom III Limousine",
        "Phantom V Landaulet",
      ]);
    } else if (selectedMake === "vauxhall") {
      setModels([
        "Corsa",
        "Astra",
        "Insignia",
        "Crossland X",
        "Grandland X",
        "Mokka",
        "Adam",
        "Vectra",
        "Zafira",
        "Combo Life",
      ]);
    } else if (selectedMake === "volkswagen") {
      setModels([
        "Golf",
        "Polo",
        "Passat",
        "Jetta",
        "Tiguan",
        "Tiguan R-Line",
        "Tiguan 2.0-TDI",
        "Touareg",
        "Arteon",
        "Up!",
        "Beetle",
        "T-Roc",
        "Amarok",
        "Scirocco",
        "Atlas",
        "ID.3",
        "ID.4",
        "e-Golf",
        "e-Up!",
        "Phaeton",
        "Sharan",
        "Touran",
        "Caddy",
        "Transporter",
        "Crafter",
        "Fox",
        "Corrado",
        "Lupo",
        "Eos",
        "XL1",
        "Karmann Ghia",
        "Golf GTI",
        "Golf R",
        "Golf Variant",
        "Passat Variant",
        "Tiguan Allspace",
        "Touareg R",
        "Touareg V8",
        "Touareg R50",
        "Touareg Hybrid",
        "Up! GTI",
        "Golf Cabriolet",
        "Beetle Dune",
        "ID.Buzz",
        "ID.Crozz",
        "ID.Vizzion",
        "ID.Space Vizzion",
        "ID.Buggy",
        "ID.Roomzz",
        "ID.Life",
        "ID.Buzz Cargo",
      ]);
    } else {
      setModels([]); // If no make is selected, clear models
    }
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
            required
            style={{ textTransform: "uppercase" }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Condition *</label>
          <select
            id="condition"
            name="listingCondition"
            required
            value={formData.listingCondition}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>Select Listing Condition</option>
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="listingStatus">Status*</label>
          <select
            id="listingStatus"
            name="listingStatus"
            required
            value={formData.listingStatus}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>Select Listing Status</option>
            <option value="new">For Import</option>
            <option value="used">Foreign Used</option>
            <option value="used">Kenyan Used</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="listingType"
            required
            value={formData.listingType}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>Select Listing Type</option>
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
            required
            value={formData.listingMake}
            onChange={(e) => {
              handleChange(e);
              updateModels(e.target.value);
            }}
          >
            <option value="" disabled selected hidden>Select Make </option>
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
            required
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
              <option value="" disabled selected hidden>Select Make First</option>
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
            onChange={handlePriceChange}
            required
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
            placeholder="Model Year"
            value={formData.modelYear}
            onChange={handleChange}
            required
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
            required
          >
            <option value="" disabled selected hidden>Select Drive-Type</option>
            <option value="awd/4wd">AWD/4WD</option>
            <option value="awd/4wd">2WD</option>
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
            required
          >
            <option value="" disabled selected hidden>Transmission</option>
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
            required
          >
            <option value="" disabled selected hidden>Select Fuel-Type</option>
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
            required
          >
            <option value="" disabled selected hidden>Select Engine-Capacity</option>
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
            <option value="6200cc">6200cc</option>
            <option value="6500cc">6500cc</option>
            <option value="7000cc">7000cc</option>
            <option value="7200cc">7200cc</option>
            <option value="7400cc">7400cc</option>
            <option value="7500cc">7500cc</option>
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
            required
          >
            <option value="" disabled selected hidden>Select Engine-Size</option>
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
            required
          >
            <option value="" disabled selected hidden>Select number of Cylinders</option>
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
            required
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
            required
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
            placeholder="Exterior-Color"
            required
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
            placeholder="Interior-Color"
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
            required
            value={formData.numberOfDoors}
            onChange={handleChange}
          >
            <option value="" disabled selected hidden>Select number of doors</option>
            <option value={2}>2-Door</option>
            <option value={3}>3-Door</option>
            <option value={4}>4-Door</option>
            <option value={5}>5-Door</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vin">VIN</label>
          <input
            type="text"
            id="vin"
            name="listingVin"
            placeholder="Enter Listing-Vin"
            value={formData.listingVin}
            onChange={handleChange}
          />
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
            <div className="gallery-body">
              <input
                type="file"
                name="listingImages"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
                required
                id="galleryFileInput"
              />
              <label htmlFor="galleryFileInput" className="add-images">
                <span>
                  <FontAwesomeIcon icon={faImages} size="2x" color="#ff2121" />
                  Add images
                </span>
              </label>
              <div className="image-list">
                {Array.isArray(listingImages) &&
                  listingImages.length > 0 &&
                  listingImages.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`ListingImage ${index + 1}`}
                      />
                      <div className="overlay" onClick={() => handleRemoveImage(index)}>
                        <span className="close">&times;</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="attachments-section">
            <input
              type="file"
              name="listingAttachments"
              required
              multiple
              accept=".pdf, .doc, .docx"
              onChange={handleAttachmentChange}
              style={{ display: "none" }}
              id="attachmentsFileInput"
            />
            <label htmlFor="attachmentsFileInput" className="add-attachments">
              <FontAwesomeIcon icon={faPaperclip} size="2x" color="#ff2121" />
              <span>Add attachments</span>
            </label>
            <div className="file-list">
              {listingAttachments &&
                listingAttachments.length > 0 &&
                listingAttachments.map((file, index) => (
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
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter Contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="Enter Valid Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="county">County</label>
            <input
              type="text"
              id="county"
              name="county"
              placeholder="Enter County of Residence"
              value={formData.county}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="residence">Residence</label>
            <input
              type="text"
              id="residence"
              name="residence"
              placeholder="Enter place of residence"
              value={formData.residence}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={formLoading}>
          {formLoading ? "Loading..." : "Add-Listing"}
        </button>
      </form>
      < ToastContainer/>
    </div>
  );
};

export default SellCar;
