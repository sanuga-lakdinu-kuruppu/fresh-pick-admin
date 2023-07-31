import React, { useContext, useState } from "react";
import SearchBox from "../../components/searchbox/searchbox";
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
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { NavContext } from "../../context/navcontext";
import { useNavigate } from "react-router-dom";
import BikeRideImg from "../../assets/graphics/images/verifications_imgs/delivery-bike-rides-bicycle-img.png";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import SearchField from "../../components/searchfield/searchfield";
import { CustomTableRow } from "../../components/common/tablerow";
import { PaymentTableRowData } from "../../utils/constants/uiconstants";
import { DefaultButton } from "../../components/common/defaultbtn";

function Verification() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
  };

  //Tab Panel
  const [selectedTab, setSelectedTab] = useState("document");
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  //Search Field text On change
  const [searchFieldText, setSearchFieldText] = useState("");
  const searchFieldOnTextChange = (newValue) => {
    setSearchFieldText(newValue);
  };

  //Set the document table selected row
  const [selectedDocumentTableRow, setSelectedDocumentTableRow] = useState(0);
  const handleSelectedDocumentTableRow = (row, rowIndex) => {
    setSelectedDocumentTableRow(rowIndex);
    setSelectedManualTableRow(0);
  };

  //Set the Manual Table Selected Row
  const [selectedManualTableRow, setSelectedManualTableRow] = useState(0);
  const handleSelectedManualTableRow = (row, rowIndex) => {
    setSelectedManualTableRow(rowIndex);
    setSelectedDocumentTableRow(0);
  };

  return (
    <div className="">
      {/* Top Head */}
      <div className="row ms-2 my-3 py-3 h3 fw-bolder primary-color">
        {/* Heading title */}
        <div className="d-inline-block col-auto my-1 align-self-center">
          <div className="d-block main-header fw-bold">Verifications</div>
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
              Requests
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
                  <Tab value="document" label="Document"></Tab>
                  <Tab value="manual" label="Manual" />
                </TabList>

                {/* Search Field */}
                <div className="row mt-3">
                  <div className="col"></div>
                  <div className="col-auto me-4 float-end">
                    <SearchField onChange={searchFieldOnTextChange} />
                  </div>
                </div>

                {/* Document Table */}
                <TabPanel value="document">
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
                          selected={selectedDocumentTableRow === 0}
                          onClick={() => handleSelectedDocumentTableRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="left">User Name</TableCell>
                          <TableCell align="left">Status</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{}}>
                        {PaymentTableRowData.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedDocumentTableRow === index + 1}
                            onClick={() =>
                              handleSelectedDocumentTableRow(row, index + 1)
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
                            <TableCell sx={{ color: "inherit" }} align="left">
                              {row.status}
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

                {/* Manual Table */}
                <TabPanel value="manual">
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
                          selected={selectedManualTableRow === 0}
                          onClick={() => handleSelectedManualTableRow(0)}
                        >
                          <TableCell></TableCell>
                          <TableCell align="left">User Name</TableCell>
                          <TableCell align="left">Status</TableCell>
                          <TableCell align="right">NIC</TableCell>
                          <TableCell align="right">DOJ</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{}}>
                        {PaymentTableRowData.map((row, index) => (
                          <CustomTableRow
                            key={row.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                            selected={selectedManualTableRow === index + 1}
                            onClick={() =>
                              handleSelectedManualTableRow(row, index + 1)
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
                            <TableCell sx={{ color: "inherit" }} align="left">
                              {row.status}
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
                Verifications Details
              </div>
            </div>
            {selectedDocumentTableRow > 0 && (
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
                    <div className="fw-lighter h6">Mobile Number</div>
                    <div className="">
                      <div className="fw-bold h6">+94771234567</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Nic Number</div>
                    <div className="">
                      <div className="fw-bold h6">199826479V</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Date of Birth</div>
                    <div className="">
                      <div className="fw-bold h6">25 February 1998</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Account Number</div>
                    <div className="">
                      <div className="fw-bold h6">1236947816</div>
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

                {/* Action Button */}
                <div className="row mb-2 mt-5">
                  <div className="col">
                    <DefaultButton sx={{ width: "100%", padding: "10px 15px" }}>
                      Accept
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
                      Reject
                    </DefaultButton>
                  </div>
                </div>
              </Box>
            )}
            {selectedManualTableRow > 0 && (
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
                    <div className="fw-lighter h6">Mobile Number</div>
                    <div className="">
                      <div className="fw-bold h6">+94771234567</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Nic Number</div>
                    <div className="">
                      <div className="fw-bold h6">199826479V</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Date of Birth</div>
                    <div className="">
                      <div className="fw-bold h6">25 February 1998</div>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="fw-lighter h6">Account Number</div>
                    <div className="">
                      <div className="fw-bold h6">1236947816</div>
                    </div>
                  </div>
                </Box>

                {/* Action Button */}
                <div className="row mb-2 mt-5">
                  <div className="col">
                    <DefaultButton sx={{ width: "100%", padding: "10px 15px" }}>
                      Accept
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
                      Reject
                    </DefaultButton>
                  </div>
                </div>
              </Box>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
