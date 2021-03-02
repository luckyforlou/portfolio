import './Header.scss';

export default function Header() {
return (
<section id="header">

  <div className="container mx-auto p-5">
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
  </div>

</section>
);
}