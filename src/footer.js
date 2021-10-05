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
            <FontAwesomeIcon icon={faInstagramSquare} size="4x"/> 
            <FontAwesomeIcon icon={faTwitterSquare} size="4x"/> 
            <FontAwesomeIcon icon={faLinkedin} size="4x"/> 
            <FontAwesomeIcon icon={faGithubSquare} size="4x"/> 
          </div>
          <div>
            <b>Handcrafted by me ©twentytwentyone</b>
          </div>
      </footer>
    )
}
export default Footer;