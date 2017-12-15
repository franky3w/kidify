import React from 'react';
import { connect } from 'react-redux';

import KidForm from './KidForm';
import KidsListSummary from './KidsListSummary';
import { startAddKid } from '../actions/kidsData';

export class KidTestPage extends React.Component {
 onSubmit = (kid) => {
   this.props.startAddKid(kid);
   this.props.history.push('/');
 };
 
 onImport = () => {
  const kidsToImport = [
    { firstName: 'Barbie', lastName: 'Cool', parents: ['Tarzan', 'Tintin'], currentGroup: 'ABC', isActive: true},
    { firstName: 'Intrus', lastName: 'Anonymus', parents: ['Non pertinent'], currentGroup: 'ABC', isActive: true, createdAt: -1000 },
    { firstName: 'Carolane', lastName:'Berg', parents: ['Guylaine'], currentGroup: 'CBA', isActive: true },
    { firstName: 'Amélie', lastName: 'Berg', parents: ['Francis'], currentGroup: 'ABC' },
    { firstName: 'Vicky', lastName: 'Kli', parents: ['Chantal'], currentGroup: 'ABC' },
    { firstName: 'Anne-Sophie', lastName: 'Kli', parents: ['Jochen'], currentGroup: 'ABC' }
  ];
  
  kidsToImport.forEach((kid) => {
    this.props.startAddKid(kid)
  });
};

render() {
   return (
     <div>
       <div className="page-header">
         <div className="content-container">
           <h1 className="page-header__title">TEST PAGE</h1>
         </div>
       </div>
       <KidsListSummary />
       <div className="content-container">
         <button className="button button--secondary" onClick={this.onImport}>Importer</button>
       </div>
     </div>
   );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddKid: (kid) => dispatch(startAddKid(kid))
});

export default connect(undefined, mapDispatchToProps)(KidTestPage);
