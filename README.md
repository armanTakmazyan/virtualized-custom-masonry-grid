# Masonry Grid

A React application for creating a virtualized masonry grid.
For demonstration purposes, the Pexels API has been utilized. You can find the documentation at [Pexels API Documentation](https://www.pexels.com/api/documentation/).

## Tools

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Vitest](https://vitest.dev)
- [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- [Styled Component](https://styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Ahooks](https://ahooks.js.org/hooks/use-request/index)
- [Framer Motion](https://www.framer.com/motion/)
- [EsLint](https://www.npmjs.com/package/eslint)
- [Prettier](https://prettier.iot)

## Required Installations

The following should be installed in your machine

- Node v20.17.0
- Yarn v1.22.22

## How to Install and Run the Application Locally

1.  Clone the Git repository.
2.  Rename `.env.example` to `.env`.
3.  Add your access key by setting `VITE_PEXELS_API_KEY=` in the `.env` file.
4.  Install all dependencies by running `yarn install`.
5.  Start the application in development mode with `yarn dev`.
6.  Run the tests by executing `yarn test`.

## How I Optimized Performance

1.  I used `React.lazy` for code-splitting and lazy loading with `react-router-dom`.
2.  I applied memoization when needed (e.g., `useMemo`, `useCallback`, etc.).
3.  I implemented Masonry Grid virtualization to remove offscreen elements from the DOM.
