import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import DashboardPage from './Pages/Dashboard-Main/DashboardPage'
import DashboardHome from './components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home'
import DashboardChapters from './components/SignUp/Dashboard/Dashboard-Chapters/Dashboard-Chapters'
import QuizAttempt from './components/SignUp/Dashboard/Dashboard-Quizzes/QuizAttempt/QuizAttempt'

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
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/attemptquiz' element={<QuizAttempt />} />

        </Routes>
    </ BrowserRouter>
    </>
  )
}

export default App
