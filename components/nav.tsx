import { Link } from 'react-scroll';

const menu = [
  {
    name: 'Serviços',
    href: 'services'
  },
  {
    name: 'Trabalhos',
    href: 'work'
  },
  {
    name: 'Dúvidas',
    href: 'FAQ'
  },
  {
    name: 'Contato',
    href: 'Contact'
  }
];

const Nav = () => {
  return (
    <nav className="z-50 flex gap-8">
      {menu.map((item, index) => (
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500} 
          key={index}
          className="cursor-pointer text-lg font-medium capitalize"
        >
          <span className="pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
