import React from 'react';
import Loading from './Loading.gif';

const Spinner =()=> {

    return (
      <div className='text-center'>
        <img src={Loading} alt='loading' style={{ width: '50px', height: '50px' }} />
      </div>
    );
  
}

export default Spinner;
