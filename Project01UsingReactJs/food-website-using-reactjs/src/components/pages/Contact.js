import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 id="contact">Contact Us!</h1>
      <footer className="footer">
        <div className="container">
          <div className="form">
            <p>
              <i> We can't solve your problem if you don't tell us about it!</i>
            </p>
            <form action="">
              <div>
                <label for="fname">FirstName:</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter your firstname"
                />
              </div>
              <div>
                <label for="lname">LastName:</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Enter your lastname"
                />
              </div>
              <div>
                <label for="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label for="mob">Phone No:</label>
                <input type="tel" name="mob" placeholder="+91" />
              </div>
              <div>
                <textarea
                  name="des"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Message......."
                ></textarea>
              </div>
              <button className="fbtn">Send</button>
            </form>
          </div>

          <div className="footcontent">
            <div className="myaddress">
              <address>
                <p>Noida,UttarPradesh</p>
                <p>(+91 1234567890)</p>
                <p>example123@gmail.com</p>
              </address>
            </div>
            <div className="myicons">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="right">
          &copy; All Rights Reserved Created By Amarjeet Kumar
        </div>
      </footer>
    </div>
  );
}

export default Contact