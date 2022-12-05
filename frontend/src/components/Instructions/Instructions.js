import { useDispatch } from "react-redux";
import { hideModal } from "../../store/ui";

export default function Instructions() {
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
            <p className="instructionsText">Click the <em className="buttonInstruction">.pop</em> button to pass, or click the <em className="buttonInstruction">.push</em> button to like!</p>
        </section>
    )
}