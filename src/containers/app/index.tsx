import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../components/topNav';

const App = () => (
  <>
    <TopNav />
    <main>
      <Outlet />
    </main>
  </>
);

export default App;
