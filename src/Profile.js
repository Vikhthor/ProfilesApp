//import './App.css';

function Profile(props) {
  return (
    <div className="Profile">
      <section className="header">
        <h3 className="names">
            {props.profile.FirstName + ' ' + props.profile.LastName}
        </h3>
        <p className="email">
            {props.profile.Email}
        </p>
        <p className="phone">
            {props.profile.PhoneNumber}
        </p>
        <p className="username">
            Username: <span>{' ' + props.profile.UserName}</span>
        </p>
        <a
          className="Details"
          href="/#"
          target="_blank"
        >
          See Details
        </a>
      </section>
    </div>
  );
}

export default Profile;