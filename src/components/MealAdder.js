import React from 'react';
import './MealAdder.css';

class MealAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FoodList: []
    }
  }
  
  handleSubmit = () => {
    
  }

  render() {
    return (
      <form className="meal-adder">
        <input type="text" placeholder="Add meals" />
        <button className="meal-adder__submit"></button>
      </form>
    );
  }
}

export default MealAdder;