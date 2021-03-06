import './AboutIndexText.scss';

export default function AboutIndexText(){
    return(
        <div uk-parallax="y: -200" className="aboutTxt">
            <h2>Nice to meet you!</h2>
            <p>I am an illustrator and concept artist based in Montréal, Canada. </p>
           <p> I've worked as a freelance artist for over 5 years.
            Although my favourite subjects are environments and backgrounds, I also enjoy creating characters and props.</p>
            <a href="#" className="aboutPlus"><p>Learn more</p></a>
        </div>
    );
}