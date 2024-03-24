import Loading from "../components/loading";
import loadable from "../utils/loadable";

export const Home = loadable(() => import("./Home"), {
  fallback: <Loading />,
});

export const Article = loadable(() => import("./Article"), {
  fallback: <Loading />,
});

export const NewsFeed = loadable(() => import("./NewsFeed"), {
  fallback: <Loading />,
});
