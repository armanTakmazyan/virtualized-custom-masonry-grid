import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ImageDetailsPage } from './pages/ImageDetailsPage/index.tsx';
import { RootPage } from './pages/Root';
import App from './App.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RootPage />,
      },
      {
        path: '/image/:id',
        element: <ImageDetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
