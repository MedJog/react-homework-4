
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import Gallery from './components/Gallery/Gallery';


function App() {
  const photos = [
    { src: '/photo/1.jpg', alt: 'Фото 1' },
    { src: '/photo/2.jpg', alt: 'Фото 2' },
    { src: '/photo/3.jpg', alt: 'Фото 3' },
    { src: '/photo/4.jpg', alt: 'Фото 4' },
    { src: '/photo/5.jpg', alt: 'Фото 5' },
    { src: '/photo/6.jpg', alt: 'Фото 6' },
    { src: '/photo/7.jpg', alt: 'Фото 7' },
    { src: '/photo/8.jpg', alt: 'Фото 8' },
    { src: '/photo/9.jpg', alt: 'Фото 9' }
  ]
  return (
    <div className="Container">
      <div>
        <h1 className="Main-title">Природа в кадре</h1>
      </div>
        <Router>
            <div>
                <nav className='Nav'>
                    <ul className='List'>
                        <li className="List-item">
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="List-item">
                            <Link to="/about">О нас</Link>
                        </li>
                        <li className="List-item">
                            <Link to="/gallery">Галерея</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/gallery" element={<Gallery photos={photos} />} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
