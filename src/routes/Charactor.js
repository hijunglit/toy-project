import { Link } from 'react-router-dom';

function Charactor({ id, images, name, work }) {
    return (
        <div>
            <img src={images} alt={name} />
            <p>{name}</p>
            <p>{work}</p>
        </div>
    )
  }

  export default Charactor;