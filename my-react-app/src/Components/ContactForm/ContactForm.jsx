import { useForm} from "react-hook-form";
import propTypes from "prop-types";
import Button from "../Button/Button.jsx"
import close from '../../assets/close.svg'
import './ContactForm.css'


export default function contactForm ({onClick}) {
    const methods = useForm();

    return(
        <div className="blackout" onClick{(e) => e.target.className === "blackout" ? onClick() : null}>
            <div className="close-button">
                <img src={close} onClick={onClick}/>
            </div>
            <form className='contact-form'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="tel">Phone</label>
                    <input type="tel" name="tel" id="tel"/>
                </div>
                <div className="comment">
                    <label htmlFor="comment">Comment</label>
                    <textarea cols="35" rows="3" name="message"/>
                </div>
                <div>
                    <Button className={'button-form'} label="Send" onClick={(e) => e.perentDefault}/>
                </div>
            </form>
        </div>
            )
}

ContactForm.propTypes = {
    onClick: propTypes.func
}