//import './App.css';

function Profile(props) {
  return (
    <div className="Profile col-xs-12 list-group-item">
      <section className="header">
        <h4 className="names">
            {props.profile.FirstName + ' ' + props.profile.LastName}
        </h4>
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
          className="Details badge pull-right badge-default"
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