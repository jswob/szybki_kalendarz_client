import axios from "axios";
import { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/user-context";

const LoginPage = () => {
	const {user} = useContext(UserContext);

	const signOut = () => {
		axios.get(`${import.meta.env.VITE_API_DOMAIN}/auth/logout`, {
			withCredentials: true,
		})
		.then((_data) => window.location.reload())
		.catch(({message, name}) => {
			toast.error(`${message} -> ${name}`)
		});
	}

  return <>
		<div>
			<h1>Szybki Kalendarz!</h1>

			<span>{user?.email}</span> - <span>{user?.accountType}</span>

			<button onClick={signOut}>
				Wyloguj się
			</button>
		</div>
  </>;
};

export default LoginPage;

