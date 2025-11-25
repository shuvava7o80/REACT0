import React from 'react';
// import { UserPen } from "lucide-react";
import './Header.css';
import Logo from '../assets/Logo.svg';

const navItems = [
  { name: 'услуги', href:
    '#services'
  },
  { name: 'о нас', href:
    '#about'
  },
  { name: 'оборудование', href:
    '#equipment'
  },
  { name: 'этапы работы', href:
    '#stages'
  },
  { name: 'отзывы', href: 
    '#reviews'
  },
];

const HeaderComponent = () => {
  return (
    
    <div className='bg-[#EBEDEC]'>
{ <header className='mainHeader'>
           <div className='logoGroup'>
            <img src={Logo} alt='LOGOOOOO!' className='logoIcon' />
              <span className='logoName'>Pascal Vent</span>
              <span className='logoTagline'>fresh air</span>
           </div>

    <nav className='headerNav'>
      {navItems.map((item) => (
        <a key={item.name}
        href={item.href} className='navLink'>
          {item.name}
        </a>
      ))}
      </nav>
        
</header> }

    </div>
  )
}

export default HeaderComponent