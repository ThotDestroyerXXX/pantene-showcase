import { navbarList } from "../constant";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a href='/' className='font-strayhorn'>
          Pantene Showcase
        </a>
      </div>
      <ul className='navbar-menu'>
        {navbarList.map((item) => (
          <li key={item.id} className='navbar-item'>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
