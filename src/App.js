import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Main from "./Pages/Main/Main.jsx";
import AboutMe from "./Pages/AboutMe/AboutMe.jsx";
import Service from "./Pages/ServicePage/ServicePage.jsx"
import Contact from "./Pages/ContactPage/ContactPage.jsx"
import LoginPage from "./Pages/login.page/login.page.jsx"
import ProfilePage from "./Pages/profilepage/ProfilePage.jsx"
import FeedbackPage from "./Pages/Feedback/FeedbackPage.jsx"
import RegisterPage from './Pages/RegisterPage/registerPage.jsx';
import AdminPanel from './Pages/adminPanel/adminPanel.jsx';
import RequestsList from './Pages/RequestList/RequestsList.jsx';
import EditRequest from './Pages/EditRequest/EditRequest.js';

function App() {

  if ("token" in localStorage) {
    console.log("Токен существует в localStorage");
} else {
    console.log("Токен не найден в localStorage");
}

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/feedback' element={<FeedbackPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/adminPanel' element={<AdminPanel />} />
          <Route path='/requestsList' element={<RequestsList />} />
          <Route path='/editRequest/:id' element={<EditRequest />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
