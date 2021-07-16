import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

//estilos
import "../stylesheet/App.scss";
import "../stylesheet/reset.scss";

//estructura web
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import CharacterNotFound from "./CharacterNotFound";
import Footer from "./Footer";

//servicios
import getMarvelData from "../services/api";
import localSt from "../services/localStorage";

const App = () => {
  //const charactersLocalStData = localSt.get("characters", []); //aquí controlo cuándo recoger los datos del local con el get. Declaro en array vacío para que la función no me retorne undefined y se rompa cuando llamo a characters al principio

  //estados

  const [heros, setHeros] = useState(localSt.get("heros", [])); // estado de datos y llamo a localStorage para que recoja los datos de characters
  const [filterName, setFilterName] = useState(localSt.get("filterName", ""));

  //effects
  useEffect(() => {
    if (heros.length === 0) {
      //si el array de personajes está vacío, llama a la API
      getMarvelData().then((heroData) => {
        setHeros(heroData);
      });
    }
  }, []);
  /*
  useEffect(() => {
    //ejecuta cosas en el montaje
    if (heros.length === 0) {
      //si el array de personajes está vacío, llama a la API
      getMarvelData().then((characterData) => {
        setCharacters(characterData);
      });
    }
  }, []); //parámetro que nos indica cuándo se debe ejecturar el use effect

  useEffect(() => {
    localSt.set("characters", characters);
  }, [characters]);

  useEffect(() => {
    localSt.set("name", filterName);
  }, [filterName]);



  //event handlers

  const handleFilter = (data) => {
    //función general para todos los filtros

    if (data.key === "name") {
      setFilterName(data.value);
    } 
    }
  };

  //render - pintado

  const filteredHeros = heros.filter((hero) => {
    return hero.name.toLowerCase().includes(filteredHeros.toLowerCase());
  });

  /*
  const renderCharacterDetail = (props) => {
    // renderear con rutas
    const routerCharacterId = props.match.params.characterId;
    const foundCharacter = heros.find((character) => {
      return character.id === parseInt(routerCharacterId);
    }); //parseInt(routerCharacterId)
    console.log("router props", routerCharacterId, foundCharacter);

    if (foundCharacter !== undefined) {
      //si no lo encuentra en el array
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <CharacterNotFound />;
    }
  };
*/
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <main className="main">
            <Filters
              filterName={filterName}
              // handleFilter={handleFilter}
            />

            {/*<CharacterList characters={filteredHeros} />*/}
          </main>
        </Route>
        {/* <Route path="/character/:characterId" render={renderCharacterDetail} />
        <Route path="*" component={CharacterNotFound} />*/}
      </Switch>
      <Footer />
    </>
  );
};

export default App;
