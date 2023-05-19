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
				<section class="navigation">
					<div class="nav-container">
						<div class="brand">
							<Link to="/">Resident Social</Link>
						</div>
						<nav>
							<div class="nav-mobile">
								<a id="nav-toggle" href="#!">
									<span></span>
								</a>
							</div>
							<ul class="nav-list">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/events">Events</Link>
								</li>

								<li>
									<Link to="/members">members</Link>
								</li>
								<li>
									<Link to="/" onClick={this.props.dologoutfnc}>
										Logout
									</Link>
								</li>
							</ul>
						</nav>
						{/* <img className="nav-container__avatar" src={`${Constants.API_URL}/${this.props.user?.avatar}`} alt="profile icon" /> */}
					</div>
				</section>
			</>
		);
	}
}

export default Navbar;
