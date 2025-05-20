import ChooseCourses from '../../components/Choose-Courses/Choose-courses';
import DashboardSidebar from '../../components/SignUp/Dashboard/Dashboard-Sidebar/Dashboard-Sidebar';
import DashboardHome from '../../components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home';
import DashboardChapters from '../../components/SignUp/Dashboard/Dashboard-Chapters/Dashboard-Chapters';
import DashboardNotes from '../../components/SignUp/Dashboard/Dashboard-Notes/Dashboard-Notes';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import DashboardQuizzes from '../../components/SignUp/Dashboard/Dashboard-Quizzes/Dashboard-Quizzes';
import './DashboardPage.css'

const DashboardPage = () => {
    const location = useLocation();
  const [tab, setTab] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setTab(params.get('tab'));
  }, [location]);
  return (
    <div className="dashboard-page">
  <DashboardSidebar />
  {tab === 'home' && <DashboardHome />}
  {tab === 'chapters' && <DashboardChapters />}
  {tab === 'notes' && <DashboardNotes />}
  {tab === 'quizzes' && <DashboardQuizzes />}
  {!tab && (
    <div className="default-dashboard-message">
      <h2>Welcome to your dashboard ✨</h2>
      <p>To get started, click on any option from the sidebar.</p>
    </div>
  )}
</div>

  );
};


export default DashboardPage;