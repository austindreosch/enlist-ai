import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/dashboard">
        Dashboard
      </Link>
      <Link href="/profile">
        Profile
      </Link>
      <Link href="/logout">
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
