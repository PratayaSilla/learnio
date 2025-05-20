import ChooseCourses from '../../components/Choose-Courses/Choose-courses';
import DashboardSidebar from '../../components/SignUp/Dashboard/Dashboard-Sidebar/Dashboard-Sidebar';
import DashboardHome from '../../components/SignUp/Dashboard/Dashboard-Home/Dashboard-Home';
import DashboardChapters from '../../components/SignUp/Dashboard/Dashboard-Chapters/Dashboard-Chapters';
import DashboardNotes from '../../components/SignUp/Dashboard/Dashboard-Notes/Dashboard-Notes';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';

const DashboardPage = () => {
    const location = useLocation();
  const [tab, setTab] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setTab(params.get('tab'));
  }, [location]);
  return (
    <div className="dashboard-page">
      {/* <ChooseCourses />  */}
      <DashboardSidebar />
      {/* {tab === 'home' ? <DashboardHome /> : } */}
      { tab === 'home' ? <DashboardHome /> : tab === 'chapters' ? <DashboardChapters /> : tab === 'notes' ? <DashboardNotes /> : <></>} 
    </div>
  );
};


export default DashboardPage;