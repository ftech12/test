import { Navigate, Outlet  } from 'react-router-dom';

function ProtecedRoute() {
    const isAuthenticated = localStorage.getItem('token') ? true : false;
  return (
   !isAuthenticated ? Navigate({ to: '/login' }) : <Outlet />
  )
}

export default ProtecedRoute