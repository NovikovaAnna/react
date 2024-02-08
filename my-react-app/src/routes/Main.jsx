import Layout from "../Components/Layout/Layout.jsx"
import Button from "../Components/Button/Button.jsx";
import ContactForm from "../Components/ContactForm/ContactForm.jsx"
import { Fragment, useState} from "react";
import photo from '../assets/anna.jpg'
import './Main.css'

export default function Main() {
    const [contactFormState, displayContactForm] = useState(false);
    return (
        <Fragment>
            <Layout className='main'>
                <div className='main-container-info'>
                    <span className='main-rectagle'/>
                        <div className='h1-container'>
                            <h1 className='main-h1'>My name is Novikova Anna</h1>
                            <h1 className='main-h1'>I am marketing manager</h1>
                        </div>
                        <p className='main-p'>I create highly effective advertising for business</p>
                        <Button className={'button-form'} onClick={() => displayContactForm(true)} lable="Contact me"/>
                </div>
                <img className='main-photo' src={photo} alt="Photo of Novikova Anna"/>
            </Layout>
            {contactFormState && <ContactForm onClick={() => displayContactForm(false)}/>}
        </Fragment>
    )
}