import React from 'react';
import KidsListBody from './KidsListBody';
import KidsListFilters from './KidsListFilters';
import KidsListSummary from './KidsListSummary';

const TestPage = () => (
  <div>
    <KidsListSummary />
    <KidsListFilters />
    <KidsListBody />
  </div>
);

export default TestPage;
