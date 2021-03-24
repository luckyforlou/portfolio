import './About.scss';
import AlesExe from '../media/art/Untitled_Artwork copy 13.png'
export default function About() {
    return (
      <div className="intro flex flex-col">
        <img src={AlesExe} alt=""/>
        <div className="fullAbout">
      <h2>Nice to meet you!</h2>
      <h3>I'm Sabrina Ales, an illustrator and concept artist</h3>
      </div>
      <div className="moreAbout">
        <p>aye</p>
      </div>
      <div className="skills">
        <h3>Compétances</h3>
        <ul>
          <li>i can do this</li>
          <li>this too</li>
          <li>and this</li>
        </ul>
      </div>
      </div>

    );
    }