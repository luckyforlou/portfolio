import React from 'react';

const RightNav = () => {
  return (
    <nav className="flex justify-between">
    <div>
      <a href="#">Logo</a>
    </div>
    <ul className="flex flex-row">
      <li className="pr-5"><a>Porfolio</a></li>
      <li className="pr-5"><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </nav>
  )
}

export default RightNav