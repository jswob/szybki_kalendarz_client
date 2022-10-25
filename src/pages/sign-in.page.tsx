import { useContext } from 'react';
import { UserContext } from '../contexts/user-context';

interface AuthLink {
	endpoint: string;
	label: string;
}

const SignInPage = () => {
	const {user, isAuthenticated} = useContext(UserContext)
	const apiDomain = import.meta.env.VITE_API_DOMAIN;

	const options: AuthLink[] = [
		{
			endpoint: "/auth/sign-in/manager",
			label: "Zaloguj się jako osoba",
		},
		{
			endpoint: "/auth/sign-in/congregation",
			label: "Zalogój się jako zbór",
		},
	]

	console.log(user, isAuthenticated);

  return (
		<div>
			<ul>
				{options.map(option =>
					<li key={option.endpoint}>
						<a href={`${apiDomain}${option.endpoint}`}>{option.label}</a>
					</li>
				)}
			</ul>
		</div>
  );
};

export default SignInPage;

