import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const KidsListItem = (kid) => (
  <Link className="list-item" to={`/kidEdit/${kid.id}`}>
    <div>
      <h3 className="list-item__title">{kid.firstName}, {kid.lastName}</h3>
      <span className="list-item__sub-title">{kid.parents}, {moment(kid.createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{kid.currentGroup}</h3>
  </Link>
);

export default KidsListItem;
