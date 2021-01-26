//import './App.css';

function Profile(props) {
  const click = e => {
    e.preventDefault();
    props.onDetails(props.profile);
  }
  return (
    <div className="Profile col-xs-12 list-group-item">
      <section className="profile">
        <h4 className="names">
            {props.profile.FirstName + ' ' + props.profile.LastName}
        </h4>
        <p className="email"><i className="fa fa-envelope"></i>
            <a href={"mailto:"+props.profile.Email}>{"  "+props.profile.Email}</a>
        </p>
        <p className="phone"><i className="fa fa-phone"></i>
            {"  "+props.profile.PhoneNumber}
        </p>
        <p className="username"><i className="fa fa-user"></i>
            {'  Username:' + props.profile.UserName}
        </p>
        <a
          className="Details badge pull-right badge-default"
          href="/#"
          target="_blank"
          onClick={click}
        >
          See Details
        </a>
      </section>
    </div>
  );
}

export default Profile;