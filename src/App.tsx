import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Layout } from './components/Masonry/styles';
import './App.css';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;
