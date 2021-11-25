import React from "react";
import "./css/Customer.css";


function Customer() {
    return (
        <div class="wrapper">
            <div class="login-box">
                <h3 class="info-text">Add customer</h3>
                <form class="form-container" action="">
                    <div class="input-addon">
                        <input class="form-element input-field" placeholder="Name" type="text" />
                        <button class="input-addon-item">
                            <span class="fa fa-user"></span>
                        </button>

                    </div>
                    <div class="input-addon">
                        <input class="form-element input-field" placeholder="Phone no" type="tel" />
                        <button class="input-addon-item">
                            <span class="fa fa-envelope"></span>
                        </button>
                    </div>

                    <input class="form-element is-submit" type="submit" value="Add customer" />
                </form>

            </div>
        </div>
    );
}
export default Customer;
