import { Outlet } from 'react-router-dom';
import { ApplicationErrorBoundary } from './components/ApplicationErrorBoundary';
import { Header } from './components/Header';
import { Layout } from './components/Masonry/styles';
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <ApplicationErrorBoundary>
      <Layout>
        <Header />
        <Outlet />
      </Layout>
    </ApplicationErrorBoundary>
  );
};

export default App;
