import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> FRM ABVE YT CLONE &copy;{new Date().getFullYear()}</medium> <b>| HUNTR | NEW WAVE</b>
      </div>
      <nav>
        <li className = "footer-list"><a href="https://github.com/LRose2111" className = "footer-ref" target="_blank"><medium className = 'footer-color'>My GitHub</medium></a></li>
      </nav>
    </footer>
  );
};

export default Footer;
