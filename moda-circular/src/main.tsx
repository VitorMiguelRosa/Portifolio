import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './components/Feed.tsx';
import Header from './components/Header.tsx';
import AdminPage from './components/AdminPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
 
        
      </Routes>
    </BrowserRouter>
  );
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
