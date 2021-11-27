import React from 'react';
import {PropsWithChildClassType} from '../../../types/common';

const WrapperLayout = ({children, className=''}:PropsWithChildClassType) => {
  return (
    <div className={`flex box-border flex-auto flex-col ${className}`}>
      {children}
    </div>
  )
}

export default WrapperLayout;