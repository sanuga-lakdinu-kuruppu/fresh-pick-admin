import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import SearchBox from "../../components/searchbox/searchbox";
import BikeRideImg from "../../assets/graphics/images/rides_imgs/delivery-bike-rides-bicycle-img.png";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  IconButton,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButtonGroup,
} from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import {
  CustomerOrderFilterMenuData as customerOrderFilterMenuData,
  RidesTableRows as ridesTableRows,
} from "../../utils/constants/uiconstants";
import SearchField from "../../components/searchfield/searchfield";
import NavToggleButton from "../../components/common/navitemtogglebutton";

function CustomerDashboard() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("buying");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //Tables
  //set the selected Row
  const [selectedRow, setSelectedRow] = useState(0);
  const handleSelectRow = (row, rowIndex) => {
    setSelectedRow(rowIndex);
  };

  //Customer Order Type Filter
  const [orderType, setOrderType] = useState("requested");
  const handleOrderTypeToggleChnaged = (event, newValue) => {
    setOrderType(newValue);
  };

  //Search Field text On change
  const [searchFieldText, setSearchFieldText] = useState("");
  const searchFieldOnTextChange = (newValue) => {
    setSearchFieldText(newValue);
  };

  return (
    <div className="">
      {/* Heading */}
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">Users</div>
          <div className="d-block secondary-color sub-header fw-normal">
            Fast, efficient, and always on time
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
        {/* Customer Tab Sections */}
        <div className="col-8">
          {/* Customer Heading*/}
          <div className="row bg-light mb-3 ms-4 py-3 rounded">
            <div className="h4 secondary-color fw-bolder text-black">
              Amali Wathsala
              <div className="d-block float-end">
                <img
                  className="top-head-image ms-3"
                  src={BikeRideImg}
                  alt="Tempory"
                />
              </div>
            </div>

            {/* Customer Tab Section */}
            <div>
              <TabContext
                value={selectedTab}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <TabList onChange={handleChange}>
                  <Tab value="buying" label="Buying"></Tab>
                  <Tab value="selling" label="Selling" />
                  <Tab value="buy_profile" label="Buyer Profile" />
                  <Tab value="sell_profile" label="Seller Profile" />
                </TabList>

                {/* Requested Table */}
                <TabPanel value="buying">
                  {/* Buying order filter bar */}
                  <div className="row mb-4">
                    <div className="col">
                      <ToggleButtonGroup
                        value={orderType}
                        onChange={handleOrderTypeToggleChnaged}
                        orientation="horizontal"
                        color="primary"
                        fullWidth={true}
                        defaultValue={orderType}
                        exclusive
                      >
                        {customerOrderFilterMenuData.map((menuItem) => {
                          return (
                            <NavToggleButton
                              value={menuItem.key}
                              style={{ fontSize: "10px" }}
                            >
                              <div className="d-flex justify-content-center align-items-center mx-2">
                                {menuItem.value}
                              </div>
                            </NavToggleButton>
                          );
                        })}
                      </ToggleButtonGroup>
                    </div>

                    {/* Search Field */}
                    <div className="col float-end">
                      <SearchField onChange={searchFieldOnTextChange} />
                    </div>
                  </div>
                  {/* Buying order table */}
                  <div className="row">
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
                      <Table
                        aria-label="simple table"
                        size="small"
                        stickyHeader
                      >
                        <TableHead>
                          <TableRow
                            selected={selectedRow === 0}
                            onClick={() => handleSelectRow(0)}
                          >
                            <TableCell></TableCell>
                            <TableCell style={{ paddingTop: 0 }}>
                              Order Id
                            </TableCell>
                            <TableCell align="right">Product</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Time</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody sx={{}}>
                          {ridesTableRows.map((row, index) => (
                            <TableRow
                              key={row.id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                              selected={selectedRow === index + 1}
                              onClick={() => handleSelectRow(row, index + 1)}
                              hover
                            >
                              <TableCell component="th" scope="row">
                                {row.avatar}
                              </TableCell>
                              <TableCell align="right">{row.orderId}</TableCell>
                              <TableCell align="right">{row.product}</TableCell>
                              <TableCell align="right">{row.qty}</TableCell>
                              <TableCell align="right">{row.status}</TableCell>
                              <TableCell align="right">{row.date}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </TabPanel>
                {/* Ongoing Table */}
                <TabPanel value="selling">
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
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
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
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Completed Table */}
                <TabPanel value="buy_profile">
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
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
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
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Completed Table */}
                <TabPanel value="sell_profile">
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
                          <TableCell style={{ paddingTop: 0 }}>
                            Order Id
                          </TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Status</TableCell>
                          <TableCell align="right">Time</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {ridesTableRows.map((row, index) => (
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
                            <TableCell align="right">{row.orderId}</TableCell>
                            <TableCell align="right">{row.product}</TableCell>
                            <TableCell align="right">{row.qty}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
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
    </div>
  );
}

export default CustomerDashboard;
