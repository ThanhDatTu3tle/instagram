import classNames from "classnames/bind";
import styles from './Header.module.scss';
import Search from "../Search/Search";
import Options from "../Options/Options";
import Logo from "../Logo/Logo";

const cx = classNames.bind(styles)
 
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Logo />
        <Search />
        <Options />
      </div>
    </header>
  )
}

export default Header;
