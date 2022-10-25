import { useContext } from "react";
import { UserContext } from "../contexts/user-context";

const LoginPage = () => {
	const {user} = useContext(UserContext);

  return (
		<div>
			<h1>Szybki Kalendarz!</h1>

			<span>{user?.email}</span> - <span>{user?.accountType}</span>
		</div>
  );
};

export default LoginPage;

