
import HeaderIndex from './HeaderIndex';
import AboutIndex from './AboutIndex';
import AboutIndexText from './AboutIndexText';
import Portfolio from './PortfolioIndex';



export default function Index(){
    return(
        <div className="index">
        <HeaderIndex/>
        <div className="about flex"> <AboutIndex></AboutIndex> <AboutIndexText></AboutIndexText></div> 
        <Portfolio></Portfolio>
        </div>
      
    );
}