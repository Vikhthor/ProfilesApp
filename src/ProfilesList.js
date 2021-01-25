import Profile from './Profile';

function ProfilesList(props) {
    return (
      <div className="Profiles row list-group">
       {props.profiles.map((profile) => 
        <Profile profile={profile}/>
       )}
      </div>
    );
  }
  
  export default ProfilesList;