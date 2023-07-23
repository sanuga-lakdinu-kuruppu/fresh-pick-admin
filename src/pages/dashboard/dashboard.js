import React, { useContext } from "react";
import SearchBox from "../../components/searchbox";
import { IconButton } from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import "../../assets/styles/gloablestyles.css";
import AnalyticCard from "../../components/dashboardanalyticcard/analyticcard";
import { DashboardAnalyticsCardData as dashboardAnalyticsCardData } from "../../utils/constants/uiconstants";

function Dashboard() {
  //User Defined
  //Navigation Handle
  const navigate = useNavigate();
  const { navSelected, setNavSelected } = useContext(NavContext);
  const handleNavChange = (params) => {
    navigate(`/${params.key}`);
    setNavSelected(params.key);
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
      {/* Analytics card Section */}
      {/* User Card Section */}
      <div className="row mt-2 mb-3">
        <div className="row ms-2 secondary-color fw-bold h5">Users</div>
        <div className="row">
          {dashboardAnalyticsCardData.user.map((userCard) => {
            return (
              <div key={userCard.id} className="col">
                <div className="">
                  <AnalyticCard
                    backgroundColor={userCard.backgroundColor}
                    width={userCard.width}
                    sideImage={userCard.sideImage}
                    header={userCard.header}
                    value={userCard.value}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Order Cards Section */}
      <div className="row mb-3">
        <div className="row ms-2 secondary-color fw-bold h5">Orders</div>
        <div className="row">
          {dashboardAnalyticsCardData.order.map((orderCard) => {
            return (
              <div key={orderCard.id} className="col">
                <div className="">
                  <AnalyticCard
                    backgroundColor={orderCard.backgroundColor}
                    width={orderCard.width}
                    sideImage={orderCard.sideImage}
                    header={orderCard.header}
                    value={orderCard.value}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Post Card Section */}
      <div className="row mb-3">
        <div className="row ms-2 secondary-color fw-bold h5">Posts</div>
        <div className="row">
          {dashboardAnalyticsCardData.post.map((postCard) => {
            return (
              <div key={postCard.id} className="col">
                <div className="">
                  <AnalyticCard
                    backgroundColor={postCard.backgroundColor}
                    width={postCard.width}
                    sideImage={postCard.sideImage}
                    header={postCard.header}
                    value={postCard.value}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Verification Card Section */}
      <div className="row mb-3">
        <div className="row ms-2 secondary-color fw-bold h5">Verifications</div>
        <div className="row">
          {dashboardAnalyticsCardData.verification.map((verificationCard) => {
            return (
              <div key={verificationCard.id} className="col">
                <div className="">
                  <AnalyticCard
                    backgroundColor={verificationCard.backgroundColor}
                    width={verificationCard.width}
                    sideImage={verificationCard.sideImage}
                    header={verificationCard.header}
                    value={verificationCard.value}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
