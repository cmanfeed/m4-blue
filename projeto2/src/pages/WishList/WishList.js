import Card from '../../components/Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WishList() {
  const [wishList, setWishList] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [notLogged, setNotLoggend] = useState(true);

  useEffect(() => {
    setMounted(true);

    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/game/myWishList", config).then((response) => {
        setNotLoggend(false);
        setWishList(response.data.games);
      });
    }
  }, [mounted]);

  return (
    <div className="games container">
      <p className="main-title">Todos Os Jogos</p>
      <div className="card-area">
        {wishList.map((game) => (
          <Card
            id={game.id}
            image={game.image}
            title={game.name}
            preco={game.price}
          />
        ))}
      </div>
    </div>
  );
}