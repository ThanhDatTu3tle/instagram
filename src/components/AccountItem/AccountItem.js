import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
  return (
    <Link className={cx('wrapper')}>
        <Image 
          className={cx('avatar')} 
          src={data.avatar}
          alt={data.full_name}
          fallback='https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg'
        />
        <div className={cx('info')}>
          <h4 className={cx('name')}>{data.full_name}</h4>
          <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link>
  )
}

export default AccountItem;
