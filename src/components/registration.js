import React from 'react';
import Header from './header';
import Footer from './footer';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

function Registration() {
    const userForm = {
        name: null,
        email: null,
        password: null,
        age: 'Male',
        billingAddress: '',
        shippingAddress: '',
        errors: {
          name: '',
          email: '',
          password: '',
          age: '',
          billingAddress: '',
          shippingAddress: ''
        }
    };
    const [registration, setRegistration] = React.useState(userForm);
    const [validateMessage, setValidateMessage] = React.useState('');

    let cart = JSON.parse(localStorage.getItem("myCart")) || [];

    const handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = registration.errors;
      setValidateMessage('');

      switch (name) {
         case 'name':
              errors.name =
                value.length === 0
                  ? 'Please enter Name!'
                  : '';
              break;
          case 'email':
              errors.email =
                validEmailRegex.test(value)
                  ? ''
                  : 'Please enter valid Email Address!';
              break;
          case 'password':
                   errors.password =
                     value.length <= 4
                       ? 'Please enter Password, it should be minimum 5 characters!'
                       : '';
                   break;
           case 'age':
                  errors.age =
                    (value.length <= 2 && value > 20 && !isNaN(value))
                      ? ''
                      : 'Enter a valid age. Age should be more than 20';
                  break;
           case 'billingAddress':
                  errors.billingAddress =
                    value.length <= 20
                      ? 'Please enter Billing Address, it should be minimum 20 characters!'
                      : '';
                  break;
          case 'shippingAddress':
                   errors.shippingAddress =
                     value.length <= 20
                       ? 'Please enter Shipping Address, it should be minimum 20 characters!'
                       : '';
                   break;
          default:
            break;
      }
      setRegistration({errors, [name]: value});
      setRegistration({
         ...registration,
         [event.target.name]: event.target.value.trim()
       });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      let errorFlag = true;

      for (var i = 0; i <= 6; i++) {
          if (event.target[i].value === "") {
            errorFlag = false;
            break;
          }
      }

      if (!errorFlag) {
        setValidateMessage('Please enter the required fields before submitting the form data!');
      } else {
        localStorage.setItem("registration", JSON.stringify(registration));
        window.location.href = "/registration";
      }
    }

    return (
       <div style={{'marginTop': '100px'}}>
          <Header cart={cart}/>
          <h1 style={{'marginLeft': '50px'}}>User Registration</h1>
          {localStorage.getItem("registration") && JSON.parse(localStorage.getItem("registration")).name !== "" ?
            <div className="registrationSuccessContainer">
              Hello <b>{JSON.parse(localStorage.getItem("registration")).name}</b>! You have been successfully registered! <br/>
              <ul>
                <li> <a href="/login" style={{'color': 'blue'}}>Click here</a> to Login</li>
                <li> <a href="/" style={{'color': 'blue'}}>Click here</a> to Purchase</li>
                <li> <a href="/cart" style={{'color': 'blue'}}>Click here</a> to View Cart</li>
              </ul>
            </div>
            :
            (<div style={{'width': '400px', 'marginLeft': '50px'}}>
              <form name="frm" method="post" onSubmit={handleSubmit} noValidate>
                  <div className="formGroup">
                      <label for="name">Name <span className="required">*</span></label>
                      <input type="text" name="name" className="formControl" onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.name}</span>
                  </div>
                  <div className="formGroup">
                      <label for="email">Email Address<span className="required">*</span></label>
                      <input type="text" name="email" className="formControl" onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.email}</span>
                  </div>
                  <div className="formGroup">
                      <label for="pasword">Password<span className="required">*</span></label>
                      <input type="password" name="password" className="formControl" onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.password}</span>
                  </div>
                  <div className="formGroup">
                      <label for="age">Age <span className="required">*</span></label>
                      <input type="text" name="age" className="formControl" onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.age}</span>
                  </div>
                  <div className="formGroup">
                      <label for="gender">Gender <span className="required">*</span></label>
                      <select name="gender" className="formControl" style={{'height': '35px', 'width': '410px'}}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                  </div>
                  <h3 style={{'color': '#999', 'marginTop': '10px'}}>Billing Address <span className="required">*</span></h3>
                  <div className="formGroup">
                      <textarea name="billingAddress" style={{'width': '410px', 'height': '70px'}} onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.billingAddress}</span>
                  </div>

                  <h3 style={{'color': '#999', 'marginTop': '10px'}}>Shipping Address <span className="required">*</span></h3>
                  <input type="checkbox" disabled/> Shipping information same as Billing Address?
                  <div className="formGroup">
                      <textarea name="shippingAddress" style={{'width': '410px', 'height': '70px'}} onChange={handleChange} onBlur={handleChange} noValidate/>
                      <span className='error'>{registration.errors.shippingAddress}</span>
                  </div>
                  <span className="required" style={{'margin': '10px 0px 10px 0px'}}>{validateMessage}</span>
                  <input type="submit" value="Registration" className="btn" />
              </form>
            </div>)}
          <Footer/>
       </div>
    )
}

export default Registration;
