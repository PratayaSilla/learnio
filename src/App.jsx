import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import DashboardPage from './Pages/Dashboard-Main/DashboardPage'
import DashboardHome from './components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home'
import DashboardChapters from './components/SignUp/Dashboard/Dashboard-Chapters/Dashboard-Chapters'
import QuizAttempt from './components/SignUp/Dashboard/Dashboard-Quizzes/QuizAttempt/QuizAttempt'
import ChooseCourses from './components/Choose-Courses/Choose-courses'
import ChapterVideo from './components/SignUp/Dashboard/Dashboard-Chapters/ChapterVideo/ChapterVideo'

function App() {
  return (
    <>
    <div>
    </div>
    <BrowserRouter>
        <Routes> 
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/choosecourses' element={<ChooseCourses />} />
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/attemptquiz' element={<QuizAttempt />} />
            <Route path='/chaptervideo' element={<ChapterVideo />} />

        </Routes>
    </ BrowserRouter>
    </>
  )
}

export default App
