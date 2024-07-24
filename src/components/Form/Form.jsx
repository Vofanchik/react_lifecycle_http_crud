import './Form.css';
import {useState} from 'react';

function Form({handleSubmit}) {

    const [textCard, setTextCard] = useState('');

    const handleChange = (e) => {
        setTextCard(e.target.value);
    }

    return (
        <div className="Form">
            <form
                onSubmit = {() => handleSubmit(textCard)}>

                <div className='Label-text'>
                    <label htmlFor='Card-text'>New Note</label>
                </div>

                <textarea 
                    id='Card-text'
                    value={textCard}
                    onChange = {e => handleChange(e)}
                    placeholder='enter text of your card'>
                </textarea>

                <button>&#10148;</button>

            </form>
        </div>
    );
}

export default Form;