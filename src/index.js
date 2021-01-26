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
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.state = {profiles:[], allProfiles:[], details:{}, seeDetails: false, searchResult: false, searchValue:'',
        firstPage: true, lastPage: false, page: 1 }
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
  nextPage(){
    const { profiles, page, allProfiles } = this.state;
    let lastPage=false;
    let firstPage=true;
    let pageProfiles=profiles;
    let newPage=page;
    if(page === 1){
      if(allProfiles.slice(20,40).length !== 0){
        pageProfiles = allProfiles.slice(20,40);
        newPage = page + 1;
        firstPage = false;
      } 
      if(allProfiles.slice(20,40).length < 20){
        lastPage = true;
      }
    }
    if(page === 2){
      if(allProfiles.slice(40,60).length !== 0){
        pageProfiles = allProfiles.slice(40,60);
        newPage = page + 1;
        firstPage = false;
      } 
      if(allProfiles.slice(40,60).length < 20){
        lastPage = true;
      }
    }
    if(page === 3){
      if(allProfiles.slice(60,80).length !== 0){
        pageProfiles = allProfiles.slice(60,80);
        newPage = page + 1;
        firstPage = false;
      } 
      if(allProfiles.slice(60,80).length < 20){
        lastPage = true;
      }
    }
    if(page === 4){
      if(allProfiles.slice(80,100).length !== 0){
        pageProfiles = allProfiles.slice(80,100);
        newPage = page + 1;
        firstPage = false;
      } 
      if(allProfiles.slice(80,100).length < 20){
        lastPage = true;
      }
    }
    if(page === 5){
      if(allProfiles.slice(100,120).length !== 0){
        pageProfiles = allProfiles.slice(100,120);
        newPage = page + 1;
        firstPage = false;
      }
      if(allProfiles.slice(100,120).length < 20){
        lastPage = true;
      }
    }
    this.setState({lastPage, firstPage, profiles: pageProfiles, page: newPage})
  }
  prevPage(){
    const { page, allProfiles } = this.state;
    let pageProfiles;
    let firstPage = true;
    let newPage = page;
    if(page > 1){
      firstPage = false;
    }
    if(page === 6){
      pageProfiles = allProfiles.slice(80,100);
      newPage = page - 1;
    }
    if(page === 5){
      pageProfiles = allProfiles.slice(60,80);
      newPage = page - 1;
    }
    if(page === 4){
      pageProfiles = allProfiles.slice(40,60);
      newPage = page - 1;
    }
    if(page === 3){
      pageProfiles = allProfiles.slice(20,40);
      newPage = page - 1;
    }
    if(page === 2){
      pageProfiles = allProfiles.slice(0,20);
      newPage = page - 1;
      firstPage = true;
    }
    this.setState({firstPage, profiles: pageProfiles, page: newPage})
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
          const pageProfiles = allProfiles.slice(0, 20);
          that.setState({allProfiles, profiles: pageProfiles, page:1});
        }
      }
    )
  }
  render(){
    const {profiles, details, seeDetails, searchResult, searchValue, page, firstPage, lastPage } = this.state;
    const {filterList, onDetails, searchProfile, goBack, prevPage, nextPage } = this;
    return(
      (seeDetails)? <ProfileDetails profile={details} goBack={goBack}/> :
      <div>
        <FilterForm filterList={filterList} searchProfile={searchProfile} searchValue={searchValue} searchResult={searchResult}/>
        <ProfilesList profiles={profiles} onDetails={onDetails} filterList={filterList} page={page} 
          prevPage={prevPage} nextPage={nextPage} firstPage={firstPage} lastPage={lastPage}/>
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
