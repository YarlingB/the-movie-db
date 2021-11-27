import React from 'react';
import styles from './sider.module.css';

const Aside = () => {
  return (
    <aside className={styles.aside_main_wrapper}>
      <div className="h-full">
        <div className="relative overflow-hidden w-full h-full">
          <div className="absolute inset-0 overflow-scroll mr-0 ml-0">
            <ul className="h-full border-r-0 text-yellow-500 list-none">
              <li className="">
                <div className="pl-2 pr-2 pt-4 pb-4">Categories</div>
                <ul className="list-none">
                  <li className="pl-1 flex items-center pr-4 pl-4">
                    <span>Movie</span>
                  </li>
                  <li className="pl-1 flex items-center pr-4 pl-4">
                    <span>Series</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside;
