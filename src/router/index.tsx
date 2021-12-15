import Home from '@/pages/Home';
import { HashRouter, Route, Routes } from 'react-router-dom';

export default function route(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
