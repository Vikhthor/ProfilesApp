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
    this.onDetails = this.onDetails.bind(this);
    this.state = {profiles:[], details:{}, seeDetails: false}
  }
  filterList(gender, payMethod){
    const profiles = this.state.profiles.filter( profile => {
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
  componentWillMount(){
    const that = this;
    $.ajax('https://api.enye.tech/v1/challenge/records',
      {
        success: function (data, status, xhr){
          profiles = data.records.profiles;
          that.setState({profiles});
        }
      }
    )
  }
  render(){
    const {profiles, details, seeDetails} = this.state;
    const {filterList, onDetails} = this;
    return(
      (seeDetails)? <ProfileDetails profile={details}/> :
      <div>
        <FilterForm filterList={filterList}/>
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
