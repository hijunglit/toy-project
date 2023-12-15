import { Link } from 'react-router-dom';

function Charactor({ id, images, name, work }) {
    return (
        <div>
            <Link to={`charactor/${id}`}>
                <img src={images} alt={name} />
            </Link>
            <p>{name}</p>
            <p>{work}</p>
        </div>
    )
  }

  export default Charactor;