import React from "react";
import profile from "./../mypr.png";
import { ReactComponent as Mail } from "./../mail.svg";

const MyProfile = () => {
  return (
      <div>
        <div class="container">
          <div class="col-lg-12 col-lg-offset-4 col-md-12 mt-3 col-md-offset-4 col-sm-16 col-xs-16 edit_information">
            <form action=""  method="POST">	
              <h3 class="text-center m-4 pt-10">Edit Personal Information</h3>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-14">
                  <div class="form-group">
                    <label class="profile_details_text">Name:</label>
                    <input type="text" name="name" class="form-control" value="" required />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Address:</label>
                    <input type="address" name="address" class="form-control" value="" required/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Mobile Number:</label>
                    <input type="tel" name="phone" class="form-control" value=""/>
                    
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="form-group">
                    <label class="profile_details_text">Edit password:</label>
                    <input type="text" name="password" class="form-control" value="" required/>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                  <div class="form-group">
                    <input type="submit" class="btn btn-success" value="Submit"/>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default MyProfile;
