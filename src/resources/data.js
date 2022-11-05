const opportunities = [
  {
    id: 1,
    title: "Driver",
    description:
      "Drivers to deliver packages, handle transport, and other necessary functions.",
    date: "11/2/2022",
    startTime: "3:00p",
    endTime: "7:00p",
    location: "Starkville, MS",
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
    supervisor: "Janet Overman",
  },
  {
    id: 2,
    title: "Driver",
    description:
      "Drivers to deliver packages, handle transport, and other necessary functions.",
    date: "11/2/2022",
    startTime: "3:00p",
    endTime: "7:00p",
    location: "Starkville, MS",
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
    supervisor: "Janet Overman",
  },
];

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

export { opportunities, repeatDayButtons };
