import React from "react";
import "./djangowithaws.css";

function DjangoWithAWS() {
  return (
    <div className="djangowithaws-container">
      <div>
        <h1 className="topic">How to Host Django Application on AWS</h1>
      </div>
      <div>
        <p className="question"></p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>Set Up an AWS Account</li>
              <li>
                Make sure that you deploy your Django project on GitHub
                repository.
              </li>
              <li>
                To create database, type <b>RDS</b> on search bar, Then click on{" "}
                <b>Create database</b> button
              </li>
              <li>
                Under <b>Engine options</b> section, select <b>MySQL</b>
              </li>
              <li>
                Under <b>Templates</b> section, select <b>Free tier</b>
              </li>
              <li>
                Under <b>Settings</b> section type database name
              </li>
              <li>
                Then set <b>Master Username</b> and, <b>Master Password</b> and{" "}
                <b>Confirm master password</b>
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>
    </div>
  );
}

export default DjangoWithAWS;
