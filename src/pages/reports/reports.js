import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../../context/navcontext";
import SearchBox from "../../components/searchbox/searchbox";
import { IconButton } from "@mui/material";
import { CalendarMonth, NotificationAdd } from "@mui/icons-material";
import { ReportCardData as reportCardData } from "../../utils/constants/uiconstants";
import ReportComponent from "../../components/common/reportcomponent";

function Reports() {
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
          <div className="d-block main-header fw-bold">Reports</div>
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
      <div className="row mt-3 mb-2 col w-100">
        {reportCardData.map((cardData) => {
          return (
            <div className="row col-auto w-100 mb-3 mx-3" key={cardData.id}>
              <ReportComponent
                gradientAngle={cardData.gradientAngle}
                fromColor={cardData.fromColor}
                toColor={cardData.toColor}
                cardHeader={cardData.cardHeader}
                iconImage={cardData.iconImage}
                cardDescription={cardData.cardDescription}
                sideImage={cardData.sideImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Reports;
