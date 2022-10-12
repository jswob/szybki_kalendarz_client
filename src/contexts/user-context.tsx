import _ from "lodash";
import { createContext, ReactElement, useEffect, useState } from "react";
import { User } from "../models/user";
import axios, { AxiosError } from "axios";

type UserContextProps = {
	user: User
}

const UserContext = createContext<UserContextProps>({
	user: {
		id: "some",
		email: "some@some.some",
		avatarUrl: "some"
	}
})

const camelCaseTransform = (obj: object) => _.mapKeys(obj, (_v: any, k: string) => _.camelCase(k));

const UserContextProvider = (props: { children: ReactElement }): ReactElement => {
	const [user, setUser] = useState<User>();
	const [error, setError] = useState<AxiosError>();

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_API_DOMAIN}/api/session`, {
			withCredentials: true,
		})
			.then(({data}) => setUser(camelCaseTransform(data.current_user)))
			.catch((error: AxiosError) => setError(error));
	}, []);

	if (user) {
		return (
			<UserContext.Provider value={{
				user: user
			}}>
				{props.children}
			</UserContext.Provider>
		)
	}

	if (error && error.response?.status === 401) {
		window.location.replace(`${import.meta.env.VITE_API_DOMAIN}/auth/google`);
	}

	return <div>Loading...</div>
}

export {UserContext, UserContextProvider};
