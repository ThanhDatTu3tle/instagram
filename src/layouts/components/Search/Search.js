import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { SearchIcon, ClearIcon } from '../../../components/Icons';
import { useDebounce } from '../../../hooks';
import * as searchService from '../../../services/searchService';
import AccountItem from '../../../components/AccountItem/AccountItem';


const cx = classNames.bind(styles)

function Search() {

  const [searchValue, setSearchValue] = useState('') // giá trị nhập vào input là string
  const [searchResult, setSearchResult] = useState([]) // kết quả trả về là một array gồm nhiều accounts
  const [showResult, setShowResult] = useState(true) 
  const [loading, setLoading] = useState(false)

  const debounced = useDebounce(searchValue, 800)

  const inputRef = useRef()

  useEffect(() => {
    // debounced.trim() => loại bỏ khoảng trắng đầu cuối của searchValue
    // nếu debounced.trim() => true, có nghĩa là có khoảng trống ở đầu searchValue
    // ! để check boolean, nếu true thì set giá trị input bằng rỗng (nghĩa là kh cho phép nhập liệu)
    // sau đó return => break
    if (!debounced.trim()) {
      setSearchResult([])
      return;
    }

    const fetchApi = async () => {
      setLoading(true) // set trạng thái active cho icon loading
      const result = await searchService.search(debounced) // đợi Promise giá trị là debounced từ API (searchService)
      setSearchResult(result) // truyền result nhận đc sau khi đợi API vào làm trạng thái mới cho state setSearchResult
      setLoading(false) // xong xuôi thì set trạng thái inactive cho icon loading
    }

    fetchApi() // gọi Promise fetchApi()

  }, [debounced])

  const handleChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue)
    }      
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0} 
        onClickOutside={() => setShowResult(false)} 
        render={(attrs) => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <div className={cx('popper-wrapper')}>
                {searchResult.map((result) => (
                  <AccountItem key={result.id} data={result}/>
                ))}
              </div>
          </div>
        )}
      >
        <div className={cx('search')}>
          <button className={cx('search-btn')} onMouseDown={handleSubmit}>
            <SearchIcon />
          </button>

          <input 
            ref={inputRef}
            value={searchValue}
            className={cx('input')} 
            placeholder='Search' 
            spellCheck='false'
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button 
              className={cx('clear-btn')} 
              onClick={() => { 
                setSearchValue(''); 
                setSearchResult([]);
                inputRef.current.focus(); 
              }
            }>
                <ClearIcon />
            </button>
          )}
          {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>}

        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search;
