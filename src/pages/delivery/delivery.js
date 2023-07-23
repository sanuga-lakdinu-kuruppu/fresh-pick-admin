import React, { useContext, useState } from "react";
import "./deliverystyles.css";
import SearchBox from "../../components/searchbox/searchbox";
import {
  IconButton,
  Tab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SearchField from "../../components/searchfield/searchfield";
import BikeRideImg from "../../assets/graphics/images/delivery_imgs/delivery-bike-rides-bicycle-img.png";
import {
  DeliveryTableRowData as deliveryTableRowData,
  UserTableRowData as userTableRowData,
} from "../../utils/constants/uiconstants";

function Delivery() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("requested");
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
          <div className="d-block main-header fw-bold">Deliveries</div>
          <div className="d-block secondary-color sub-header fw-normal">
            Fast, efficient, and always on time.
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
              All your Deliveries
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
                  <Tab value="requested" label="requested"></Tab>
                  <Tab value="ongoing" label="ongoing" />
                  <Tab value="completed" label="completed" />
                </TabList>

                {/* Search Field */}
                <div className="row mt-3">
                  <div className="col"></div>
                  <div className="col-auto me-4 float-end">
                    <SearchField onChange={searchFieldOnTextChange} />
                  </div>
                </div>

                {/*Requested Table */}
                <TabPanel value="requested">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 350,
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
                          <TableCell align="right">Order Id</TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quanitity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {deliveryTableRowData.map((row, index) => (
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
                            <TableCell align="right">{row.distance}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                {/* Ongoing Table */}
                <TabPanel value="ongoing">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 350,
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
                          <TableCell align="right">Order Id</TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quanitity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {deliveryTableRowData.map((row, index) => (
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
                            <TableCell align="right">{row.distance}</TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                {/* Completed Table */}
                <TabPanel value="completed">
                  <TableContainer
                    component={Paper}
                    sx={{
                      overflowY: "scroll",
                      maxHeight: 350,
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
                          <TableCell align="right">Order Id</TableCell>
                          <TableCell align="right">Product</TableCell>
                          <TableCell align="right">Quanitity</TableCell>
                          <TableCell align="right">Distance</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{}}>
                        {deliveryTableRowData.map((row, index) => (
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
                            <TableCell align="right">{row.distance}</TableCell>
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

export default Delivery;
