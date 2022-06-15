import React from "react";
import { ReactDOM } from "react";
import {
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBDropdown,
  MDBDropdownMenu,
  MDBBtn,
} from "mdb-react-ui-kit";

export class Navigation extends React.Component {
  render() {
    return (
      <MDBNavbarNav className="navbar navbar-dark navbar-collapse navbar-expand-xl bg-blue">
        <MDBContainer className="fluid bg-blue">
          <MDBNavbarBrand>
            <span className="d-none d-sm-block">
              <strong>
                <p className="d-inline" lang="en">
                  Office of the Nagorno Karabakh Republic
                </p>
              </strong>
            </span>
          </MDBNavbarBrand>
          <MDBBtn
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            color="btn-primary"
          >
            <i className="fas fa-bars"></i>
          </MDBBtn>

          <div class="collapse navbar-collapse" id="navbarExample01">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Office
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Ambassador
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Structure
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Contact Hours
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Building
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Governance
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Culture
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      History
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Foreign Policy
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Conflict
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Genocide Recognition
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Bilateral Relations
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consular Affairs
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Visa
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Advice for travelers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Consular fees
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </MDBContainer>
      </MDBNavbarNav>
    );
  }
}
