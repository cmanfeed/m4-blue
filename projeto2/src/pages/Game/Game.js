import './Game.css';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Game() {
  const state = useLocation();
  const id = state.state;

  const [game, setGame] = useState({});
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/game/find/${id}`).then((response) => {
      if (mounted) {
        setGame(response.data);
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.get(`/game/wish/${id}`, config);
  };

  return (
    <div className="games container">
      <p className="main-title">{game.name}</p>
      <div className="game-area">
        <img src={game.image} alt="..." />
        <div className="game-info">
          <p>{game.storyline}</p>
          <div className="game-data">
            <p>Ano de Lançamento: {game.year}</p>
            <p>Preço: {game.price} R$</p>
          </div>
          <div className="button-area">
            <button className="btn btn-primary" onClick={wishGame}>
              Favoritar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
