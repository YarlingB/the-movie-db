import React from 'react';
import Header from '../../components/UI/Header';
import Aside from '../../components/UI/Sider';
import {PropsWithChildClassType} from '../../types/common';

const AppLayout = ({children,className=''}:PropsWithChildClassType) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <section className="flex">
          <Aside />
          <section style={{paddingLeft: "250px"}}>
            <div className="mt-20 p-4">
              {children}
            </div>
          </section>
        </section>

      </div>


    </div>
  )
};

export default AppLayout;
