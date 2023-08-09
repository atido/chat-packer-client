import { Link } from 'react-router-dom';
import './SignupLoginTemplate.css';
import './Form.css';

export default function SignupLoginTemplate({
  heading,
  subheading,
  buttonText,
  redirectText,
  redirectLink,
  redirectLinkText,
  errorMessage,
  handleSubmit,
  children,
}) {
  return (
    <div className="signupLoginDisplay">
      <div className="signupLogin__container">
        <div className="heading--SignupLogin">
          <h2>{heading}</h2>
          <i>{subheading}</i>
        </div>
        <div className="container--SignupLogin">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit} className="form--SignupLogin">
            {children}
            <button className="btn--SignupLogin btn btn--primary" type="submit">
              {buttonText}
            </button>
            <div className="text--SignupLogin">
              <span>{redirectText} </span>
              <Link to={redirectLink}>
                <span className="hyperlink--sm">{redirectLinkText}</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
