import React from "react";
import './Galeria.css';


// criando a função galeria
function Galeria () {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
    const url = "https://swapi.dev/api/people/";

// buscando o url da API

fetch(url)   

     .then((response) => response.json())
     .then((json) => setData(json['results'])) 
     .catch((error) => console.log(error));   
  }, 
  []);

//lidando com problemas no código

React.useEffect(() => {
        if (data.length !== 0) {
        setIsLoading(false);
        }
        console.log(data);
    }, [data]);

    
    // página de espera

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        
        data.map((user) => (

// cards da API
    
        <div class="card">
        <div class="container">
            <p>Name - {user.name}</p>
            <p>Sex - {user.gender}</p>
            <p>Mass - {user.mass}</p> 
            <p>Hair color - {user.hair_color}</p>
            <p>Skin color - {user.skin_color}</p>
            <p>Eye color - {user.eye_color}</p>
            <p>Birth year - {user.birth_year}</p>
        </div>
        </div>
            
        ))
      )}
    </div>
    );
    }

// exportando para o App.jsx

    export default Galeria;