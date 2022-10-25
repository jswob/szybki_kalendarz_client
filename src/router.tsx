import { Routes, Route } from "react-router"
import { ToastContainer } from "react-toastify"
import { UserContextProvider } from "./contexts/user-context"
import LandingPage from "./pages/landing.page"
import WrongAccountTypePage from "./pages/landing/error/wrong-account-type.page"
import LoginPage from "./pages/login.page"
import SignInPage from "./pages/sign-in.page"
import PrivateRoutes from "./utils/private-routes"
import PublicRoutes from "./utils/public-routes"
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
	return (<>
		<UserContextProvider>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path="/" element={<LoginPage />} />
					<Route path="/landing" element={<LandingPage />} />
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path="/sign-in" element={<SignInPage />} />
					<Route path="/landing/error/wrong-account-type" element={<WrongAccountTypePage />} />
				</Route>
			</Routes>
		</UserContextProvider>
		<ToastContainer />
	</>
	)
}

export default Router;
