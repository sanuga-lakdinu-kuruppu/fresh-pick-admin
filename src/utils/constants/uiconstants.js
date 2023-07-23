//Nav Menu Data
import {
  AccountCircle,
  Ballot,
  Checklist,
  GridView,
  LocalShipping,
  Payment,
  Person,
  ShoppingCart,
  Summarize,
} from "@mui/icons-material";
import TeamImage from "../../assets/graphics/images/dashboard_imgs/team_dash_img.png";
import PostImage from "../../assets/graphics/images/dashboard_imgs/lettering_dash-img.png";
import OrderImage from "../../assets/graphics/images/dashboard_imgs/order_dash_img.png";
import VerifyImage from "../../assets/graphics/images/dashboard_imgs/verified_dash_img.png";
//navigation Menu Data
const navMenuData = [
  {
    id: 1,
    key: "dashboard",
    icon: <GridView className="nav-menu-icon" />,
    item: "Dashboard",
  },
  {
    id: 2,
    key: "user",
    icon: <Person className="nav-menu-icon" />,
    item: "Users",
  },
  {
    id: 3,
    key: "post",
    icon: <Ballot className="nav-menu-icon" />,
    item: "Posts",
  },
  {
    id: 4,
    key: "order",
    icon: <ShoppingCart className="nav-menu-icon" />,
    item: "Orders",
  },
  {
    id: 5,
    key: "delivery",
    icon: <LocalShipping className="nav-menu-icon" />,
    item: "Deliveries",
  },
  {
    id: 6,
    key: "verification",
    icon: <Checklist className="nav-menu-icon" />,
    item: "Verifications",
  },
  {
    id: 7,
    key: "payment",
    icon: <Payment className="nav-menu-icon" />,
    item: "Payments",
  },
  {
    id: 8,
    key: "report",
    icon: <Summarize className="nav-menu-icon" />,
    item: "Reports",
  },
];

//Gloable Search Option Data
const gloablesearchoption = [
  {
    id: 1,
    title: "Search Item 1",
  },
  {
    id: 2,
    title: "Search Item 2",
  },
  {
    id: 3,
    title: "Search Item 3",
  },
  {
    id: 4,
    title: "Search Item 4",
  },
  {
    id: 5,
    title: "Search Item 5",
  },
];

//Analytics Card Data
const dashboardAnalyticsCardData = {
  user: [
    {
      id: 1,
      width: "250px",
      backgroundColor: "#5FDDE1",
      sideImage: TeamImage,
      header: "Total Users",
      value: 806,
    },
    {
      id: 2,
      width: "250px",
      backgroundColor: "#5FDDE1",
      sideImage: TeamImage,
      header: "Total Buyers",
      value: 534,
    },
    {
      id: 3,
      width: "250px",
      backgroundColor: "#5FDDE1",
      sideImage: TeamImage,
      header: "Total Sellers",
      value: 312,
    },
    {
      id: 4,
      width: "250px",
      backgroundColor: "#5FDDE1",
      sideImage: TeamImage,
      header: "Active Users",
      value: 5,
    },
  ],
  post: [
    {
      id: 1,
      width: "250px",
      backgroundColor: "#E1A05F",
      sideImage: PostImage,
      header: "Total Posts",
      value: 846,
    },
    {
      id: 2,
      width: "250px",
      backgroundColor: "#E1A05F",
      sideImage: PostImage,
      header: "Active Posts",
      value: 534,
    },
    {
      id: 3,
      width: "250px",
      backgroundColor: "#E1A05F",
      sideImage: PostImage,
      header: "Finished Posts",
      value: 312,
    },
  ],
  order: [
    {
      id: 1,
      width: "250px",
      backgroundColor: "#E15F8F",
      sideImage: OrderImage,
      header: "Total Requested",
      value: 111,
    },
    {
      id: 2,
      width: "250px",
      backgroundColor: "#E15F8F",
      sideImage: OrderImage,
      header: "Total Accepted",
      value: 222,
    },
    {
      id: 3,
      width: "250px",
      backgroundColor: "#E15F8F",
      sideImage: OrderImage,
      header: "Total Ongoing",
      value: 333,
    },
    {
      id: 4,
      width: "250px",
      backgroundColor: "#E15F8F",
      sideImage: OrderImage,
      header: "Total Completed",
      value: 444,
    },
  ],
  verification: [
    {
      id: 1,
      width: "300px",
      backgroundColor: "#8BE15F",
      sideImage: VerifyImage,
      header: "Verification Requestes",
      value: 10,
    },
  ],
};

//Customer Order Filter Menu Data
const customerOrderFilterMenuData = [
  {
    id: 1,
    key: "requested",
    value: "Requested",
  },
  {
    id: 2,
    key: "accepted",
    value: "Accepted",
  },
  {
    id: 3,
    key: "ongoing",
    value: "Ongoing",
  },
  {
    id: 4,
    key: "completed",
    value: "Completed",
  },
];

export const NavMenuData = navMenuData;
export const GloableSearchOption = gloablesearchoption;
export const DashboardAnalyticsCardData = dashboardAnalyticsCardData;
export const CustomerOrderFilterMenuData = customerOrderFilterMenuData;

//Rides Table Rows
const ridesTableRows = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 2,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 3,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 4,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 5,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 6,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 7,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 8,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 9,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 10,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
  {
    id: 11,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
];

export const RidesTableRows = ridesTableRows;
