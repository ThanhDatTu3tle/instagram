import config from '~/config';

// Layouts
// import { DefaultLayout, HeaderOnly } from '~/layouts/';

// Pages
import Home from '~/pages/Home';
import Explore from '~/pages/Explore';


const publicRoutes = [
  { path: config.routes.home, component: Home,  layout: DefaultLayout  },
  { path: config.routes.explore, component: Explore, layout: DefaultLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes };
