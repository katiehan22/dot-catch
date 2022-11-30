import { useDispatch } from 'react-redux'
import { hideModal } from '../../store/ui'
import '../SessionForms/SessionForm.css'
import './AboutLinks.css'
import github from './github.png'
import linkedin from './linkedin.png'
import mitch from './mitch.jpg'
import jason from './jason.jpg'
import brendan from './brendan.png'

export default function AboutLinks() {
    const dispatch = useDispatch()
    
    return(
        <section className="session-form">
            <div className='closeButton'>
                <button
                className='close'
                type='button'
                onClick={() => dispatch(hideModal() ) }>X
                </button>
            </div>
            <div className='personContainer'>
                <img className='aboutImg' src="https://dot-catch-dev.s3.us-west-1.amazonaws.com/1668757083367-IMG_0424.jpg" alt="Katie Han" />
                <div>
                    <div className='aboutLinks'>
                        <h2>Katie Han</h2>
                        <a href="https://github.com/katiehan22" target='_blank'>
                            <img src={github} className='logo' alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/katiehan22/"  target='_blank'>
                            <img src={linkedin} className='logo' alt="Linked In" />
                        </a>
                    </div>
                    <p className='bio'>I am a full stack software engineer, passionate about creating well-designed, user-first systems and products. As a previous digital marketing manager, I have developed strong communication skills, the ability to find creative solutions to problems, and an aptitude for working collaboratively that translates into my work now.</p>
                </div>
            </div>
            <div className='personContainer'>
                <img className='aboutImg' src={mitch} alt="Mitch Jindra" />
                <div>
                    <div className='aboutLinks'>
                        <h2>Mitch Jindra</h2>
                        <a href="https://github.com/mitchjindra413" target='_blank'>
                            <img src={github} className='logo' alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/mitchell-jindra/"  target='_blank'>
                            <img src={linkedin} className='logo' alt="Linked In" />
                        </a>
                    </div>
                    <p className='bio'>bio</p>
                </div>
            </div>
            <div className='personContainer'>
                <img className='aboutImg' src={jason} alt="Jason Song" />
                <div>
                    <div className='aboutLinks'>
                        <h2>Jason Song</h2>
                        <a href="https://github.com/jason330" target='_blank'>
                            <img src={github} className='logo' alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/jason-s-a2b08b258/"  target='_blank'>
                            <img src={linkedin} className='logo' alt="Linked In" />
                        </a>
                    </div>
                    <p className='bio'>bio</p>
                </div>
            </div>
            <div className='personContainer'>
                <img className='aboutImg' src={brendan} alt="Brendan Tsuda" />
                <div>
                    <div className='aboutLinks'>
                        <h2>Brendan Tsuda</h2>
                        <a href="https://github.com/btsuda11" target='_blank'>
                            <img src={github} className='logo' alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/brendan-tsuda/"  target='_blank'>
                            <img src={linkedin} className='logo' alt="Linked In" />
                        </a>
                    </div>
                    <p className='bio'>Hi, I'm a full-stack software engineer who is passionate about building highly-scalable, single-page applications and backend systems. As a former research chemist, I've learned how to deliver on deadlines, technically problem solve, and work collaboratively across many teams!</p>
                </div>
            </div>
            <div className='repoLinkContainer'>
                <a className='repoLink' href="https://github.com/katiehan22/dot-catch" target="_blank">Visit our GitHub Repository!</a>
            </div>

        </section>
    )
}