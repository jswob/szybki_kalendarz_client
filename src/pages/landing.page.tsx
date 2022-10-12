import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user-context";

const LandingPage = () => {
	const {user} = useContext(UserContext);

	return <>
		<div>
			<div>
				<span>Hello {user.email}!</span>
			</div>
			<Link to="/">come back</Link>
		</div>
	</>
}

export default LandingPage;

