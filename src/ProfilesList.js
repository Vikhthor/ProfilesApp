import Profile from './Profile';

function Profiles(props) {
    return (
      <div className="Profiles">
       {props.profiles.map((profile) => 
        <Profile profile={profile}/>
       )}
      </div>
    );
  }
  
  export default Profiles;