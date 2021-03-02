import './Header.scss';
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
  

</section>
);
}