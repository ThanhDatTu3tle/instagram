import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import images from "../../../assets/images";
import { DropdownIcon } from "../../../components/Icons";

const cx = classNames.bind(styles)

function Logo() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('logo')}>
          {/* Logo */}
          <div className={cx('logo-img')}>
            <img src={images.logo}/>
          </div>
          {/* Tippy */}
          <button className={cx('drop-btn')}>
            <DropdownIcon className={cx('drop-icon')}/>
          </button>
        </div>
    </div>
  )
}

export default Logo;