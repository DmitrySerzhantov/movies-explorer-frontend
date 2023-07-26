import {Link, useLocation, useNavigate} from 'react-router-dom';

function Navigation({items, menuActive, setMenuActive}) {
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <div
      className={menuActive ? 'navigation active' : ' navigation'}
      onClick={() => setMenuActive(false)}
    >
      <nav
        className='navigation__nav'
        onClick={(e) => e.stopPropagation(false)}
      >
        <button
          className='navigation__button-close'
          onClick={() => setMenuActive(false)}
        />
        <ul className='navigation__list'>
          {items.map((item, i) => (
            <li className='navigation__item' key={i}>
              <Link
                className={
                  item.id === location.pathname
                    ? 'navigation__link active'
                    : 'navigation__link'
                }
                to={item.href}
              >
                {item.value}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            navigate('/profile');
          }}
          className='navigation__button-account'
        >
          Аккаунт
        </button>
      </nav>
    </div>
  );
}
export default Navigation;
