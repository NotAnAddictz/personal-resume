import '../css/Header.css'
const Header = () => {
  return (
    <div className="header">
      <strong className="left-header">Resume</strong>
      <div className="right-header flexbox">
        <a href="https://github.com/NotAnAddictz">Github</a>
        <a href="mailto:kwayyishen@gmail.com">Email</a>
        <a href="https://www.linkedin.com/in/yi-shen-kway/">LinkedIn</a>
      </div>
    </div>
  );
};

export default Header;
