import React from 'react';
// import { UserPen } from "lucide-react";
import './Header.css';
import Logo from '../assets/Logo.svg';
import HeroSection from './HeaderComponent';

const navItems = [
  { name: 'услуги', href:'#services'},
  { name: 'о нас', href:'#about'},
  { name: 'польза продукта', href:'#product'},
  { name: 'оборудование', href:'#equipment'},
  { name: 'этапы работы', href:'#stages'},
  { name: 'отзывы', href: '#reviews'},
];

const HeaderComponent = () => {
  return (
    
    <div >
{ <header className='mainHeader'>
           <div className='logoGroup'>
            <img src={Logo} alt='LOGOOOOO!' className='logoIcon' />
              <span className='logoName'>Pascal Vent</span>
              <span className='logoTagline'>fresh air</span>
           </div>

    <nav className='headerNav'>
      {navItems.map((item) => (
        <a key={item.name} href={item.href} className='navLink'>
          {item.name}
        </a>
      ))}
      </nav>
        
        <button className='contactButton'>Связаться</button>
</header> }

    </div>
  )
}

export default HeaderComponent;