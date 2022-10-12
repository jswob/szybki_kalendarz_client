import { withCookies } from "react-cookie"
import { Routes, Route } from "react-router"
import { UserContextProvider } from "./contexts/user-context"
import LandingPage from "./pages/landing.page"
import LoginPage from "./pages/login.page"

const Router = () => {
	return (
		<UserContextProvider>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/landing" element={<LandingPage />} />
			</Routes>
		</UserContextProvider>
	)
}

export default withCookies(Router);
