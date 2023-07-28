import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/searchbox/searchbox";
import BikeRideImg from "../../assets/graphics/images/payments_imgs/delivery-bike-rides-bicycle-img.png";
import trolley_img from "../../assets/graphics/images/payments_imgs/trolley_full_details.png";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SearchField from "../../components/searchfield/searchfield";
import { PaymentTableRowData as paymentTableRowData } from "../../utils/constants/uiconstants";

function Payments() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("seller");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //Tables
  //set the selected Row
  const [selectedRow, setSelectedRow] = useState(0);
  const handleSelectRow = (row, rowIndex) => {
    setSelectedRow(rowIndex);
  };

  //Search Field text On change
  const [searchFieldText, setSearchFieldText] = useState("");
  const searchFieldOnTextChange = (newValue) => {
    setSearchFieldText(newValue);
  };

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">
            Where Farming Meets Retails
          </div>
          <div className="d-block secondary-color sub-header fw-normal">
            On - time, every time.
          </div>
        </div>

        {/* search bar and the icon set*/}
        <div className="d-flex col-6 my-1 justify-content-center align-self-center">
          <SearchBox className="w-auto" />
        </div>
        <div className="d-inline-block col-auto my-1">
          <IconButton
            onClick={() =>
              handleNavChange({
                id: 9,
                key: "calendar",
                icon: <CalendarMonth />,
                item: "Calendar",
              })
            }
          >
            <CalendarMonth />
          </IconButton>
          <IconButton
            onClick={() =>
              handleNavChange({
                id: 10,
                key: "notification",
                icon: <NotificationAdd />,
                item: "Notification",
              })
            }
          >
            <NotificationAdd />
          </IconButton>
        </div>
      </div>

      {/* Content */}
      <div className="row">
        {/* User Tab Sections */}
        <div className="col-8">
          {/* User Heading*/}
          <div className="row bg-light mb-3 ms-4 py-2 rounded">
            <div className="h4 secondary-color fw-bolder text-black">
              Money Distribution
              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={BikeRideImg}
                  alt="Tempory"
                />
              </div>
            </div>

            {/* All Users Tab Section */}
            <div>
              <TabContext
                value={selectedTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <TabList onChange={handleChange}>
                  <Tab value="seller" label="Seller"></Tab>
                  <Tab value="company" label="Transportation Company" />
                  <Tab value="membership" label="Membership" />
                </TabList>

                {/* Search Field */}
                <div className="row mt-3">
                  <div className="col"></div>
                  <div className="col-auto me-4 float-end">
                    <SearchField onChange={searchFieldOnTextChange} />
                  </div>
                </div>

                {/* Customer Table */}
                <TabPanel value="seller">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 300,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="right">User Name</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{}}>
                        {paymentTableRowData.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.userName}</TableCell>
                            <TableCell align="right">{row.nic}</TableCell>
                            <TableCell align="right">{row.doj}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Transport Table */}
                <TabPanel value="company">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 360,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="right">User Name</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {paymentTableRowData.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.userName}</TableCell>
                            <TableCell align="right">{row.nic}</TableCell>
                            <TableCell align="right">{row.doj}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Admin Table */}
                <TabPanel value="membership">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 360,
                      "&::-webkit-scrollbar": { display: "none" },
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <Table aria-label="simple table" size="small" stickyHeader>
                      <TableHead>
                        <TableRow
                          selected={selectedRow === 0}
                          onClick={() => handleSelectRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="right">User Name</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {paymentTableRowData.map((row, index) => (
                          <TableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRow === index + 1}
                            onClick={() => handleSelectRow(row, index + 1)}
                            hover
                          >
                            <TableCell component="th" scope="row">
                              {row.avatar}
                            </TableCell>
                            <TableCell align="right">{row.userName}</TableCell>
                            <TableCell align="right">{row.nic}</TableCell>
                            <TableCell align="right">{row.doj}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>
      </div>

      {/* Full Details Tab */}
      <div className="col-4">
        <div className="bg-light rounded ms-2 me-2 mt-0 p-2 mb-2">
          {/* Full Detials Header */}
          <div className="clearfix mt-3 mb-2">
            <div className="float-start fw-medium secondary-color">
              Order Info
            </div>
            <div className="float-end fw-medium secondary-color">
              {"2023-07-05"}
            </div>
          </div>

          {/* Full Details Section */}
          <Box
            sx={{
              maxHeight: 505,
              overflowY: "scroll",
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#9797971a",
                borderRadius: 8,
                padding: "32px 16px",
              }}
            >
              {/* Order Title */}
              <div className="row mb-3">
                <div className="col-auto">
                  <img src={trolley_img} alt="trolley" />
                </div>
                <div className="col-auto fw-bolder">
                  ORDER ID - 187828665488
                </div>
              </div>

              {/* Order Info */}
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Customer Name</div>
                  <div className="fw-bold h6">@imalsah48_3289_</div>
                </div>
                <div className="col">
                  <div className="fw-lighter h6">Mobile</div>
                  <div className="fw-bold h6">+94719876543</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Item Requested</div>
                  <div className="fw-bold h6">Carrot</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Quantity</div>
                  <div className="fw-bold h6">115 kg</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Weight</div>
                  <div className="fw-bold h6">115 kg</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Delivery Location</div>
                  <div className="fw-bold h6">4/b, Temple Road, Galle.</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Distance</div>
                  <div className="fw-bold h6">42 km</div>
                </div>
              </div>
            </Box>

            {/* Farmers Info */}
            <div className="clearfix mt-3 mb-2">
              <div className="fw-medium secondary-color">Farmer Info</div>
            </div>
            <Box
              sx={{
                backgroundColor: "#9797971a",
                borderRadius: 8,
                padding: "32px 16px",
              }}
            >
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Farmer Name</div>
                  <div className="fw-bold h6">@sunil_3289_</div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col">
                  <div className="fw-lighter h6">Mobile</div>
                  <div className="fw-bold h6">+94771234567</div>
                </div>
                <div className="col">
                  <div className="fw-lighter h6">Mobile</div>
                  <div className="fw-bold h6">+94719876543</div>
                </div>
              </div>
              <div className="row">
                <div className="fw-lighter h6">Pickup Location</div>
                <div className="fw-bold h6">
                  165/52, Milcasalwatta, Anuradhapura.
                </div>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Payments;
