import React, { useState, useEffect } from "react";
import HeroesForm from "../HeroesForm/HeroesForm";
import HeroesSearch from "../HeroesSearch/HeroesSearch";
import HeroesCard from "../HeroesCard/HeroesCard";


const BASE_URL = 'https://json-server-pj-backend.herokuapp.com/heroes';

function HeroesContainer() {
    const [showForm, setShowForm] = useState(false);
    const [hero, setHero] = useState([]);
    const [search, setSearch] = useState("");
  
    function handleClick() {
      setShowForm((showForm) => !showForm);
    }
  
    function handleHide() {
      setShowForm(false);
    }
  
    //Recover the data
    useEffect(() => (
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((heroData) => setHero(heroData))
    ),[]);
  
    function handleAddHero(newHero) {
      const updatedHeroes = [...hero, newHero];
      setHero(updatedHeroes);
    }
  
    function handleDeleteHero(id) {
      const updatedHeroes = hero.filter((heroList) => heroList.id !== id);
      setHero(updatedHeroes);
    }
  
    const displayHeroes = hero.filter((heroesList) => {
      return heroesList.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            <p>Heroes Container</p>
            <HeroesForm />
            <HeroesSearch onSearch={search} onSearchChange={setSearch} />
            { hero.displayHeroes === 0
              ? <h1>Loading...</h1>
              :displayHeroes.map(hero => {
                return < HeroesCard 
                          key={hero.id} 
                          hero={hero}
                          />
              })

            }
            
        </div>
    );
}

export default HeroesContainer;