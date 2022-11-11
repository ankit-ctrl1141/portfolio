import "./menu.scss"

export default function Menu(props) {
  return (
    <div className={`menu ${props.menuOpen && "active"}`}>
        <ul>
            <li onClick={props.handleClickHamburger}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={props.handleClickHamburger}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={props.handleClickHamburger}>
                <a href="#works">Works</a>
            </li>
            <li onClick={props.handleClickHamburger}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={props.handleClickHamburger}>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
      
    </div>
  )
}
