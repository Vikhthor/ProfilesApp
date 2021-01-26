function ProfileDetails(props) {
    const click = e => {
        e.preventDefault();
        props.goBack();
      }
    return (
        <div className="details">
            <div className="Profile row page-header">
                <div className="col-lg-12">
                    <h1>{props.profile.profile.FirstName + ' ' + props.profile.profile.LastName}</h1>
                    <a
                        className="back badge pull-right badge-default"
                        href="/#"
                        target="_blank"
                        onClick={click}
                        ><i className="fa fa-backward"></i>
                        {"  Go back"}
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-9">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2><i className="fa fa-address-card"></i> User Info</h2>
                                </div>
                                <div className="panel-body">
                                    <p><i className="fa fa-user"></i>{" Username: " + props.profile.profile.UserName}</p>
                                    <p><i className="fa fa-venus-mars"></i>{" Gender: " + props.profile.profile.Gender}</p>
                                    <p><i className="fa fa-envelope"></i>{" Email: " + props.profile.profile.Email}</p>
                                    <p><i className="fa fa-phone"></i>{" Phone number: " + props.profile.profile.PhoneNumber}</p>
                                </div>
                            </div>
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2><i className="fa fa-money-check-alt"></i> Transaction Info</h2>
                                </div>
                                <div className="panel-body">
                                    <p><i className="fa fa-barcode"></i>{" Credit card number: " + props.profile.profile.CreditCardNumber}</p>
                                    <p><i className="fa fa-credit-card"></i>{" Credit card type: " + props.profile.profile.CreditCardType}</p>
                                    <p><i className="fa fa-donate"></i>{" Payment method: " + props.profile.profile.PaymentMethod}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2><i className="fa fa-map-marker"></i> Map</h2>
                                </div>
                                <div className="panel-body">
                                    <p><i className="fa fa-map-marker"></i>{" Lat: " + props.profile.profile.Latitude + "Long: " + props.profile.profile.Longitude}</p>
                                    <img alt="location" src={"https://maps.googleapis.com/maps/api/staticmap?center="+props.profile.profile.Latitude+","+props.profile.profile.Longitude+"&zoom=12&size=400x400&key=AIzaSyDsgzJrRHZ2MEZugzy15aBMA1x9TxXaaYQ"}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                        <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2><i className="fa fa-network-wired"></i>Network info</h2>
                                </div>
                                <div className="panel-body">
                                    <p><i className="fa fa-site-map"></i>{" MacAddress: " + props.profile.profile.MacAddress}</p>
                                    <p><i className="fa fa-link"></i>{" URL: " + props.profile.profile.URL}</p>
                                    <p><i className="fa fa-clock"></i>{" Last login: " + props.profile.profile.LastLogin}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

    );
  }
  
  export default ProfileDetails;