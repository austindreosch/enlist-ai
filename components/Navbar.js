import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Your Logo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link href="/">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
              Home
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
              Dashboard
            </div>
          </Link>
          <Link href="/profile">
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
              Profile
            </div>
          </Link>
        </div>
        <div>
          <Link href="/logout">
            <div className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">
              Logout
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
