import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Masonry/styles';
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default App;
