import { FaRegCircleUser } from "react-icons/fa6";
const Header = () => {
  return (
    <header className="inset-y-0 bg-red-700 text-white flex justify-between py-4 px-10 h-[80px] ">
      <h1 className="text-semibold self-end text-3xl">TextBook Exchange</h1>
      <nav className="w-[50%] content-end">
        <ul className="flex justify-end space-x-12 text-lg">
          <li>Posts</li>
          <li>Books</li>
          <li>Users</li>
          <li>Search</li>
          <FaRegCircleUser size={30} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
