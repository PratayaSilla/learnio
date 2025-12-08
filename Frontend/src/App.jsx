import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import LandingPage from './Pages/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import DashboardPage from './Pages/Dashboard-Main/DashboardPage';
import QuizAttempt from './components/SignUp/Dashboard/Dashboard-Quizzes/QuizAttempt/QuizAttempt';
import ChooseCourses from './components/Choose-Courses/Choose-courses';
import ChapterVideo from './components/SignUp/Dashboard/Dashboard-Chapters/ChapterVideo/ChapterVideo';
import CoursesPage from './Pages/Courses/CoursesPage';
import MentorsPage from './Pages/Mentors/MentorsPage';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#0a0a0a',
        color: '#fff'
      }}>
        Loading...
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Public Route wrapper (redirects to dashboard if already logged in)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: '#0a0a0a',
        color: '#fff'
      }}>
        Loading...
      </div>
    );
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard?tab=home" replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes> 
      <Route path='/' element={<LandingPage />} />
      <Route path='/courses' element={<CoursesPage />} />
      <Route path='/mentors' element={<MentorsPage />} />
      <Route path='/signup' element={
        <PublicRoute>
          <SignUp />
        </PublicRoute>
      } />
      <Route path='/login' element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      } />
      <Route path='/choosecourses' element={
        <ProtectedRoute>
          <ChooseCourses />
        </ProtectedRoute>
      } />
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      } />
      <Route path='/attemptquiz' element={
        <ProtectedRoute>
          <QuizAttempt />
        </ProtectedRoute>
      } />
      <Route path='/chaptervideo' element={
        <ProtectedRoute>
          <ChapterVideo />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
