import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = ()=>{
    return(
        <footer style={{
          background:"#333", 
          color:"#eee", 
          padding: "6rem 0rem", 
          display:"flex",
          flexDirection:"column", 
          alignItems:"center",
          }}> 
          <div>
            <i>"Art lover in all its expressions"</i>
          </div>
          <div style={{margin:"3rem 1rem",width:"100%",maxWidth:"400px",display:"flex", justifyContent:"space-around"}}>
            <a href="https://instagram.com/eythaann" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} size="4x"/></a>
            <a href="https://twitter.com/eythaann" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="4x"/> </a>
            <a href="https://linkedin.com/in/eythaann" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="4x"/> </a>
            <a href="https://github.com/eythaann" target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="4x"/> </a>
          </div>
          <div>
            <b>Handcrafted by me ©twentytwentyone</b>
          </div>
      </footer>
    )
}
export default Footer;