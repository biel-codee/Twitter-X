import twitterLogo from '../assets/logo-twitter.svg'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil,} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css'

export function Sidebar() {
  return (
    <aside className='sidebar'>
      <img className='logo' src= {twitterLogo} alt="Logo" />
      
      <nav className='main-navigation'>
        <NavLink to="">
          <House weight='fill'/>
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash/>
         <span>Explore</span>
        </a>
        <a href="">
          <Bell/>
         <span>Noficações</span>
        </a>
        <a href="">
        <Envelope/>
         <span>Mensagens</span>
        </a>
        <a href="">
          <BookmarkSimple/>
         <span>Itens salvos</span>
        </a>
        <a href="">
          <FileText/>
         <span>Listas</span>
        </a>
        <a href="">
          <User/>
         <span>Perfil</span>
        </a>
        <a href="">
          <DotsThreeCircle/>
         <span>Mais</span>
        </a>
        </nav>

        <button className='new-tweet'>
          <Pencil/>
          <span>Tweet</span>
        </button>
      </aside>
    )
}