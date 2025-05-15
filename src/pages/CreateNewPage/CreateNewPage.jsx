import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateNewForm from "../../components/CreateNewForm/CreateNewForm";
import BannerImg from "../../assets/Banner.svg";
import "./CreateNewPage.css";
function CreateNewPage() {
  return (
    <div className="create-new-page-container">
      <Sidebar />
      <div className="create-new-page-content-container">
        <img src={BannerImg} alt="St. Mission Banner" />
        <CreateNewForm />
      </div>
    </div>
  );
}

export default CreateNewPage;
