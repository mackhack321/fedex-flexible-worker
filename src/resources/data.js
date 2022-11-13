const opportunities = [
  {
    id: 1,
    title: "Driver",
    description:
      "Drivers to deliver packages, handle transport, and other necessary functions.",
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
    title: "Driver",
    description:
      "Drivers to deliver packages, handle transport, and other necessary functions.",
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
    workersClaimed: ["bill"],
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
    workersClaimed: ["bill"],
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
];

const trainings = [
  { label: "Road Safety", value: "road_safety" },
  { label: "Driver's Education", value: "drivers_education" },
  { label: "Hazardous Material Transportation", value: "hazmat" },
  { label: "Emergency Procedures", value: "emergency_procedures" },
  { label: "Ramp Logistics", value: "ramp_logistics" },
  { label: "Freight Handling", value: "freight_handling" },
  { label: "Package Handling", value: "package_handling" },
];

const certifications = [
  { label: "Commercial Driver's License (CDL)", value: "cdl" },
  { label: "Freight Logistics Certificate", value: "freight_logistics" },
  { label: "Workspace Hygiene Certificate", value: "workspace_hygiene" },
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
  ],
  certifications: [
    "Class A License",
    "Commercial Driver's License (CDL) ",
    "OSHA Safety Certificate",
    "Operator Certification",
    "Certified Logistics Associate",
  ],
  previousWork: [
    { title: "Driver", date: "10/2/2022", id: 1 },
    { title: "Driver", date: "9/30/2022", id: 1 },
    { title: "Driver", date: "9/28/2022", id: 1 },
  ],
  claimedOpportunities: [3, 4],
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
