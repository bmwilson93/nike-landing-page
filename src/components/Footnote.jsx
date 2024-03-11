import React from 'react'
import { arrowRight } from '../assets/icons'
import { useEffect, useState } from 'react'

const Footnote = () => {
  const [showFootnote, setshowFootnote] = useState(true)

  useEffect (() => {
    setTimeout(() => {
      setshowFootnote(false);
    }, 5000)
  }, []);

  return (
    <div className={`
      fixed hover:bottom-0 ${showFootnote ? "bottom-0" : "bottom-[-40px]"}
      w-full py-4 text-white-400 text-lg text-center z-50
      backdrop-blur-md bg-black/80 hideToggle
    `}>
      <p className="pb-3">This landing page project is not affiliated in any way with Nike, Nike Inc., or nike.com.</p>
      <p className="underline cursor-pointer">
        <a href="https://github.com/bmwilson93/nike-landing-page" target='_blank'>View the code on github</a>
      </p>

    </div>
  )
}

export default Footnote