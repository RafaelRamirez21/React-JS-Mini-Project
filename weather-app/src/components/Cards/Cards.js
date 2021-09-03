import data from '../../data'
import Card from '../Card/Card';

function Cards() {
  return (
    <div>
      {
        data.map(city => <Card name={city.name} min={city.main.temp_min} max={city.main.temp_max} close={() => alert(city.name)} />)
      }
    </div>
  )
}

export default Cards
