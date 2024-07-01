import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss'
import { privateRoutes, publicRoutes } from './routes';
import authStore from './store/authStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { IUser } from './model/IUser';

const App = observer(() => {
  const { setAuth, setUser, state } = authStore;

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
      setUser({ email: localStorage.getItem('email' || '') } as IUser);
    }
  }, []);

  return (
    <Routes>
      {state.isAuth ? (
        privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />} />
        )
      ) : (
        publicRoutes.map(route =>
          <Route key={route.path} path={route.path} element={<route.element />} />
        )
      )}
      {!state.isAuth && <Route path="/" element={<Navigate replace to="/start_page" />} />}
      {!state.isAuth && <Route path="*" element={<Navigate replace to="/start_page" />} />}
      {state.isAuth && <Route path="/" element={<Navigate replace to="/home" />} />}
      {state.isAuth && <Route path="*" element={<Navigate replace to="/home" />} />}
    </Routes>
  );
});

export default App;