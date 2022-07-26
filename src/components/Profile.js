import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (

        <div>      
        <img className="header-img" src={user.picture} alt={user.name}/>
        <h2>Hola, {user.name}, qué lindo es que estés aquí!</h2>
        <p>Iniciaste sesión con este correo: {user.email}</p>

        {/* <JSONPretty className="json-div" data={user} /> */}

        
    </div>
    )
  );
  
};

export default Profile;
