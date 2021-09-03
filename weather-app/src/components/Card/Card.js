
function Card({ name, min, max, close }) {

  return (
    <div>
      <button onClick={close}>X</button>
      <h1>{name}</h1>
      <ul>
        <li>Min:{min}</li>
        <li>Máx:{max}</li>
      </ul>
    </div>
  )
}

export default Card
