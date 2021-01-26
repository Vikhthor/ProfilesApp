import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import $ from 'jquery';
import FilterForm from './FilterForm';
import ProfilesList from './ProfilesList';
import ProfileDetails from './ProfileDetails';
import reportWebVitals from './reportWebVitals';

let profiles;

class Profiles extends React.Component{
  constructor(){
    super();
    this.filterList = this.filterList.bind(this);
    this.searchProfile = this.searchProfile.bind(this);
    this.onDetails = this.onDetails.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {profiles:[], allProfiles:[], details:{}, seeDetails: false, searchResult: false, searchValue:''}
  }
  filterList(gender, payMethod){
    const profiles = this.state.allProfiles.filter( profile => {
      if(gender && payMethod){
        return profile.Gender === gender && profile.PaymentMethod === payMethod;
      } else if(gender){
        return profile.Gender === gender;
      } else if(payMethod){
        return profile.PaymentMethod === payMethod;
      } else if(!gender && !payMethod){
        return true;
      }
    });
    this.setState({profiles})
  }
  onDetails(profile){
    this.setState({details:{profile}, seeDetails: true})
  }
  goBack(){
    const { allProfiles } = this.state;
    this.setState({ profiles: allProfiles, seeDetails: false});
  }
  searchProfile(value){
    const search = new RegExp(value, 'i');
    const profiles = this.state.allProfiles.filter( profile => {
      if(!value){
        return true;
      } else if(search.test(profile.FirstName) ||
          search.test(profile.LastName)
        ){
        return profile
      }
    });
    this.setState({profiles, searchResult: true, searchValue: value})
  }
  componentWillMount(){
    const that = this;
    $.ajax('https://api.enye.tech/v1/challenge/records',
      {
        success: function (data, status, xhr){
          const allProfiles = data.records.profiles;
          that.setState({allProfiles, profiles: allProfiles});
        }
      }
    )
  }
  render(){
    const {profiles, details, seeDetails} = this.state;
    const {filterList, onDetails, searchProfile, searchResult, searchValue, goBack} = this;
    return(
      (seeDetails)? <ProfileDetails profile={details} goBack={goBack}/> :
      <div>
        <FilterForm filterList={filterList} searchProfile={searchProfile} searchValue={searchValue} searchResult={searchResult}/>
        <ProfilesList profiles={profiles} onDetails={onDetails} filterList={filterList}/>
      </div>
    )
  }
};
ReactDOM.render(
  <React.StrictMode>
    <Profiles/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
