import './Portfolio.scss';


export default function Header() {
return (
<section id="portfolio" className="flex">

  <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div>

  <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div>

  <div uk-lightbox="animation: fade">
    <div>
      <a href="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif">
         <img src="https://media.tenor.com/images/871c18c6c533765e0c25a777606111c8/tenor.gif" alt=""/>
         </a>
    </div>
  </div>

</section>
);
}