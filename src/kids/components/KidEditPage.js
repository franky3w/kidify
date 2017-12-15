import React from 'react';
import { connect } from 'react-redux';
import KidForm from './KidForm';
import { startEditKid, startRemoveKid } from '../actions/kidsData';

export class KidEditPage extends React.Component {
  onSubmit = (kid) => {
    this.props.startEditKid(this.props.kid.id, kid);
    this.props.history.push('/');
  };

  onRemove = () => {
    console.log("this", this.props.kid.firstName)
    this.props.startRemoveKid({ id: this.props.kid.id });
    this.props.history.push('/');
  };
  
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edition : {this.props.kid.firstName} {this.props.kid.lastName}</h1>
          </div>
        </div>
        <div className="content-container">
          <KidForm
            kid={this.props.kid}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Supprimer</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  kid: state.kids.find((kid) => kid.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditKid: (id, kid) => dispatch(startEditKid(id, kid)),
  startRemoveKid: (data) => dispatch(startRemoveKid(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(KidEditPage);
