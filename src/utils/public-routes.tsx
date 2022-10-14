import { useContext } from "react"
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/user-context"

const PublicRoutes = () => {
	let {isAuthenticated} = useContext(UserContext);

	if (!isAuthenticated) {
		return <Outlet />
	}

	return <Navigate to="/" />;
}

export default PublicRoutes;
