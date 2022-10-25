import LandingErrorPage from "../error.page";

interface LandingErrorPageProps {
	message: string;
}

const WrongAccountTypePage = () => {
	return <LandingErrorPage message="Ten email został już przypisany do innego typu konta (zarządcy lub zboru)." />
}

export default WrongAccountTypePage;
