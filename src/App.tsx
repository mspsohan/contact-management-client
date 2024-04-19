import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div>
      <Header />
      <div className="p-10 w-full min:h-[85vh] overflow-auto bg-gradient-to-tr from-green-200 via-indigo-200 to-pink-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;