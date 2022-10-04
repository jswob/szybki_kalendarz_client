import { Routes, Route } from "react-router"
import LoginPage from "./pages/login.page"

export const Router = () => {
	return (
		<Routes>
			<Route index element={<LoginPage />} />
		</Routes>
	)
}
