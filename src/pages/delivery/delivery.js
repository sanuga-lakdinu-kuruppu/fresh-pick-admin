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
  Box,
  TextField,
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
import { DefaultButton } from "../../components/common/defaultbtn";
import trolley_img from "../../assets/graphics/images/delivery_imgs/trolley_full_details.png";
import { CustomTableRow } from "../../components/common/tablerow";

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
  //Set the Requested tablle selected row
  const [selectedRequestTableRow, setSelectedRequestedTableRow] = useState(0);
  const handleSelectedRequestTableRow = (row, rowIndex) => {
    setSelectedRequestedTableRow(rowIndex);
    setSelectedOngoingTableRow(0);
    setSelectedCompleteTableRow(0);
  };

  //Set the ongoing tablle selected row
  const [selectedOngoingTableRow, setSelectedOngoingTableRow] = useState(0);
  const handleSelectedOngoingTableRow = (row, rowIndex) => {
    setSelectedOngoingTableRow(rowIndex);
    setSelectedRequestedTableRow(0);
    setSelectedCompleteTableRow(0);
  };

  //Set the ongoing tablle selected row
  const [selectedCompleteTableRow, setSelectedCompleteTableRow] = useState(0);
  const handleSelectedCompleteTableRow = (row, rowIndex) => {
    setSelectedCompleteTableRow(rowIndex);
    setSelectedRequestedTableRow(0);
    setSelectedOngoingTableRow(0);
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
          <div className="d-block main-header fw-bold">Rides</div>
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
          <div className="row bg-white mb-3 ms-4 py-2 rounded">
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
                          selected={selectedRequestTableRow === 0}
                          onClick={() => handleSelectedRequestTableRow(0)}
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
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedRequestTableRow === index + 1}
                            onClick={() =>
                              handleSelectedRequestTableRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.distance}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
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
                          selected={selectedOngoingTableRow === 0}
                          onClick={() => handleSelectedOngoingTableRow(0)}
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
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedOngoingTableRow === index + 1}
                            onClick={() =>
                              handleSelectedOngoingTableRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.distance}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
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
                          selected={selectedCompleteTableRow === 0}
                          onClick={() => handleSelectedCompleteTableRow(0)}
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
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedCompleteTableRow === index + 1}
                            onClick={() =>
                              handleSelectedCompleteTableRow(row, index + 1)
                            }
                            hover
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderTopLeftRadius: "15px",
                                borderBottomLeftRadius: "15px",
                                color: "inherit",
                              }}
                              component="th"
                              scope="row"
                            >
                              {row.avatar}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.orderId}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.product}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.qty}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.distance}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.date}
                            </TableCell>
                          </CustomTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
              </TabContext>
            </div>
          </div>
        </div>

        {/* Full Details Tab */}
        <div className="col-4">
          <div className="bg-white rounded ms-2 me-2 mt-0 p-2 mb-2">
            {/* Full Detials Header */}
            <div className="clearfix mt-3 mb-2">
              <div className="float-start fw-medium secondary-color">
                Order Info
              </div>
              <div className="float-end fw-medium secondary-color">
                {"2023-07-05"}
              </div>
            </div>

            {/* Requested Table Component */}
            {selectedRequestTableRow > 0 && (
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
            )}
            {/* Ongoing Table Component */}
            {selectedOngoingTableRow > 0 && (
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
                      <div className="fw-lighter h6">Email</div>
                      <div className="fw-bold h6">sample@email.com</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Pickup Location</div>
                    <div className="fw-bold h6">
                      165/52, Milcasalwatta, Anuradhapura.
                    </div>
                  </div>
                </Box>

                {/* Delivery Info Info */}
                <div className="clearfix mt-3 mb-2">
                  <div className="fw-medium secondary-color">Delivery Info</div>
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
                      <div className="fw-lighter h6">Rider Name</div>
                      <div className="fw-bold h6">Saman Perera</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Method</div>
                      <div className="fw-bold h6">Truck</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6">+94719876543</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Vehicle No</div>
                    <div className="fw-bold h6">BGN - 2587</div>
                  </div>
                </Box>
              </Box>
            )}

            {/* Completed Table Component */}
            {selectedCompleteTableRow > 0 && (
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
                      <div className="fw-lighter h6">Email</div>
                      <div className="fw-bold h6">sample@email.com</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Pickup Location</div>
                    <div className="fw-bold h6">
                      165/52, Milcasalwatta, Anuradhapura.
                    </div>
                  </div>
                </Box>

                {/* Delivery Info Info */}
                <div className="clearfix mt-3 mb-2">
                  <div className="fw-medium secondary-color">Delivery Info</div>
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
                      <div className="fw-lighter h6">Rider Name</div>
                      <div className="fw-bold h6">Saman Perera</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Delivery Method</div>
                      <div className="fw-bold h6">Truck</div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col">
                      <div className="fw-lighter h6">Mobile</div>
                      <div className="fw-bold h6">+94719876543</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="fw-lighter h6">Vehicle No</div>
                    <div className="fw-bold h6">BGN - 2587</div>
                  </div>
                </Box>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
