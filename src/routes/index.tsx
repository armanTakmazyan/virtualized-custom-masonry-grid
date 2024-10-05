import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        async lazy() {
          let { RootPage } = await import('../pages/Root');
          return {
            Component: RootPage,
          };
        },
      },
      {
        path: '/image/:id',
        async lazy() {
          let { ImageDetailsPage } = await import('../pages/ImageDetailsPage');
          return {
            Component: ImageDetailsPage,
          };
        },
      },
      {
        path: '*',
        async lazy() {
          let { NotFoundPage } = await import('../components/NotFoundPage');
          return {
            Component: NotFoundPage,
          };
        },
      },
    ],
  },
]);
