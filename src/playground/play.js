import React from 'react';
import ReactDOM from 'react-dom';

import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: ['apple','watermelon']
    };
  }
 
  componentDidMount() {
    // Add orange and remove watermelon after 5 seconds
    setTimeout(() => {
      this.setState({
        fruits: ['apple','orange']
      });
    }, 5000);
  }
 
  render() {
    // the checkboxes can be arbitrarily deep. They will always be fetched and
    // attached the `name` attribute correctly. `value` is optional
    return (
      <CheckboxGroup
        name="fruits"
        value={this.state.fruits}
        onChange={this.fruitsChanged}>
 
        <label><Checkbox value="apppple"/> Apple</label>
        <label><Checkbox value="orange"/> Orange</label>
        <label><Checkbox value="watermelon"/> Watermelon</label>
      </CheckboxGroup>
    );
  }
  
  fruitsChanged = (newFruits) => {
    this.setState({
      fruits: newFruits
    });
  }
  
};
 
ReactDOM.render(<Demo/>, document.body);
