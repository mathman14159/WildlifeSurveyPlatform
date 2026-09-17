

type CardProps = {
  name: string;
  image: string;
  count: number;
  onAdd: () => void;
  onSubtract: () => void;
};

function Card({ name, image, count, onAdd, onSubtract }: CardProps) {
  

  return (
    <div className="card">
      <img src={image} alt={name} />

      <h1>{name}</h1>

      <div className="counter">
        <button onClick={onSubtract}>-</button>

        <h2>{count}</h2>

        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
}





export default Card;