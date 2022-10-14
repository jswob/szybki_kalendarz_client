import { Routes, Route } from "react-router"
import { UserContextProvider } from "./contexts/user-context"
import LandingPage from "./pages/landing.page"
import LoginPage from "./pages/login.page"
import SignInPage from "./pages/sign-in.page"
import PrivateRoutes from "./utils/private-routes"
import PublicRoutes from "./utils/public-routes"

const Router = () => {
	return (
		<UserContextProvider>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/" element={<LoginPage />} />
					<Route path="/landing" element={<LandingPage />} />
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path="/sign-in" element={<SignInPage />} />
				</Route>
			</Routes>
		</UserContextProvider>
	)
}

export default Router;
