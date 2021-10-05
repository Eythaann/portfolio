

const Header =()=>{
    return(
        <header style={{height:"60px"}}>
            <div style={{height:"100%",padding:"0 2rem", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div>
                <h3>Eythan.me</h3>
            </div>
            <div>
                <a href="mailto:eythan.cvt@gmail.com?Subject=Hello%20Eythan!">
                    <button>Say Hello</button>
                </a>
            </div>
            </div>
        </header>
    )
}

export default Header;