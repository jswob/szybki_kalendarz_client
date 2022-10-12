import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import { useLocation } from 'react-router-dom';
// import { ReactComponent as GoogleLogo } from '../assets/google.svg';
import { getGoogleUrl } from '../utils/getGoogleUrl';

const LoginPage = () => {
  const location = useLocation();
  let from = ((location.state as any)?.from?.pathname as string) || '/';

  return (
		<div>
			<h1>Szybki Kalendarz!</h1>
		</div>
  );
};

export default LoginPage;

