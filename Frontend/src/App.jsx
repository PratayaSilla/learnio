import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DashboardPage from './Pages/Dashboard-Main/DashboardPage';
import QuizAttempt from './components/SignUp/Dashboard/Dashboard-Quizzes/QuizAttempt/QuizAttempt';
import ChooseCourses from './components/Choose-Courses/Choose-courses';
import ChapterVideo from './components/SignUp/Dashboard/Dashboard-Chapters/ChapterVideo/ChapterVideo';
import CoursesPage from './Pages/Courses/CoursesPage';
import MentorsPage from './Pages/Mentors/MentorsPage';

function App() {
  return (
    <Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path='/mentors' element={<MentorsPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/choosecourses' element={<ChooseCourses />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/attemptquiz' element={<QuizAttempt />} />
      <Route path='/chaptervideo' element={<ChapterVideo />} />
    </Routes>
  );
}

export default App;
