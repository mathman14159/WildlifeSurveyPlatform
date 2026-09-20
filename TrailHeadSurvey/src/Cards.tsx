//Creates cards for site

type CardProps = {
  name: string;
  image: string;
  count: number;
  onAdd: () => void;
  onSubtract: () => void;
  value: string;
  onValueChange: (value:string) => void;
};

function Card({ name, image, count, onAdd, onSubtract, value, onValueChange}: CardProps) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <div className="card">
      <img src={image} alt={name} />

      <h1>{name}</h1>

      <div className="counter">
        <button onClick={onSubtract}>-</button>

        <h2>{count}</h2>

        <button onClick={onAdd}>+</button>
      </div>
      <div>
        <p>Info About The Sighting</p>
        <input type="text" value={value} onChange={handleChange}>

        </input>
      </div>
    </div>
  );
}


export default Card;