import classNames from "classnames/bind";
import Header from "../components/Header/Header";
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <div className={cx('content')}>{children}</div>
        <h2>Sidebar</h2>
      </div>
    </div>
  )
}

export default DefaultLayout;
