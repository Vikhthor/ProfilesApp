function ProfileDetails(props) {
    return (
        <div className="details">
            <div className="Profile row page-header">
                <div className="col-lg-12">
                    <h1>{props.profile.profile.FirstName + ' ' + props.profile.profile.LastName}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-9">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2>User Info</h2>
                                </div>
                                <div className="panel-body">
                                    <p>{"Username: " + props.profile.profile.UserName}</p>
                                    <p>{"Gender: " + props.profile.profile.Gender}</p>
                                    <p>{"Email: " + props.profile.profile.Email}</p>
                                    <p>{"Phone number: " + props.profile.profile.PhoneNumber}</p>
                                </div>
                            </div>
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2>Transaction Info</h2>
                                </div>
                                <div className="panel-body">
                                    <p>{"Credit card number: " + props.profile.profile.CreditCardNumber}</p>
                                    <p>{"Credit card type: " + props.profile.profile.CreditCardType}</p>
                                    <p>{"Payment method: " + props.profile.profile.PaymentMethod}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2>Map</h2>
                                </div>
                                <div className="panel-body">
                                    <p>{props.profile.profile.Longitude}</p>
                                    <p>{props.profile.profile.Latitude}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                        <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2>Other info</h2>
                                </div>
                                <div className="panel-body">
                                    <p>{"MacAddress: " + props.profile.profile.MacAddress}</p>
                                    <p>{"URL: " + props.profile.profile.URL}</p>
                                    <p>{"Last login: " + props.profile.profile.LastLogin}</p>
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