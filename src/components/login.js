import React from "react";
import Header from "./header";
import Footer from "./footer";

function Login() {
    let cart = JSON.parse(localStorage.getItem("myCart"));
    cart = cart ? cart : [];
    const [validateMessage, setValidateMessage] = React.useState("");
    const [requiredMessage, setrequiredMessage] = React.useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const registrationInfo = JSON.parse(localStorage.getItem("registration"));
        setrequiredMessage("");
        setValidateMessage("");

        if (email === "" || password === "") {
            setrequiredMessage("Please enter the required fields");
        } else if (registrationInfo && registrationInfo.email === email && registrationInfo.password === password) {
            localStorage.setItem("isLoggedin", "yes");
            window.location.href = "/";
        } else {
            setValidateMessage("Invalid Credentials! Please use the valid Credentials to login.");
        }
    }

    return (
       <div style={{"marginTop": "100px"}}>
          <Header cart={cart}/>
          <div style={{"width": "400px", "marginLeft": "50px", "height": "500px"}}>
          <h1>User Login</h1>
              {cart.length > 0 ?
                  <div style={{"fontSize": "17px", "margin": "10px 0px 20px 0px"}}>Please login to complete your order</div> :
              ""}
              <form method="post">
                  <div className="required">{validateMessage}</div>
                  <div className="formGroup">
                    <label for="email">Email Address <span className="required">*</span></label>
                    <input type="text" name="email" id="email" className="formControl" required/>
                  </div>
                  <div className="formGroup">
                    <label for="email">Password <span className="required">*</span></label>
                    <input type="password" name="password" id="password" className="formControl" required/>
                  </div>
                    <div className="required">{requiredMessage}</div>
                  <input type="submit" value="Login" className="btn" onClick={handleLogin}/>
              </form>
            </div>
          <Footer/>
       </div>
    )
}

export default Login;
