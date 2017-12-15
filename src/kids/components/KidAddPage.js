import React from 'react';
import { connect } from 'react-redux';
import KidForm from './KidForm';
import { startAddKid } from '../actions/kidsData';

export class KidAddPage extends React.Component {
 onSubmit = (kid) => {
   this.props.startAddKid(kid);
   this.props.history.push('/');
 };
 

render() {
   return (
     <div>
       <div className="page-header">
         <div className="content-container">
           <h1 className="page-header__title">Nouveau</h1>
         </div>
       </div>
       <div className="content-container">
         <KidForm
           onSubmit={this.onSubmit}
         />
       </div>
     </div>
   );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddKid: (kid) => dispatch(startAddKid(kid))
});

export default connect(undefined, mapDispatchToProps)(KidAddPage);
