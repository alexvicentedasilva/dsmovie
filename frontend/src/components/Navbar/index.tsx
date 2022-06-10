import './styles.css';
function Navbar() {
return(
    <header>
    <nav className="container">
      <div className="dsmovie-nav-content">
        <h1>MyFlix</h1>
        <a href="https://api.whatsapp.com/send/?phone=5519988705519">
          <div className="dsmovie-contact-container">
           <div className="WhatsappIcon-container">
            </div>
            <p className="dsmovie-series">Séries</p> 
            <p className="dsmovie-filmes">Filmes</p>
            <p className="dsmovie-contact-link">Assine já</p>
          </div>
        </a>
      </div>
    </nav>
  </header>
);
}

export default Navbar;