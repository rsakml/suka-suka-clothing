'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import IndexBaju from './pages/baju/Index';
import CreateBaju from './pages/baju/Create';
import EditBaju from './pages/baju/Edit';
import IndexCelana from './pages/celana/Index';
import CreateCelana from './pages/celana/Create';
import EditCelana from './pages/celana/Edit';
import IndexSandalSepatu from './pages/sandalsepatu/Index';
import CreateSandalSepatu from './pages/sandalsepatu/Create';
import EditSandalSepatu from './pages/sandalsepatu/Edit';
import IndexAksesoris from './pages/aksesoris/Index';
import CreateAksesoris from './pages/aksesoris/Create';
import EditAksesoris from './pages/aksesoris/Edit';

export default function Home() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/baju" element={<IndexBaju/>} />
        <Route path="/baju/create" element={<CreateBaju/>} />
        <Route path="/baju/edit/:id" element={<EditBaju/>} />
        <Route path="/celana" element={<IndexCelana/>} />
        <Route path="/celana/create" element={<CreateCelana/>} />
        <Route path="/celana/edit/:id" element={<EditCelana/>} />
        <Route path="/sandalsepatu" element={<IndexSandalSepatu/>} />
        <Route path="/sandalsepatu/create" element={<CreateSandalSepatu/>} />
        <Route path="/sandalsepatu/edit/:id" element={<EditSandalSepatu/>} />
        <Route path="/aksesoris" element={<IndexAksesoris/>} />
        <Route path="/aksesoris/create" element={<CreateAksesoris/>} />
        <Route path="/aksesoris/edit/:id" element={<EditAksesoris/>} />
      </Routes>
      </Sidebar>
      </BrowserRouter>
  )
}
