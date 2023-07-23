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
                    <div className="fw-lighter h6">Quantity</div>
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

              {/* Delivery Info */}
              <div className="clearfix mt-3 mb-2">
                <div className="fw-medium secondary-color">Delivery Info</div>
              </div>

              <Box
                sx={{
                  backgroundColor: "#9797971a",
                  borderRadius: 8,
                  padding: "32px 16px",
                  marginBottom: "32px",
                }}
              >
                <div className="row">
                  <div className="fw-lighter h6 mb-2">Rider Name</div>
                  <div className="">
                    <TextField
                      id="rider-name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      sx={{ minWidth: "100%", marginBottom: "16px" }}
                      InputProps={{ style: { borderRadius: 15 } }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="fw-lighter h6 mb-3">Delivery Method</div>
                  <div className="">
                    <FormControl
                      sx={{
                        minWidth: "100%",
                        marginBottom: "16px",
                      }}
                      size="small"
                    >
                      <InputLabel id="demo-select-small-label">
                        Location
                      </InputLabel>
                      <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={deliveryLocation}
                        label="Location"
                        onChange={handleDeliveryLocationChanged}
                        sx={{ borderRadius: 15 }}
                      >
                        <MenuItem value={"location1"}>Location 1</MenuItem>
                        <MenuItem value={"location2"}>Location 2</MenuItem>
                        <MenuItem value={"location3"}>Location 3</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div className="row">
                  <div className="fw-lighter h6 mb-2">Rider Mobile</div>
                  <div className="">
                    <TextField
                      id="rider-mobile"
                      label="Mobile"
                      variant="outlined"
                      size="small"
                      sx={{ minWidth: "100%", marginBottom: "16px" }}
                      InputProps={{ style: { borderRadius: 15 } }}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="fw-lighter h6 mb-2">Vehicle No</div>
                  <div className="">
                    <TextField
                      id="rider-vehicle-no"
                      label="Vehicle No"
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
          </div>
        </div>
