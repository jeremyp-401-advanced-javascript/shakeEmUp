import React from 'react';

export const AppSettingsContext = React.createContext();

class AppSettings extends React.Component{
  constructor(props){
    super(props);
    this.state={
      diceNum: 2,
      diceType: 6,
      updateNumber: this.updateNumber,
      updateType: this.updateType,
    }
  }

  updateNumber = (num) => {
    this.setState( diceNum = num); 
  }
  
  updateType = (type) => {
    this.setState( diceType = type); 
  }

  render(){
    return(
      <AppSettingsContext.Provider value={this.state}>
        {this.props.children}
      </AppSettingsContext.Provider>
    )
  }
}

export default AppSettings;