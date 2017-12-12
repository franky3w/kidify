import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class KidForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.kid ? props.kid.firstName : '',
      lastName: props.kid ? props.kid.lastName : '',
      createdAt: props.kid ? moment(props.kid.createdAt) : moment(),
      currentGroup: props.kid ? props.kid.currentGroup : '',
      calendarFocused: false,
      error: ''
    };
  }
  
  onCurrentGroupChange = (e) => {
    const currentGroup = e.target.value;
    this.setState(() => ({ currentGroup }));
  };
  
  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.lastName) {
      this.setState(() => ({ error: 'SVP, préciser le prénom et le nom.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        createdAt: this.state.createdAt.valueOf(),
        currentGroup: this.state.currentGroup
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Prénom"
          autoFocus
          className="text-input"
          value={this.state.firstName}
          onChange={this.onFirstNameChange}
        />

        <input
          type="text"
          placeholder="Nom de famille"
          className="text-input"
          value={this.state.lastName}
          onChange={this.onLastNameChange}
        />

        <input
        type="text"
        placeholder="Groupe"
        className="text-input"
        value={this.state.currentGroup}
        onChange={this.onCurrentGroupChange}
      />

      <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <h3>ID: {this.props.kid ? this.props.kid.id : 'n/a'}</h3>
        <div>
          <button className="button">Sauvegarder</button>
        </div>
      </form>
    )
  }
}
