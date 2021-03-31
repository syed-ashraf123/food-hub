import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import "./profile.css";
import Axios from "axios";
function Profile() {
  const [name, setName] = useState("Loading...");
  const [email, setEmail] = useState("Loading...");
  const [address, setAddress] = useState("Loading...");
  const [id, setId] = useState("Loading...");
  useEffect(() => {
    if (localStorage.getItem("user-auth-token") != null) {
      const token = localStorage.getItem("user-auth-token");
      let config = {
        headers: {
          "user-auth-token": token,
        },
      };
      Axios.get("http://localhost:4000/userdetails", config)
        .then((response) => {
          console.log(response);
          console.log(response.data.msg);
          setName(response.data.msg.name);
          setEmail(response.data.msg.email);
          setAddress(response.data.msg.address);
          setId(response.data.msg._id);

          //   setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response.data.msg);
          //   setStatus(error.response.data.msg);

          window.scrollTo(0, 0);
        });
    }
  }, []);

  return (
    <div className="container emp-profile">
      {localStorage.getItem("user-auth-token") ? null : (
        <Redirect to="/login" />
      )}
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>{name}</h5>
          </div>
        </div>
        <div className="col-md-2">
          <Link to="/editprofile">
            <button
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              defaultValue="Edit Profile"
            >
              Edit
            </button>
          </Link>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>{id}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>{name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>{email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Address</label>
                </div>
                <div className="col-md-6">
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
