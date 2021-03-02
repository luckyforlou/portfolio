import React, { useState } from 'react';
import RightNav from './RightNav';
import './BurgerNav.scss';


const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <React.Fragment>
      <div>
        <div className="NavMobile" />
        
      </div>
      <RightNav open={open}/>
    </React.Fragment>
  )
};

export default Burger;