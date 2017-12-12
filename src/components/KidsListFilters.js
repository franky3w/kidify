import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setKidsTextFilter, setShowKidsActive, setShowKidsInactive } from '../actions/kidsFilters';

export class KidsListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onCheckboxChange = (e) => {
    this.props.setActiveFilter(e.includes ('showActive'));
    this.props.setInactiveFilter(e.includes ('showInactive'));
  };

  checkboxCurrentState = () => {
    return (
      this.props.filters.showActive ? ['showActive'] : []
    ).concat(
      this.props.filters.showInactive ? ['showInactive'] : []
    );
  };
  
  render() {
    return (
      <div className="content-container">
        <div className="input-group">

          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Filtre prénom ou nom"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>

          <div>
            <CheckboxGroup
              value={this.checkboxCurrentState()}
              onChange={this.onCheckboxChange}>
              <label><Checkbox value="showActive"/> Actif</label>
              <label><Checkbox value="showInactive"/> Inactif</label>
            </CheckboxGroup>
          </div>
  
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.kidsFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setKidsTextFilter(text)),
  setActiveFilter : (show) => dispatch(setShowKidsActive(show)),
  setInactiveFilter : (show) => dispatch(setShowKidsInactive(show))
});

export default connect(mapStateToProps, mapDispatchToProps)(KidsListFilters);
