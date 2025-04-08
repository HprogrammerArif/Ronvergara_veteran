import React from 'react'
import { Link } from 'react-router-dom'

const AiNarativeGen = () => {
  return (
    <div className='min-h-screen max-w-4xl mx-auto'>
      <h2 className='text-black mt-20'>Naravite negeration page..will be discuss about this page</h2>

        <div className="flex flex-col justify-center gap-5 mx-auto">
                  <Link
                    to="/progress"
                    className="btn bg-[#B31942] border-gray-400 py-2 text-white text-center font-semibold rounded-md"
                  >
                    Continue
                  </Link>
                  <button
                    type="submit"
                    className="btn text-[#001F3F] font-semibold border border-[#001F3F] py-2 rounded-md"
                  >
                    Back
                  </button>
                </div>
    </div>
  )
}

export default AiNarativeGen
