const opportunities = [
  {
    id: 1,
    title: "Driver",
    description: "Drivers to handle packages and freight transport.",
    date: "11/2/2022",
    startTime: "3:00p",
    endTime: "7:00p",
    location: "Tupelo, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: ["Sunday", "Wednesday"],
    numWorkersNeeded: 15,
    workersClaimed: [],
    requiredTraining: [
      "Road Safety",
      "Driver's Education",
      "Hazardous Material Transportation",
      "Emergency Procedures",
    ],
    requiredCertifications: [
      "Commercial Driver's License (CDL)",
      "Freight Logistics Certificate",
    ],
    supervisor: "Jacques Baker",
  },
  {
    id: 2,
    title: "Mystery Opportunity",
    description: "Your duties will be explained upon arrival to the worksite.",
    date: "11/18/2022",
    startTime: "12:00p",
    endTime: "5:00p",
    location: "Tupelo, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: ["Sunday"],
    numWorkersNeeded: 10,
    workersClaimed: [],
    requiredTraining: [
      "Road Safety",
      "Driver's Education",
      "Hazardous Material Transportation",
      "Emergency Procedures",
    ],
    requiredCertifications: [
      "Commercial Driver's License (CDL)",
      "Freight Logistics Certificate",
    ],
    supervisor: "Alice Shoemaker",
  },
  {
    id: 3,
    title: "Ramp Worker",
    description: "Assists with ramp duties.",
    date: "12/20/2022",
    startTime: "12:00p",
    endTime: "7:00p",
    location: "Tupelo, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: ["Sunday", "Wednesday"],
    numWorkersNeeded: 15,
    workersClaimed: ["Bill Snyder", "Mary Sue", "Paul Jones"],
    requiredTraining: ["Emergency Procedures"],
    requiredCertifications: ["Freight Logistics Certificate"],
    supervisor: "Janet Overman",
  },
  {
    id: 4,
    title: "Cleanup",
    description: "Provides assistance cleaning up warehouse.",
    date: "12/30/2022",
    startTime: "6:00p",
    endTime: "10:00p",
    location: "Tupelo, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: ["Sunday", "Wednesday"],
    numWorkersNeeded: 15,
    workersClaimed: ["Bill Snyder"],
    requiredTraining: [
      "Hazardous Material Transportation",
      "Emergency Procedures",
    ],
    requiredCertifications: ["Workspace Hygiene Certificate"],
    supervisor: "Janet Overman",
  },
  {
    id: 5,
    title: "Package Handler",
    description: "Handles packages.",
    date: "1/14/2023",
    startTime: "6:00a",
    endTime: "5:00p",
    location: "Jackson, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 1,
    workersClaimed: [],
    requiredTraining: ["Emergency Procedures", "Package Handling"],
    requiredCertifications: ["Freight Logistics Certificate"],
    supervisor: "Bryan Lee",
  },
  {
    id: 6,
    title: "Floog Collector",
    description: "Collects stray floog around the warehouse.",
    date: "1/20/2023",
    startTime: "6:00a",
    endTime: "5:00p",
    location: "Jackson, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 29,
    workersClaimed: [],
    requiredTraining: ["Floog Spotting"],
    requiredCertifications: ["Floog Handler Certificate"],
    supervisor: "Bryan Lee",
  },
  {
    id: 7,
    title: "Fleet Maintenance",
    description: "Assist the maintenance team.",
    date: "1/20/2023",
    startTime: "12:00p",
    endTime: "8:00p",
    location: "Jackson, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 5,
    workersClaimed: [],
    requiredTraining: ["Fleet Maintenance", "Road Safety"],
    requiredCertifications: ["OSHA Safety Certificate"],
    supervisor: "Bryan Lee",
  },
  {
    id: 8,
    title: "Customer Service Agent",
    description: "Answer incoming calls and answer customer questions and concerns.",
    date: "1/20/2023",
    startTime: "4:00p",
    endTime: "11:00p",
    location: "Starkville, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 4,
    workersClaimed: [],
    requiredTraining: ["Customer Service" , "Product Experience"],
    requiredCertifications: ["CCSP Certification"],
    supervisor: "Bryan Lee",
  },
  {
    id: 9,
    title: "Customs intake",
    description: "Work with customs officials on the intake of packages through borders.",
    date: "1/20/2023",
    startTime: "3:00p",
    endTime: "8:00p",
    location: "Laredo, TX",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 12,
    workersClaimed: [],
    requiredTraining: ["Customs Handling", "Package Handling"],
    requiredCertifications: ["CBP Officer Certificate", "Freight Logistics Certificate"],
    supervisor: "Bryan Lee",
  },
  {
    id: 10,
    title: "Package Loader",
    description: "Work in the warehouse loading packages weighing up to 50 lbs.",
    date: "1/20/2023",
    startTime: "2:00p",
    endTime: "11:00p",
    location: "Tupelo, MS",
    mapUrl: "https://goo.gl/maps/ae1o1E1TkiU6CYB29",
    repeat: [],
    numWorkersNeeded: 2,
    workersClaimed: [],
    requiredTraining: ["Package Handling", "Freight Handling"],
    requiredCertifications: ["OSHA Safety Certificate", "Freight Logistics Certificate"],
    supervisor: "Bryan Lee",
  },
];

const trainings = [
  { label: "Road Safety", value: "road_safety" },
  { label: "Driver's Education", value: "drivers_education" },
  { label: "Hazardous Material Transportation", value: "hazmat" },
  { label: "Emergency Procedures", value: "emergency_procedures" },
  { label: "Ramp Logistics", value: "ramp_logistics" },
  { label: "Freight Handling", value: "freight_handling" },
  { label: "Package Handling", value: "package_handling" },
  { label: "Floog Spotting", value: "floog_spotting" },
  { label: "Fleet Maintenance", value: "fleet_maintenance" },
  { label: "Customer Service", value: "customer_service" },
  { label: "Product Experience", value: "product_experience" },
  { label: "Customs Handling", value: "customs_handling" },
];

const certifications = [
  { label: "Commercial Driver's License (CDL)", value: "cdl" },
  { label: "Freight Logistics Certificate", value: "freight_logistics" },
  { label: "Workspace Hygiene Certificate", value: "workspace_hygiene" },
  { label: "Floog Handler Certificate", value: "floog_handler" },
  { label: "OSHA Safety Certificate", value: "osha_safety" },
  { label: "CBP Officer Certificate", value: "cbp_officer" },
  { label: "CCSP Certification", value: "ccsp_certification" },
];

const employeeMessages = [
  {
    id: 1,
    from: "Sue Allen",
    date: "10/19/2022",
    teaser: "ALERT: Claimed opportunity details updated",
  },
  {
    id: 2,
    from: "Raj Subramaniam",
    date: "10/10/2022",
    teaser: "Big Bill, my man. Got another truck for you to drive.",
  },
  {
    id: 3,
    from: "Bob Snyder",
    date: "10/10/2022",
    teaser: "Brother Bill, I have a load of packages for you in the warehouse.",
  },
];

const managerMessages = [];

const employeeProfile = {
  firstname: "Bill",
  lastname: "Snyder",
  dob: "4/1/1960",
  email: "bill@fedex.com",
  phone: "(524) 555-3421",
  location: "Tupelo, MS",
  punctuality: "100%",
  attendance: "97.5%",
  completedTraining: [
    "Road Safety",
    "Driver's Education",
    "Operations",
    "Fleet Maintenance",
    "Freight Handling",
    "Hazardous Material Transportation",
    "Emergency Procedures",
    "Customer Service",
    "Product Experience",
    "Customs Handling",

  ],
  certifications: [
    "Freight Logistics Certificate",
    "Commercial Driver's License (CDL)",
    "OSHA Safety Certificate",
    "Operator Certification",
    "Certified Logistics Associate",
    "Workspace Hygiene Certificate",
    "CBP Officer Certificate",
    "CCSP Certification",

  ],
  previousWork: [
    { title: "Driver", date: "10/2/2022", id: 1 },
    { title: "Driver", date: "9/30/2022", id: 1 },
    { title: "Driver", date: "9/28/2022", id: 1 },
  ],
  claimedOpportunities: [3, 4, 8],
};

const repeatDayButtons = [
  {
    label: "S",
    value: "Sunday",
  },
  {
    label: "M",
    value: "Monday",
  },
  {
    label: "T",
    value: "Tuesday",
  },
  {
    label: "W",
    value: "Wednesday",
  },
  {
    label: "R",
    value: "Thursday",
  },
  {
    label: "F",
    value: "Friday",
  },
  {
    label: "S",
    value: "Saturday",
  },
];

export {
  opportunities,
  repeatDayButtons,
  trainings,
  certifications,
  employeeMessages,
  managerMessages,
  employeeProfile,
};
