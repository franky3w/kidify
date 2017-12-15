import React from 'react';
import KidsListBody from './KidsListBody';
import KidsListFilters from './KidsListFilters';
import KidsListSummary from './KidsListSummary';

const KidsDashboardPage = () => (
  <div>
    <KidsListSummary />
    <KidsListFilters />
    <KidsListBody />
  </div>
);

export default KidsDashboardPage;
