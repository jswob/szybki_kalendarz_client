import _ from "lodash";
import { createContext, ReactElement, useEffect, useState } from "react";
import { User } from "../models/user";
import axios, { AxiosError } from "axios";

type UserContextProps = {
	user?: User
	isAuthenticated: boolean
}

type UserDataState = {
	user?: User,
	error?: AxiosError,
	status: QueryStatus,
}

enum QueryStatus {
	PENDING = "pending",
	REJECTED = "rejected",
	RESOLVED = "resolved",
	IDLE = "idle",
}

const UserContext = createContext<UserContextProps>({
	user: {
		id: "",
		email: "",
		avatarUrl: ""
	},
	isAuthenticated: false,
})

const camelCaseTransform = (obj: object) => _.mapKeys(obj, (_v: any, k: string) => _.camelCase(k));

const UserContextProvider = (props: { children: ReactElement }): ReactElement => {
	const [userData, setUserData] = useState<UserDataState>({status: QueryStatus.IDLE});

	useEffect(() => {
		axios.get(`${import.meta.env.VITE_API_DOMAIN}/api/session`, {
			withCredentials: true,
		})
			.then(({data}) =>
				setUserData({
					user: camelCaseTransform(data.current_user),
					status: QueryStatus.RESOLVED,
				})
			)
			.catch(error =>
				setUserData({
					error: error,
					status: QueryStatus.REJECTED
				}));
	}, []);

	if (userData.user && userData.status === QueryStatus.RESOLVED) {
		return (
			<UserContext.Provider value={{
				user: userData.user,
				isAuthenticated: true
			}}>
				{props.children}
			</UserContext.Provider>
		)
	}

	if (userData.error && QueryStatus.REJECTED) {
		return (
			<UserContext.Provider value={{
				isAuthenticated: false
			}}>
				{props.children}
			</UserContext.Provider>
		)
	}

	if (QueryStatus.PENDING) {
		return <div>Loading...</div>
	}

	return <></>
}

export {UserContext, UserContextProvider};
