import React ,{useState}from 'react';
import { Link,Outlet } from 'react-router-dom'
import './homepage.css';
import Login from './Login';
import QuizApp from './QuizApp';
import TypingText from './Typingtext';
// import Login from './components/Login';
// import QuizApp from './QuizApp';

const HomePage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
  
    const handleGetStarted = () => {
      setShowLoginForm(true);
    };
  
    const handleLogin = (email) => {
      
      console.log('Login successful! Email:', email);
    };

    const handleNavLinkClick = (e) => {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => link.classList.remove('active'));
        e.target.classList.add('active');
      };
    
  return (
    <>
    
    <div className="logo_cont">
      <img src="/assests/quiz_home_page_img2.png" id="logo" alt="Logo" />
      <nav>
      {/* <Link to='/'>Home</Link> */}
      {/* <Link to='Quiz' element={<QuizApp/>}></Link> */}
      <Link to='login' element={<Login/>}>Login</Link>
      <Link to='quizapp' element={<QuizApp/>}>QuizApp</Link>
      </nav>
    </div> 
    <div id="homepage_cont">
    <div className='hi'><TypingText/></div>
      <div className="container">
        
        <div className="left_cont">
          <h1>Easy and Intuitive Online Testing.</h1>
          <p>
            Quiz is a cloud learning &amp; testing Platform that supports online
            creation and delivery of feature-rich tests
          </p>
          <br />
          {!showLoginForm && (
        <button id="getstarted" onClick={handleGetStarted}>
          Get Started
        </button>
      )}
            {showLoginForm && <Login onLogin={handleLogin} />}
     
        </div>
        <div className="right_cont">
          <img src="/assests/quiz_home_page_img1.png" id="port" alt="Portfolio" />
        </div>
      </div>
    </div>
    <div id="aboutus_cont">
      <div className="container1">
        <div className="left_cont1">
          <img src="/assests/quiz_home_page_img3.png" id="port1" alt="Portfolio" />
        </div>
        <div className="right_cont1">
          <h1>About Us</h1>
          <p>
            Welcome to our quiz website, the ultimate destination for individuals
            seeking to test their knowledge on a diverse range of computer science
            topics, including web development, app development, data structures, and
            algorithms.
            <br />
            <br />
            Our mission is to provide an engaging and interactive learning experience
            that caters to individuals with varying levels of proficiency in computer
            science. Our website was founded with the purpose of assisting computer
            science enthusiasts in improving their knowledge and skills. Our quizzes
            are designed by experts in the field of computer science who possess
            years of experience in teaching and mentoring students.
          </p>
        </div>
      </div>
    </div>
    <div id="contactus_cont">
      <div className="container2">
        <div className="left_cont2">
          <h1 id="con">Contact Us</h1>
          <div id="c1" className="social_divs">
            <img src="/assests/quiz_home_page_logo1.jfif" id="telegram" className="social_logos" alt="Telegram" />
            <p className="t">Hexagon Quizzes</p>
          </div>
          <div id="c2" className="social_divs">
            <img src="/assests/quiz_home_page_logo2.jfif" id="twitter" className="social_logos" alt="Twitter" />
            <p className="t">Hexagon_Quiz</p>
          </div>
          <div id="c3" className="social_divs">
            <img src="/assests/quiz_home_page_logo3.jpg" id="gmail" className="social_logos" alt="Gmail" />
            <p className="t">hexagonquizzes@gmail.com</p>
          </div>
          <div id="c4" className="social_divs">
            <img src="/assests/quiz_home_page_logo4.png" id="phone" className="social_logos" alt="Phone" />
            <p className="t">9356816066</p>
          </div>
        </div>
        <div className="right_cont2">
          <img src="/assests/quiz_home_page_img4.png" id="port3" alt="Portfolio" />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
