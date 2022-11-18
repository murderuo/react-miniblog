function Navbar() {
  return (
    <>
      <div className="container-fluid navbar-bg">
        <div className="row ">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="navbar-bg p-2 d-flex justify-content-lg-start   justify-content-sm-center">
              <a href="#" className="navbar navbar-brand fs-4">
                My Mini Blog Page
              </a>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 sol-sm-12 ">
            <div className="navbar d-flex navbar-bg justify-content-lg-end  justify-content-sm-center">
              <ul className="navbar-nav d-flex flex-row gap-2">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Politics
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Tech
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Travel
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Sports
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  type="search"
                  className="form-control mx-2"
                  placeholder="Search"
                />
                <button className="btn btn-outline-success">Search</button>
              </form>
              {/* <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
