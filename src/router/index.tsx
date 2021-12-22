import JobPage from '@/pages/Jobs';
import Home from '@/pages/Home';
import FirstJob from '@/pages/FirstJob';
import About from '@/pages/About';
import NowJob from '@/pages/NowJob';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

export default function route(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:jobTitle" element={<JobPage />}>
          <Route index element={<Home />} />
          <Route path="first-job" element={<FirstJob />} />
          <Route path="about-job" element={<About />} />
          <Route path="now-job" element={<NowJob />} />
        </Route>
        <Route path="*" element={<Navigate to="/engineer" />} />
      </Routes>
    </BrowserRouter>
  );
}
