import "./card.css";

const Card = ({monster: {name, email, id } }) => (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set10&180x180`}
        alt={`Monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
export default Card;
