import Profile from './Profile';

function ProfilesList(props) {
    return (
      <div className="profiles row list-group">
       {props.profiles.map((profile) => 
        <Profile profile={profile} onDetails={props.onDetails}/>
       )}
      </div>
    );
  }
  
  export default ProfilesList;