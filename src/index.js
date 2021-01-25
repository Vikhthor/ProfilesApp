import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import $ from 'jquery';
import FilterForm from './FilterForm';
import ProfilesList from './ProfilesList';
import reportWebVitals from './reportWebVitals';

let profiles;

class Profiles extends React.Component{
  constructor(){
    super();
    this.filterList = this.filterList.bind(this);
    this.state = {profiles: []}
  }
  filterList(key, value){
    const profiles = this.state.profiles.filter( profile =>
      profile[key] === value);
    this.setState({profiles})
  }
  componentWillMount(){
    const that = this;
    $.ajax('https://api.enye.tech/v1/challenge/records',
      {
        success: function (data, status, xhr){
          // console.log(data);
          profiles = data.records.profiles;
          that.setState({profiles});
        }
      }
    )
  }
  render(){
    const {profiles} = this.state;
    const {filterList} = this;
    return(
      <div>
        <FilterForm filterList={filterList}/>
        <ProfilesList profiles={profiles} filterList={filterList}/>
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
