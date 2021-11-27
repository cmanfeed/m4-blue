import './Card.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Card(props) {
  const navigate = useNavigate();

  const goToGamePage = () => {
    navigate("/game", { state: props.id });
  };

  const wishGame = () => {
    const token = localStorage.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const id = props.id;

    axios.get(`/game/wish/${id}`, config);
  };

  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className='btn-card-area'>
          <button className="btn btn-primary" onClick={goToGamePage}>
            Detalhes
          </button>
          <button className="btn btn-secondary" onClick={wishGame}>
            Favoritar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
