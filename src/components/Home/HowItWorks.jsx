import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How Job-Hub Works</h3>
          <div className="banner">
            <div
              className="card"
              onClick={() => {
                window.location.href = "http://localhost:5173/job/getall";
              }}
            >
              <FaUserPlus />
              <p>All Jobs</p>
              <p>Click on this for creating a new account on our website</p>
            </div>
            <div
              className="card"
              onClick={() => {
                window.location.href = "http://localhost:5173/job/post";
              }}
            >
              <MdFindInPage />
              <p>Post a Job</p>
              <p>Post a Job</p>
            </div>
            <a href="http://localhost:5173/job/me" target="_blank" rel="noopener noreferrer" className="card" style={{textDecoration: 'none'}}>
  <IoMdSend />
  <p>View your Jobs</p>
  <p>
    Click on this to view your posted jobs on our website.
  </p>
</a>

          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
