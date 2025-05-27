import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Serve from './Components/Serve/Serve';
import Testimonials from './Components/Testimonials/Testimonials';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <About/>
    <Serve/>
    <Testimonials/>
    <Blog/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
