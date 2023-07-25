import {useNavigate} from 'react-router-dom';

function Navigation({items, menuActive, setMenuActive}) {
  const navigate = useNavigate();
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
              <a className='navigation__link' href={item.href}>
                {item.value}
              </a>
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
