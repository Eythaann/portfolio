import TypedReactHooksDemo from "./text";

const styles = {
    icono: { width: "60px", margin: "1rem 1rem 0", borderRadius:"10px", background:"#fff"},
    portfolio: {width:"90%", maxWidth: "400px", borderRadius: "15px", margin:"1rem 10px", boxShadow:"#5554 2px 2px 6px 1px"}
  };

const Body = ()=>{
    return(
     <div>
         <div
        style={{
          background: "url(./header.jpg)",
          backgroundSize: "cover",
          height: "90vh",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "#222a",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TypedReactHooksDemo/>
        </div>
        </div>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#eee",
            padding: "4rem 2rem",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "520px",
              background: "#fff",
              borderRadius: "15px",
              padding: "10px 20px 0",
              boxShadow: "#3335 0px 4px 8px 1px",
            }}
          >
            <h2>Hi, I'm Eythan. Nice to meet you!</h2>
            <br />
            <p>
              Since I was a child I have been a lover of technology, now being
              able to participate in the creation of it excites me, I am a very
              creative, sociable person and with a hunger for knowledge of the
              size of the universe.
            </p>
            <br />
          </div>
          <hr/>
          <div style={{ margin: "3rem 0 0 0" }}>
            <h2>Languages I speak:</h2>
            <br />
            <p>HTML, CSS, JavaScript and TypeScript, SQL</p>
            <img style={styles.icono} src="./iconos/html.png"/>
            <img style={styles.icono} src="./iconos/css.png"/>
            <img style={styles.icono} src="./iconos/js.png"/>
            <img style={styles.icono} src="./iconos/ts.png"/>
            <img style={styles.icono} src="./iconos/sql.png"/>
          </div>
          <div style={{ margin: "2rem 0 0 0" }}>
            <h2>Frameworks I dominate:</h2>
            <br />
            <p>React, Node, Angular, Express</p>
            <img style={styles.icono} src="./iconos/react.png"/>
            <img style={styles.icono} src="./iconos/node.png"/>
            <img style={styles.icono} src="./iconos/angular.png"/>
            <img style={styles.icono} src="./iconos/express.png"/>   
          </div>
          <div style={{ margin: "2rem 0 0 0" }}>
            <h2>Dev Tools:</h2>
            <br />
            <p>Gcloud, Git and Github, Terminal, Visual Studio</p>
            <img style={styles.icono} src="./iconos/gcloud.png"/>
            <img style={styles.icono} src="./iconos/git.png"/>
            <img style={styles.icono} src="./iconos/github.png"/>      
            <img style={styles.icono} src="./iconos/terminal.png"/>  
            <img style={styles.icono} src="./iconos/visual.png"/>  
          </div>
        </div>
      <hr/>
      <div style={{
            display: "flex",
            flexDirection: "column",
            background: "#eee",
            padding: "4rem 0",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <div> 
          <h2>Portfolio</h2> 
          <a href="https://github.com/eythaann/devoid-webclient" target="_blank"><img style={styles.portfolio} src="./proyectos/2.png"/></a>
          <a href="https://github.com/eythaann/devoid-server" target="_blank"><img style={styles.portfolio} src="./proyectos/3.png"/></a>
          <a href="https://github.com/eythaann/tasks" target="_blank"><img style={styles.portfolio} src="./proyectos/4.png"/></a>
          <a href="https://github.com/eythaann/portfolio" target="_blank"><img style={styles.portfolio} src="./proyectos/1.png"/></a>
        </div>
        
      </div>
      <div style={{
            display: "flex",
            flexDirection: "column",
            background: "#eee",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <div style={{
          background:"#fff",
          position:"relative",
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"space-around",
          alignItems:"center",
          boxShadow: "#3336 4px 4px 8px 1px",
          bottom:"-50px",
          width:"90%",
          maxWidth:"900px",
          borderRadius:"15px",
          padding:"2rem 6px"
        }}> 
          <div>
            <h2>Interested in working together?</h2> 
            <p>We should chat and drink a coffee, I invite them.</p>
          </div>
          <div>
          <a href="mailto:eythan.cvt@gmail.com?Subject=Hello%20Eythan!">
            <button>Send me a email</button>
          </a>
          </div>
        </div>
        
      </div>
     </div>
    ); 
}

export default Body