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
import report_warranty_img from "../../assets/graphics/images/report_imgs/report_warranty_img.png";
import report_bill_img from "../../assets/graphics/images/report_imgs/report_bill_img.png";
import fast_man from "../../assets/graphics/images/report_imgs/fast.png";
import delivery_truck from "../../assets/graphics/images/report_imgs/delivery-truck.png";
import best_seller_img from "../../assets/graphics/images/report_imgs/best-sellerreport_img.png";
import seller_woman from "../../assets/graphics/images/report_imgs/womanreport_img.png";

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
      header: "Verification Requests",
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

//Users Table Rows
const userTableRowData = [
  {
    id: 1,
    icon: <AccountCircle />,
    userName: "Amali Wathsala",
    buying: "True",
    selling: "False",
    nic: 200201133099,
    doj: "2023-07-23",
  },
  {
    id: 2,
    icon: <AccountCircle />,
    userName: "Ashen Sudaraka",
    buying: "True",
    selling: "False",
    nic: 200201133099,
    doj: "2023-07-23",
  },
];

//Deliveries Table Rows
const deliveryTableRowData = [
  {
    id: 1,
    orderId: 46813297654564,
    avatar: <AccountCircle />,
    product: "Korean (Long) Radish",
    qty: "115 kg",
    distance: "42 Km",
    date: "18 June 2023",
  },
  {
    id: 2,
    orderId: 187828665488,
    avatar: <AccountCircle />,
    product: "Carrot",
    qty: "115 kg",
    distance: "42 Km",
    date: "18 June 2023",
  },
];

//Payments Data Table Rows
const paymentTableRowData = [
  {
    id: 1,
    avatar: <AccountCircle />,
    userName: "Amali Wathsala",
    nic: "123456789123",
    doj: "2023-07-25",
    status: "Not Verified",
  },

  {
    id: 2,
    avatar: <AccountCircle />,
    userName: "Ashen Sudaraka",
    nic: "234567891234",
    doj: "2023-07-25",
    status: "Not Verified",
  },
];

//Report Card Data
//Reports Table Report Card
const reportCardData = [
  {
    id: 1,
    gradientAngle: "45deg",
    fromColor: "#2ecc71",
    toColor: "#FFF",
    cardHeader: "Seller Report",
    iconImage: report_warranty_img,
    cardDescription:
      "You can generate your seller report for your selected period below",
    sideImage: best_seller_img,
  },
  {
    id: 2,
    gradientAngle: "45deg",
    fromColor: "#e74c3c",
    toColor: "#FFF",
    cardHeader: "Buyer Report",
    iconImage: report_bill_img,
    cardDescription:
      "You can generate buyer report for your selected period below.",
    sideImage: seller_woman,
  },
  {
    id: 3,
    gradientAngle: "45deg",
    fromColor: "#16a085",
    toColor: "#FFF",
    cardHeader: "Delivery Report",
    iconImage: report_warranty_img,
    cardDescription:
      "You can generate your delivery report for your selected period below",
    sideImage: fast_man,
  },
  {
    id: 4,
    gradientAngle: "45deg",
    fromColor: "#8e44ad",
    toColor: "#FFF",
    cardHeader: "Payment Report",
    iconImage: report_bill_img,
    cardDescription:
      "You can generate payment report for your selected period below.",
    sideImage: delivery_truck,
  },
  {
    id: 5,
    gradientAngle: "45deg",
    fromColor: "#f1c40f",
    toColor: "#FFF",
    cardHeader: "Income Report",
    iconImage: report_warranty_img,
    cardDescription:
      "You can generate your Income report for your selected period below",
    sideImage: delivery_truck,
  },
];

export const NavMenuData = navMenuData;
export const GloableSearchOption = gloablesearchoption;
export const DashboardAnalyticsCardData = dashboardAnalyticsCardData;
export const CustomerOrderFilterMenuData = customerOrderFilterMenuData;
export const UserTableRowData = userTableRowData;
export const DeliveryTableRowData = deliveryTableRowData;
export const PaymentTableRowData = paymentTableRowData;
export const ReportCardData = reportCardData;

//Tempory datatable- This should be need to remove after developing
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
    product: "Carrot",
    qty: "115 kg",
    status: "Requested",
    date: "18 June 2023",
  },
];

export const RidesTableRows = ridesTableRows;
