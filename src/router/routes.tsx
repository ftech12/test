import { BrowserRouter, Routes as Routing , Route } from 'react-router-dom';
import Home from '../pages/home';
import ProtecedRoute from '../utils/ProtecedRoute';
import Index from '../layout';
import Assesments from '../pages/Assesments';
import Splash from '../pages/Splash';
import Dashboard from '../pages/Dashboard';
import Auth from '../pages/Login';
import Popup from '../pages/Popup';

export default function Routes() {
  return (
    <BrowserRouter>
      <Routing>
        <Route path="/login" element={<Auth />} />
        <Route element={<ProtecedRoute/>}>
        <Route path="/" element={<Index />} >
        <Route path="/splash" element={<Splash />} />
        <Route path="/popup" element={<Popup/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/assesments" element={<Assesments />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        </Route>
      </Routing>
    </BrowserRouter>
  );
}
