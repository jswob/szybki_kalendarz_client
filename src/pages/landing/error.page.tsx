import { Navigate } from "react-router";
import { toast } from "react-toastify";

interface LandingErrorPageProps {
	message: string;
}

const LandingErrorPage = ({message}: LandingErrorPageProps) => {
	toast.error(message);

	return <Navigate to="/sign-in" />
}

export default LandingErrorPage;
