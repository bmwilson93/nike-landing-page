import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import { arrowRight } from '../assets/icons';

const Nav = () => {
  const [mobileToggle, setmobileToggle] = useState(false)

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red" 
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block z-50 pr-3">
          <button
            onClick={() => {setmobileToggle(prev => !prev)}}
          >
            <img 
            src={mobileToggle ? arrowRight : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </button>
        </div>

        {/* div holds the mobile menu <- pops out from right */}
        <div className={
          `hideToggle z-40 bg-coral-red/80 
          hidden max-lg:block
          shadow-lg ring-1 ring-black/5 backdrop-blur-md rounded-lg
          p-10 pt-[10rem] mt-1 top-[-18px] absolute 
          ${mobileToggle ? 'right-0' : 'right-[-12rem]'} `
          }>
          <ul className="flex flex-col gap-12">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg font-bold text-white hover:text-slate-gray" 
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </header>
  )
}

export default Nav