import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../../../components/Icons';

const cx = classNames.bind(styles)

function Search() {
  return (
    <div>
      <HeadlessTippy
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            My tippy box
          </div>
        )}
      >
        <div className={cx('search')}>
          <button className={cx('search-btn')}>
            <SearchIcon />
          </button>

          <input 
            className={cx('input')} 
            placeholder='Tìm kiếm' 
            spellCheck='false'
          />
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search;
