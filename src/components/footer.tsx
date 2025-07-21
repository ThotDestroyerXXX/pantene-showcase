import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <h1 className='footer-text'>
        JOIN THE MOVEMENT AND FEEL THE DIFFERENCE EVERY WASH
      </h1>
      <button>
        <a href='https://pantene.com/en-us'>Visit Site</a>
        <ArrowUpRight />
      </button>
    </footer>
  );
};

export default Footer;
