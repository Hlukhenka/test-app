import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import EventBoard from './pages/EventBoard/eventBoard';
import Event from './pages/Event/Event';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="eventBoard/" element={<EventBoard />} />
          <Route path="eventBoard/event/:_id" element={<Event />} />
          <Route path="registerPage" element={<RegisterPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
