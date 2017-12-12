import React from 'react';
import { connect } from 'react-redux';
import KidsListItem from './KidsListItem';
import { selectedKids } from '../selectors/kids';

export const KidsListBody = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Enfant M</div>
      <div className="show-for-desktop">Enfant D</div>
      <div className="show-for-desktop">Groupe D</div>
    </div>
    <div className="list-body">
      {
        props.kids.length === 0 ? (
          <div className="list-item list-item--message">
            <span>Pas d'enfant sélectionné</span>
          </div>
        ) : (
            props.kids.map((kid) => {
              return <KidsListItem key={kid.id} {...kid} />;
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    kids: selectedKids(state.kids, state.kidsFilters)
  };
};

export default connect(mapStateToProps)(KidsListBody);
