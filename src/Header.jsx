import './Header.scss';
import NavBar from './Nav';

export default function Header() {
return (
<section id="header">

  

  <div className=" navBar container mx-auto p-5">
    <nav uk-sticky="show-on-up: true; animation: uk-animation-slide-top;" className="flex justify-between">
      <div>
        <a href="#">Logo</a>
      </div>
      <NavBar></NavBar>
      
     
    </nav> 
  </div>

  <div uk-parallax="bgy: -200" className="image"></div>

</section>
);
}