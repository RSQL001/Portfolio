import React from 'react';
import Cinema from '../assets/cinema.PNG';
import Prints from '../assets/prints.PNG';
import Nonprofit from '../assets/nonprofit.PNG';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5'>

          <div
            style={{ backgroundImage: `url(${Cinema})` }}
            className='blur-xs hover:blur-none backdrop-opacity-100 hover:backdrop-opacity-60 bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 backdrop-opacity-100 hover:backdrop-opacity-60'>
              <span className='text-5xl font-bold text-transparent tracking-wider'>
                Sunset Drive
              </span>
              <div className='pt-8 text-center'>
                <a href='https://rsql001.github.io/Sunset-Drive/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://rsql001.github.io/Sunset-Drive/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Prints})` }}
            className='blur-xs hover:blur-none bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-5xl font-bold text-transparent tracking-wider'>
                  Sunset Drive
                </span>
              <div className='pt-8 text-center'>
                <a href='https://rsql001.github.io/azprints/index.html/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://rsql001.github.io/azprints/index.html/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Nonprofit})` }}
            className='blur-xs hover:blur-none bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-5xl font-bold text-transparent tracking-wider'>
                Sunset Drive
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.htyfworldwide.org/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://rsql001.github.io/HTYF/index.html/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
