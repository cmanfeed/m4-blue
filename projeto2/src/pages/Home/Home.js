import './Home.css';
import Card from "../../components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [games, setGames] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const getData = async () => {
      await axios.get("/game/findMany").then((response) => {
        if (mounted) {
          setGames(response.data);
        }
      });
    };
    getData();
  }, [mounted]);

  return (
    <div className="games container">
      <p className="main-title">Todos Os Jogos</p>
      <div className="card-area">
        {games.map((game) => (
          <Card
            id = {game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
