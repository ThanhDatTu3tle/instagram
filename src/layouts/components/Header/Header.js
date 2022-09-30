import classNames from "classnames/bind";
import styles from './Header.module.scss';
import images from "../../../assets/images";
import Search from "../Search/Search";
import { DropdownIcon } from "../../../components/Icons";

const cx = classNames.bind(styles)
 
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          {/* Logo */}
          <div className={cx('logo-img')}>
            <img src={images.logo}/>
          </div>
          
          {/* Tippy */}
          <button className={cx('drop-btn')}>
            <DropdownIcon />
          </button>
        </div>

        <div className={cx('search-input')}>
          <Search />
        </div>

        <div>
          Options
        </div>
      </div>
    </header>
  )
}

export default Header;
