import React from 'react'
import PropTypes from 'prop-types'
import  {Link} from 'react-router-dom'; //if you use router then must import this link for hyperlink pages

export default function Navbar(props) {

    return (
        <nav className={`navbar shadow navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img height="auto" width="160" src={`textcase-${props.mode}.png`} alt="TextCase Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
                        </li>
                       
                    </ul>
                  
                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.enableMode} role="switch" id="mode" />
                            <label className="form-check-label" htmlFor="mode" >{props.mode === 'light'? 'Dark': 'Light'} Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutTitle: 'Add about title here'
}
