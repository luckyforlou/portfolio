import './Header.scss';
import IndexAbout from './index/IndexAbout';
import NavBar from './Nav';

export default function Header() {
return (
<section id="header">

  <div className="container mx-auto p-5">
    <nav className="flex justify-between">
      <div>
        <a href="#">Logo</a>
      </div>
      <NavBar></NavBar>
     
    </nav> 
  </div>

  <div className="image"> </div>
  <div className="about"> <IndexAbout></IndexAbout></div>
 

</section>
);
}