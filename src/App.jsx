import React from 'react'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar'
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div
        className="
        w-full h-screen
        bg-[url('/image/macos-tahoe-26-5120x2880-22674.jpg')]
        bg-cover bg-center bg-no-repeat
        relative
      "
      >
        <Navbar />
        <div className='flex items-center justify-center'>
          <MenuBar />
        </div>
        <Hero/>
      </div>
    </>
  );
}

export default App