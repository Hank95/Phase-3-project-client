import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 40px;
  text-align: center;
  color: blue;
  background-color: grey;
  font-size: 45px;
`;

const Search = ({
  form,
  setForm,
  bars,
  search,
  setSearch,
  gameType,
  setIsSearched,
}) => {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let filterCity = bars.filter((bar) => bar.city === form.city);
    let fileterGames = [];
    filterCity.forEach((bar) => {
      bar.bar_game_types.forEach((game) => {
        if (game.game_type === form.gameTypes) {
          fileterGames.push(bar);
        }
      });
    });
    if (fileterGames.length === 0) {
      alert("Please select a game and city to search!");
      return;
    }
    setSearch(fileterGames);
    setIsSearched(true);
  };
  console.log(search);
  const reducedCities = (bars) => {
    let cities = bars.map((bar) => bar.city);
    return [...new Set(cities)];
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label for="gameTypes">Type of game</label>
        <select onChange={handleChange} name="gameTypes">
          <option value={null}>Game</option>
          {gameType.map((game) => (
            <option key={game.id} value={game.game_type}>
              {game.game_type}
            </option>
          ))}
        </select>
        <label for="city">Where are you playing?</label>
        <select onChange={handleChange} name="city">
          <option value={null}>City</option>

          {reducedCities(bars).map((bar) => {
            return (
              <option key={bar} value={bar}>
                {bar}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Search" />
      </form>
      {/* {search.map((bar) => {
        return (
          <div>
            <h1>Name: {bar.name}</h1>
            <p>{bar.description}</p>
            <p>{bar.rating}</p>
            <p>{bar.city}</p>
            <p>{bar.name}</p>
            {bar.bar_game_types.map((type) => {
              return <p> Game Type: {type.game_type}</p>;
            })}
          </div>
        );
      })} */}
    </Container>
  );
};

export default Search;
