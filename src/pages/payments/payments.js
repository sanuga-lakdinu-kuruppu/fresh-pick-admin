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
  TextField,
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
import { CustomTableRow } from "../../components/common/tablerow";
import { DefaultButton } from "../../components/common/defaultbtn";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DefaultDatePicker } from "../../components/common/defaultdatepicker";
import dayjs from "dayjs";

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
  //set the selected Rows
  const [selectedSellerTableRow, setSelectedSellerTableRow] = useState(0);
  const handleSelectedSellerTableRow = (row, rowIndex) => {
    setSelectedSellerTableRow(rowIndex);
    setSelectedMembershipTableRow(0);
  };

  const [selectedMembershipTableRow, setSelectedMembershipTableRow] =
    useState(0);
  const handleSelectedMembershipTableRow = (row, rowIndex) => {
    setSelectedMembershipTableRow(rowIndex);
    setSelectedSellerTableRow(0);
  };

  //Search Field text On change
  const [searchFieldText, setSearchFieldText] = useState("");
  const searchFieldOnTextChange = (newValue) => {
    setSearchFieldText(newValue);
  };

  //Date Picker
  const today = dayjs(dayjs().format("YYYY-MM-DD").toString());
  const [transactionDate, setTransactionDate] = useState(today);

  return (
    <div className="">
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">Payments</div>
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
        {/* User Tab Sections */}
        <div className="col-8 min-vh-100">
          {/* User Heading*/}
          <div className="row bg-white mb-3 ms-4 py-2 rounded">
            <div className="h4 secondary-color fw-bolder">
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
            <div className="">
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
                          selected={selectedSellerTableRow === 0}
                          onClick={() => handleSelectedSellerTableRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="left">User Name</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{}}>
                        {paymentTableRowData.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedSellerTableRow === index + 1}
                            onClick={() =>
                              handleSelectedSellerTableRow(row, index + 1)
                            }
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                            hover
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
                            <TableCell sx={{ color: "inherit" }} align="left">
                              {row.userName}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.nic}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.doj}
                            </TableCell>
                          </CustomTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>
                {/* Transport Table */}
                <TabPanel value="company"></TabPanel>
                {/* Admin Table */}
                <TabPanel value="membership">
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
                          selected={selectedMembershipTableRow === 0}
                          onClick={() => handleSelectedMembershipTableRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="left">User Name</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{}}>
                        {paymentTableRowData.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedMembershipTableRow === index + 1}
                            onClick={() =>
                              handleSelectedMembershipTableRow(row, index + 1)
                            }
                            style={{
                              borderRadius: "30px",
                              marginBottom: "8px",
                            }}
                            hover
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
                            <TableCell sx={{ color: "inherit" }} align="left">
                              {row.userName}
                            </TableCell>
                            <TableCell sx={{ color: "inherit" }} align="right">
                              {row.nic}
                            </TableCell>
                            <TableCell
                              sx={{
                                borderTopRightRadius: "15px",
                                borderBottomRightRadius: "15px",
                                color: "inherit",
                              }}
                              align="right"
                            >
                              {row.doj}
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
                Transaction Details
              </div>
            </div>

            {/* Full Details Section */}
            {/* Component of seller details */}
            {selectedSellerTableRow > 0 && (
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
                  <div className="row mb-2">
                    <div className="fw-lighter h6">Transaction Date</div>
                    <div className="w-100">
                      <div className="col-auto">
                        <LocalizationProvider
                          className=""
                          dateAdapter={AdapterDayjs}
                        >
                          <DefaultDatePicker
                            className=""
                            label=""
                            value={transactionDate}
                            onChange={(value) => setTransactionDate(value)}
                            format="DD-MMMM-YYYY"
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Account Holder</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Account Holder"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Account No</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Account No"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Ammount</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Ammount"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>
                </Box>

                {/* Action Button */}
                <div className="row mb-2">
                  <div className="col">
                    <DefaultButton sx={{ width: "100%", padding: "10px 15px" }}>
                      Assign
                    </DefaultButton>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <DefaultButton
                      sx={{
                        width: "100%",
                        padding: "10px 15px",
                        color: "#2196F3",
                        border: "1px solid #2196F3",
                        backgroundColor: "#FFF",
                        "&:hover": {
                          color: "#FFF",
                        },
                      }}
                    >
                      Cancel
                    </DefaultButton>
                  </div>
                </div>
              </Box>
            )}

            {/* Component of transport full details */}
            {selectedTab === "company" && (
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
                  <div className="row mb-2">
                    <div className="fw-lighter h6">Transaction Date</div>
                    <div className="w-100">
                      <div className="col-auto">
                        <LocalizationProvider
                          className=""
                          dateAdapter={AdapterDayjs}
                        >
                          <DefaultDatePicker
                            className=""
                            label=""
                            value={transactionDate}
                            onChange={(value) => setTransactionDate(value)}
                            format="DD-MMMM-YYYY"
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Account Holder</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Account Holder"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Account No</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Account No"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="fw-lighter h6 mb-2">Ammount</div>
                    <div className="">
                      <TextField
                        id="rider-name"
                        label="Ammount"
                        variant="outlined"
                        size="small"
                        sx={{ minWidth: "100%", marginBottom: "16px" }}
                        InputProps={{ style: { borderRadius: 15 } }}
                      />
                    </div>
                  </div>
                </Box>

                {/* Action Button */}
                <div className="row mb-2">
                  <div className="col">
                    <DefaultButton sx={{ width: "100%", padding: "10px 15px" }}>
                      Assign
                    </DefaultButton>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col">
                    <DefaultButton
                      sx={{
                        width: "100%",
                        padding: "10px 15px",
                        color: "#2196F3",
                        border: "1px solid #2196F3",
                        backgroundColor: "#FFF",
                        "&:hover": {
                          color: "#FFF",
                        },
                      }}
                    >
                      Cancel
                    </DefaultButton>
                  </div>
                </div>
              </Box>
            )}

            {/* Component of membership full details */}
            {selectedMembershipTableRow > 0 && (
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
                  <div className="row mb-2">
                    <div className="fw-lighter h6">Full Name</div>
                    <div className="">
                      <div className="fw-bold h6">D. Y. Vihara Piyumanthi</div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="fw-lighter h6">Address</div>
                    <div className="">
                      <div className="fw-bold h6">
                        165/52, Main Road, Galle.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="fw-lighter h6">Email Address</div>
                    <div className="">
                      <div className="fw-bold h6">
                        viharapiyumanthi@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Nic Number</div>
                    <div className="">
                      <div className="fw-bold h6">199826479V</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Bank Name</div>
                    <div className="">
                      <div className="fw-bold h6">Bank Of Ceylon</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Bank Branch</div>
                    <div className="">
                      <div className="fw-bold h6">Panadura</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Account Number</div>
                    <div className="">
                      <div className="fw-bold h6">1787983897</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Account Holder</div>
                    <div className="">
                      <div className="fw-bold h6">FreshPick</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Amount</div>
                    <div className="">
                      <div className="fw-bold h6">Rs. 615.00</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Document</div>
                    <div className="row">
                      <div className="col float-start">
                        <div className="fw-bold h6">fal_45.jpg</div>
                      </div>
                      <div className="col float-end">
                        <div className="fw-bold h6 primary-color">Download</div>
                      </div>
                    </div>
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

export default Payments;
