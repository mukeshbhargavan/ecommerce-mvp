import React from 'react';
import Header from './header';
import Footer from './footer';

function Login() {
    let cart = JSON.parse(localStorage.getItem("myCart"));
    cart = cart ? cart : [];

    const handleLogin = (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const registrationInfo = JSON.parse(localStorage.getItem("registration"));

        if (registrationInfo && registrationInfo.email === email && registrationInfo && registrationInfo.password === password) {
            console.log("SUCCESSFULLY!!!!!!");
        } else {
            console.log("FAILEDDDDD!!!!!!!!");
        }
    }

    return (
       <div style={{'marginTop': '100px'}}>
          <Header cart={cart}/>
          <div style={{'width': '400px', 'marginLeft': '50px', 'height': '500px'}}>
          <h1>User Login</h1>
              <form method="post">
                  <div className="formGroup">
                    <label for="email">Email Address <span className="required">*</span></label>
                    <input type="text" name="email" id="email" className="formControl" required/>
                  </div>
                  <div className="formGroup">
                    <label for="email">Password <span className="required">*</span></label>
                    <input type="password" name="password" id="password" className="formControl" required/>
                  </div>
                  <input type="submit" value="Login" onClick={handleLogin}/>
              </form>
            </div>
          <Footer/>
       </div>
    )
}

export default Login;
