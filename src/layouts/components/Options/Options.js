import classNames from "classnames/bind";
import styles from './Options.module.scss';
import { 
  HomeIcon,
  MessengerIcon,
  PostIcon,
  ExploreIcon,
  HeartIcon
} from "../../../components/Icons";

const cx = classNames.bind(styles)

function Options() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <HomeIcon className={cx('icons')}/>
        <MessengerIcon className={cx('icons')}/>
        <PostIcon className={cx('icons')}/>
        <ExploreIcon className={cx('icons')}/>
        <HeartIcon className={cx('icons')}/>
      </div>
    </div>
  )
}

export default Options;
