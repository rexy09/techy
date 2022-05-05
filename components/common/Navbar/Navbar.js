const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white" id='#'>
            <div className="container-fluid px-lg-5 py-3">
                <a className="navbar-brand" href="#">
                    <h1>Devhat</h1>
                    {/* <Image
              src="/images/techy_1.png"
              alt="Image"
              width={86}
              height={43}
            /> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#technologies">Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cloud">Cloud</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;