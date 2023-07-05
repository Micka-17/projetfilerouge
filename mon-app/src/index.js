import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'
// import ModeratorPanelComment from './components/ModeratorPanelComponent/ModeratorPanelComment';
import reportWebVitals from './reportWebVitals';
// import ProfileComponent from './components/ProfileComponent';
// import CreatePost from './components/CreatePost';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ThemeProvider, SurveyProvider } from './utils/context'
import Header from './views/HeaderView';
import Footer from './views/FooterView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import FilterView from './views/FilterView';
import ProfileView from './views/ProfileView';
import LegaleMentionsView from './views/LegaleMentionsView';
import PrivacyPolicyView from './views/PrivacyPolicyView';
import AdminPanelStatistics from './components/AdminPanelComponent/AdminPanelStatistics';
import AdminPanelUserManagement from './components/AdminPanelComponent/AdminPanelUserManagement';
import ModeratorPanelComment from './components/ModeratorPanelComponent/ModeratorPanelComment';
import CreatePost from './components/CreatePost';


library.add(faHeart, faComment);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<App />} />
            <Route path="/accueil" element={<HomeView />} />
            <Route path="/inscription" element={<RegisterView />} />
            <Route path="/profil" element={<ProfileView />} />
            <Route path="/admin/statistiques" element={<AdminPanelStatistics />} />
            <Route path="/admin/usermanagement" element={<AdminPanelUserManagement />} />
            <Route path="/moderateur" element={<ModeratorPanelComment />} />
            <Route path="/ressources" element={<CreatePost />} />
            <Route path="/filtre" element={<FilterView />} />
            <Route path="/mention-legales" element={<LegaleMentionsView />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicyView />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
