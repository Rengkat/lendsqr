import {
  FaUsers,
  FaUserFriends,
  FaRegHandshake,
  MdMonetizationOn,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUserCheck,
  FaUserTimes,
  FaBriefcase,
  BsBank,
  GrStorage,
  GrTransaction,
  GrServices,
  FaUserCog,
  RiFilePaper2Line,
  FaChartBar,
  FiUsers,
  GrDocumentStore,
  FaCoins,
} from "react-icons/all";
type NavLinksType = {
  name: string;
  link: string;
  icon: React.ReactNode;
};
export const navLinksCustomers: NavLinksType[] = [
  {
    name: "User",
    link: "user",
    icon: <FaUserFriends />,
  },
  {
    name: "Guarantors",
    link: "guarantors",
    icon: <FaUsers />,
  },
  {
    name: "Loan",
    link: "loan",
    icon: <MdMonetizationOn />,
  },
  {
    name: "Decision Model",
    link: "decisionModel",
    icon: <FaRegHandshake />,
  },
  {
    name: "Savings",
    link: "savings",
    icon: <FaPiggyBank />,
  },
  {
    name: "Loan Request",
    link: "loanRequest",
    icon: <FaHandHoldingUsd />,
  },
  {
    name: "Wishlist",
    link: "wishlist",
    icon: <FaUserCheck />,
  },
  {
    name: "Karma",
    link: "karma",
    icon: <FaUserTimes />,
  },
];

export const navLinksBusinesses: NavLinksType[] = [
  {
    name: "Organization",
    link: "/organization",
    icon: <FaBriefcase />,
  },
  {
    name: "Loan Products",
    link: "/loanProducts",
    icon: <FaHandHoldingUsd />,
  },
  {
    name: "Savings Products",
    link: "/savingProducts",
    icon: <BsBank />,
  },
  {
    name: "Fees and Charges",
    link: "/feesAndCharges",
    icon: <GrStorage />,
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: <GrTransaction />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <GrServices />,
  },
  {
    name: "Service Account",
    link: "/servicesAccount",
    icon: <FaUserCog />,
  },
  {
    name: "Settlement",
    link: "/settlement",
    icon: <RiFilePaper2Line />,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: <FaChartBar />,
  },
];
export const navLinksSetting: NavLinksType[] = [
  {
    name: "Preferences",
    link: "/preferences",
    icon: "",
  },
  {
    name: "Fees and Pricing",
    link: "/feesAndPricing",
    icon: "",
  },
  {
    name: "Audit Logs",
    link: "/auditLogs",
    icon: "",
  },
];
type UserInfor = {
  icon: React.ReactNode;
  heading: string;
  numbers: string;
};
export const userInfo: UserInfor[] = [
  {
    icon: <FiUsers />,
    heading: "Users",
    numbers: "230,456",
  },
  {
    icon: <FaUsers />,
    heading: "Active Users",
    numbers: "2,456",
  },
  {
    icon: <GrDocumentStore />,
    heading: "Users with Loans",
    numbers: "12,456",
  },
  {
    icon: <FaCoins />,
    heading: "Users with Savings",
    numbers: "102,456",
  },
];

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}

type MonthlyIncome = [string, string];

export interface UserType {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
  status: string;
  optionOpen: boolean;
}
export function formatDate(inputDateString: string) {
  const inputDate = new Date(inputDateString);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = inputDate.getDate();
  const month = months[inputDate.getMonth()];
  const year = inputDate.getFullYear();
  const hour = inputDate.getHours();
  const minute = inputDate.getMinutes();
  const period = hour >= 12 ? "PM" : "AM";

  const formattedDate = `${month} ${day}, ${year} ${hour % 12}:${minute}${period}`;
  return formattedDate;
}
export function cleanPhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/ x.*/, "");
}

export type UserProfile = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: string;
    bvn: string;
    address: string;
    currency: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
};
