import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla enim quis eleifend molestie.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 4</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">Email</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Phone</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Address</a>
              </li>
              <li>
                <a href="#!" className="text-dark">City</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
