import logo from './logo.svg';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Home from './components/Home';
// import About from './components/Login';
import Navbar from './components/Navbar';
import Login from './components/Login';
import QuizApp from './components/QuizApp'
// const router = createBrowserRouter(createRoutesFromElements(
//   <>
//     <Route path='/' element={<Home />} />
//     <Route path='/about' element={<About />} />
//   </>
// ));
function App() {
  return (
      <BrowserRouter>
      <Routes>
      {/* <Route path='/' element={<Navbar/>}> */}
        <Route index element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/quizapp' element={<QuizApp/>}/>
      {/* </Route> */}
      </Routes>
      </BrowserRouter>
  )
}

export default App;
