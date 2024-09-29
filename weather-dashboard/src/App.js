import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';
import Highlights from './components/Highlights';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const handleSearch = () => {
    toast('Search Button Clicked');
  };

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <ToastContainer />
        <Header />
        <div className="row">
          <WeatherCard onSearch={handleSearch} />
          <div className="col-12 col-md-8 main-card">
            <Forecast />
            <Highlights />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
