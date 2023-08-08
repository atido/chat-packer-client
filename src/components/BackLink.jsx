import { Link } from 'react-router-dom';
import './BackLink.css';

export default function BackLink(align) {
  return (
    <div className="back-link">
      <img className="back-link__img" src="/back-arrow.svg" alt="back arrow" />
      <div className="back-link__text">
        <Link to="/trips">Back to trip list</Link>
      </div>
    </div>
  );
}
