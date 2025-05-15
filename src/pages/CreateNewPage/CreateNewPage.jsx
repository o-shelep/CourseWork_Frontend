import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreateNewForm from "../../components/CreateNewForm/CreateNewForm";
import BannerImg from "../../assets/Banner.svg";
function CreateNewPage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: "20px 32px 20px 16px",
          boxSizing: "border-box",
          overflowY: "auto",
        }}
      >
        <img
          src={BannerImg}
          alt="Description"
          style={{ width: "100%", objectFit: "cover", marginBottom: "16px" }}
        />

        <CreateNewForm />
      </div>
    </div>
  );
}

export default CreateNewPage;
