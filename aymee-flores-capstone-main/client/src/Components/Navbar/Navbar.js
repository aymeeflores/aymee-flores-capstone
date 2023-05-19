import React from "react";
import "./Navbar.scss";
// import Avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { LinkContainer } from "react-router-bootstrap";
import Constants from "../../constants";

class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		};
	}

	render() {
		const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
			<div
				ref={ref}
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}
			>
				{children}
			</div>
		));

		return (
			<>
				<nav className="navbar">
					<div className="container-fluid">
						<LinkContainer to="/">
							<div className="navbar__brand">Resident Social</div>
						</LinkContainer>

						<div className="collapse navbar-collapse" id="navbarColor01">
							<ul className="navbar-nav me-auto">
								<li className="nav-item">
									<Link to="/" className="nav-link active">
										Home
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/events" className="nav-link">
										Events
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/members" className="nav-link active">
										Members
									</Link>
								</li>
							</ul>
						</div>

						<Dropdown>
							<Dropdown.Toggle as={CustomToggle} id="dropdown-avatar">
								<div className="navbar__avatar">
									<img src={`${Constants.API_URL}/${this.props.user?.avatar}`} alt="profile icon" />
								</div>
							</Dropdown.Toggle>

							<Dropdown.Menu>
								<LinkContainer to="/profile">
									<Dropdown.Item>Settings</Dropdown.Item>
								</LinkContainer>
								<Dropdown.Item onClick={this.props.dologoutfnc}>Logout</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</nav>
			</>
		);
	}
}

export default Navbar;
