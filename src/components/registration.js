import React from 'react';
import Header from './header';
import Footer from './footer';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

function Registration() {
    const userForm = {
        name: null,
        email: null,
        password: null,
        age: null,
        errors: {
          name: '',
          email: '',
          password: '',
          age: ''
        }
    };
    const [registration, setRegistration] = React.useState(userForm);
    let cart = JSON.parse(localStorage.getItem("myCart"));
    cart = cart ? cart : [];

    const handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = registration.errors;
      let values = registration;
      let registrationSucess = false;

      switch (name) {
         case 'name':
              errors.name =
                value.length === 0
                  ? 'Name is a required field and it should not be null'
                  : '';
              break;
          case 'email':
              errors.email =
                validEmailRegex.test(value)
                  ? ''
                  : 'Email is not valid!';
              break;
          case 'password':
                   errors.password =
                     value.length === 0
                       ? 'Please enter Password!'
                       : '';
                   break;
           case 'age':
                  errors.age =
                    (value.length <= 2 && value > 20 && !isNaN(value))
                      ? ''
                      : 'Enter a valid age. Age should be more than 20';
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
      if(validateForm(registration.errors)) {
          localStorage.setItem("registration", JSON.stringify(registration));
          window.location.href = "/registration";
      } else {
        alert("Please validate form input before submitting the data");
      }
    }

    return (
       <div style={{'marginTop': '100px'}}>
          <Header cart={cart}/>
          <h1 style={{'marginLeft': '50px'}}>User Registration</h1>
          {localStorage.getItem("registration") && localStorage.getItem("registration").name !== "" ?
            <div style={{'height': '500px'}}>
              YYYY
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
                      <label for="email">Email <span className="required">*</span></label>
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
                      <label for="gender">Gender</label>
                      <select name="gender" className="formControl">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                  </div>
                  <h3 style={{'color': '#999', 'marginTop': '10px'}}>Billing Address</h3>
                  <div className="formGroup">
                      <textarea name="billingAddress" style={{'width': '400px', 'height': '70px'}}/>
                  </div>

                  <h3 style={{'color': '#999', 'marginTop': '10px'}}>Shipping Address</h3>
                  <input type="checkbox"/> Shipping information same as Billing Address?
                  <div className="formGroup">
                      <textarea name="billingAddress" style={{'width': '400px', 'height': '70px'}}/>
                  </div>
                  <input type="submit" value="Registration" className="btn" />
              </form>
            </div>)}
          <Footer/>
       </div>
    )
}

export default Registration;
