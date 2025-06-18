import {useState} from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

function Header() {
  const isAuthenticated = localStorage.getItem('token') ? true : false;
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const LogOutUser = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };
  return (
   <div className='flex justify-between items-center  bg-white py-4 px-6 '>
      <div className='felx justify-center items-center px-4'>
        <img src='/src/assets/icons/HeadLogo.svg' alt='Ascend Logo' className='h-[2.5rem] w-22' />
      </div>
      <div className='felx justify-center items-center px-4'>
        {
          !isAuthenticated ? (
           <div className='flex gap-4'>
            <button className='bg-purple-600 text-white py-1 px-3 rounded font-semibold'>Login</button>
            <button className=' text-purple-600 border border-purple-600 py-1 px-3 rounded font-semibold'>Sign Up</button>
           </div>
          ) : (
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">


        {/* User Dropdown */}
        <div className="relative">
          <div className='flex items-center  cursor-pointer'
           onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}>
         <button className="w-[2.5rem] h-[2.5rem] bg-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-lg"
         >
  A
</button>
{
 isUserDropdownOpen ? (
  <HiChevronUp className="w-4 h-4 ml-1" />
) : (
  <HiChevronDown className="w-4 h-4 ml-1" />
)
}
          </div>

          {isUserDropdownOpen && (
            <div className="absolute right-0 z-50 mt-2 w-48  list-none bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-sm ">
              <div className="px-4 py-3">
                <span className="block text-sm font-semibold text-gray-900 ">Aman Negi</span>
                <span className="block text-sm text-gray-500 truncate ">
                  AmanNegi@gmail.com
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    onClick={()=> LogOutUser()}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
          )
        }
      </div>
    </div>
  )
}

export default Header