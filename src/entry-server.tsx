import { CookiesProvider } from "react-cookie";
import Router from "./router";
import { StaticRouter } from "react-router-dom/server";
import ReactDOMServer from "react-dom/server";

interface IRenderProps {
  path: string;
}

export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
			<Router />
    </StaticRouter>
  );
};
