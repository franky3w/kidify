import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import {selectedKids, selectAllKids} from '../selectors/kids';
import { startAddKid } from '../actions/kidsData';

export const KidsListSummary = ({ kidsSelectedCount, kidsTotalCount }) => {
  const kidsWord = kidsSelectedCount === 1 ? 'enfant' : 'enfants';
   
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Liste de <span>{kidsSelectedCount}</span> {kidsWord} parmi <span>{kidsTotalCount}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/kidCreate">Ajouter</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    kidsSelectedCount: selectedKids(state.kids, state.kidsFilters).length,
    kidsTotalCount: selectAllKids(state.kids, state.kidsFilters).length
  };
};

export default connect(mapStateToProps)(KidsListSummary);
