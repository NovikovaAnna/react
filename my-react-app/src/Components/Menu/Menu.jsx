import{ Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
    const MENU = ['To the main page', 'About me', 'Reviews','Blog']
    return (
        <ul className="menu">
            {MENU.map((el, i ) => <Link key={`${i}-menu-item`}>{el}</Link>)}
        </ul>

            )
}