import React, { useState } from "react";
import styled from "styled-components";
import Search from "./Search";
import SearchResults from "./SearchResults";
import poolHall from "./assets/pub_pool.jpg";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  opacity: 0.6;
  z-index: -1;
`;

const Block = styled.div`
  height: 46vh;
`;
const Home = ({ bars, gameType, handleDelete }) => {
  // const [gameType, setGameType] = useState([]);
  // const [bars, setBars] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [form, setForm] = useState({
    gameTypes: [],
    city: [],
  });

  console.log(isSearched);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const gameTypeResult = await fetch(`http://localhost:9292/game_types`, {
  //       headers: { Accept: "application/json" },
  //     });
  //     const barsResult = await fetch(`http://localhost:9292/bars`, {
  //       headers: { Accept: "application/json" },
  //     });
  //     const parsedGameTypes = await gameTypeResult.json();
  //     const parsedBars = await barsResult.json();

  //     setGameType(parsedGameTypes);
  //     setBars(parsedBars);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {isSearched ? null : (
        <div>
          <Image src={poolHall} />
          <Block />
        </div>
      )}

      <div>
        <Search
          search={search}
          setSearch={setSearch}
          form={form}
          setForm={setForm}
          bars={bars}
          gameType={gameType}
          setIsSearched={setIsSearched}
        />
      </div>
      {isSearched ? (
        <SearchResults search={search} handleDelete={handleDelete} />
      ) : null}
    </div>
  );
};

export default Home;
