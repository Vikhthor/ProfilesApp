import Profile from './Profile';

function ProfilesList(props) {
  const prev = e => {
    e.preventDefault();
    props.prevPage();
  }
  const next = e => {
    e.preventDefault();
    props.nextPage();
  }
    return (
      <div>
        <div className="profiles row list-group">
          {props.profiles.map((profile) => 
            <Profile profile={profile} onDetails={props.onDetails}/>
          )}
        </div>
        <div className="pagination">
          {(!props.firstPage && !props.lastPage)? <p>Page {props.page}
          <span className="pull-right">
          <a className="back badge badge-default" href="/#" target="_blank" onClick={prev}>
            <i className="fa fa-fast-backward"></i>{"  Prev  "}</a>
          <a className="back badge badge-default" href="/#" target="_blank" onClick={next}>
            <i className="fa fa-fast-forward"></i>{"  Next  "}</a></span>
          </p> : (props.firstPage)? 
          <p>Page {props.page}
          <span className="pull-right">
          <a className="back badge badge-default" href="/#" target="_blank" onClick={next}>
            <i className="fa fa-fast-forward"></i>{"  Next  "}</a></span>
          </p> : (props.lastPage)?
          <p>Page {props.page}
          <span className="pull-right">
          <a className="back badge badge-default" href="/#" target="_blank" onClick={prev}>
            <i className="fa fa-fast-backward"></i>{"  Prev  "}</a></span>
          </p> : <div></div>
        }
        </div>
      </div>
      
    );
  }
  
  export default ProfilesList;