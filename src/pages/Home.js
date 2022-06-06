import React, { useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';

const Home = () => {
  const initialState = { counter: 0 };
  const { t } = useTranslation();

  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { counter: state.counter + 1 };
      case 'sub':
        return { counter: state.counter - 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (localStorage.getItem('location') === null)
      navigator.geolocation.getCurrentPosition((response) => {
        const location = {
          lat: response.coords.latitude,
          lng: response.coords.longitude,
        };
        localStorage.setItem('location', JSON.stringify(location));
      });
  }, []);

  return (
    <div>
      <h1>{t('user_date', { today: new Date() })}</h1>
      <button onClick={() => dispatch({ type: 'sub' })}>-</button>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <p>{t('keyWithCount', { count: state.counter })}</p>
      <Footer />
    </div>
  );
};

export default Home;
