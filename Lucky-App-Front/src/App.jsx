import React, { useState } from 'react';
import './App.scss';
import UserRegister from './pages/UsersRegister/UsersRegister';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import OnBoarding1 from "./pages/onBoarding/OnBoarding1";
import OnboardingSections from './pages/onBoarding/OnboardingSections';
import AccessLogin from './pages/Login/AccessLogin';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Map from './pages/Map/Map';
import Navegation from '../src/pages/Navegation/Navegation'
import MisMascotas from './pages/MisMascotas/MisMascotas';
import MiPerfil from './pages/MiPerfil/MiPerfil';
import PrivateRoute from './Shared/Componentes/PrivateRoute/PrivateRoute';
import Plus from './pages/Plus/Plus';
import FilterPage from './pages/FilterPage/FilterPage';
import FormAdoption from './pages/FormAdoption/FormAdoption';
import ResultFilter from './pages/ResultFilter/ResultFilter';
import Buscador from './Shared/Componentes/Buscador/Buscador';
// import Enviado from './pages/FormAdoption/Enviado';
import Salud from './pages/ProfileDataPet/Salud';
import Protectora from './pages/Protectora/Protectora';
import EstadoAdopcion from './pages/EstadoAdopcion/EstadoAdopcion';
import ProfileAdoptionPet from './pages/ProfileDataPet/ProfileAdoptionPet';
import ProfileDataPet from './pages/ProfileDataPet/ProfileDataPet';
import UploadImage from './pages/MiPerfil/UploadImage/UploadImage';
import PetForm from './pages/PetForm/PetForm';
import PetFormProtectora from './pages/PetForm/PetFormProtectora';
import MapInfo from './pages/Map/MapInfo';





function App() {

  const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));



  return (
    <div>

      <Router>
        {/* <AuthButton isLogged={isLogged} fnSetIsLogged={setIsLogged} /> */}
        <div className="">

          <Switch>


          <Route path="/uploadImage">
              {isLogged && <UploadImage isLogged={isLogged} />}
            </Route>
            <Route path="/petformprotectora">
               <PetFormProtectora />
            </Route>

            <Route path="/mapinfo">
               <MapInfo />
            </Route>

            <Route path="/petform">
              {isLogged && <PetForm isLogged={isLogged} />}
            </Route>

            <Route path="/profilepet/:nombre">
              {isLogged && <ProfileDataPet isLogged={isLogged} />}
            </Route>

            <Route exact path="/profilepet">
              {isLogged && <ProfileDataPet isLogged={isLogged} />}
            </Route>

            <Route path="/salud/:nombre">
              <Salud />
            </Route>

            <Route path="/profileadoptionpet/:nombre">
              {isLogged && <ProfileAdoptionPet isLogged={isLogged} />}
            </Route>
      
            <Route path="/resultfilter">
              {isLogged && <ResultFilter isLogged={isLogged} />}
            </Route>

            {/*  <Route path="/enviado">
             <Route path="/enviado">
              <Enviado></Enviado>
            </Route> */}

            <Route path="/filtro">
              {isLogged && <FilterPage isLogged={isLogged} />}
            </Route>

            <Route path="/navegation">
              {isLogged && <Navegation isLogged={isLogged} />}
            </Route>
            <Route path="/untited_sections">
              <OnboardingSections />
            </Route>

            <Route path="/AccessLogin">
              <AccessLogin />
            </Route>
             
            <Route path="/protectora">
              <Protectora />
            </Route>

            <PrivateRoute path="/plus">
              <Plus />
            </PrivateRoute>


            <PrivateRoute path="/estadoadopcion">
              <EstadoAdopcion></EstadoAdopcion>
            </PrivateRoute>


            <PrivateRoute path="/buscador">
              <Buscador />
            </PrivateRoute>

            <Route path="/register">
              <UserRegister></UserRegister>
            </Route>
            <Route path="/login">
              <Login fnSetIsLogged={setIsLogged} />
            </Route>
            <Route path="/mapa">
              <Map />
            </Route>
            <Route path="/perfil">
              <MiPerfil />
            </Route>
            <Route path="/misMascotas">
              <MisMascotas />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/adopcion/:nombre">
              <FormAdoption />
            </Route>

            <Route path="/">
              <OnBoarding1 />
            </Route>


          </Switch>

        </div>
      </Router>


    </div>

  );
}
export default App;
