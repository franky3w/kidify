import React from 'react';
import { connect } from 'react-redux';
import KidForm from './KidForm';
import { startAddKid } from '../actions/kids';

export class KidAddPage extends React.Component {
 onSubmit = (kid) => {
   this.props.startAddKid(kid);
   this.props.history.push('/');
 };
 
 onImport = () => {
  const kidsToImport = [
    { firstName: 'Barbie', lastName: 'Cool', parents: ['Tarzan', 'Tintin'], currentGroup: 'ABC', isActive: true},
    { firstName: 'Intrus', lastName: 'Anonymus', parents: ['Non pertinent'], currentGroup: 'ABC', createdAt: -1000 },
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
           <h1 className="page-header__title">Nouveau</h1>
         </div>
       </div>
       <div className="content-container">
         <KidForm
           onSubmit={this.onSubmit}
         />
         <button className="button button--secondary" onClick={this.onImport}>Importer</button>
       </div>
     </div>
   );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddKid: (kid) => dispatch(startAddKid(kid))
});

export default connect(undefined, mapDispatchToProps)(KidAddPage);
