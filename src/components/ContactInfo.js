import React, {Component} from 'react';
import '../styles.css'

const namePlaceholder = 'John Doe';
const emailPlaceholder = 'johndoe@hotmail.com';
const numberPlaceholder = '(999) 999-9999';

class ContactInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            number: null,
            isEditing: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    toggleEdit = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isEditing: !prevState.isEditing
        }));
    }
    render() {
        const {name, number, email, isEditing} = this.state;
        return (
            <div className='centered'>
                {isEditing && <>
                    <input name="name" value={name ? name : ''} type="text" placeholder={namePlaceholder} onChange={this.handleInputChange} />
                    <input name="email" value={email ? email : ''} type="email" placeholder={emailPlaceholder} onChange={this.handleInputChange} />
                    <input name="number" value={number ? number : ''} placeholder={numberPlaceholder} type="tel" onChange={this.handleInputChange} />
                </>}
                {!isEditing && <>
                    <h1>{name ? name : namePlaceholder}</h1>
                    <div className='break-line'/>
                    <div className='centered'>
                        <a href={`mailto: ${email ? email : emailPlaceholder}`}>{email ? email : emailPlaceholder}</a>
                        <h2>{number ? number : numberPlaceholder}</h2>
                    </div>
                </>}
                <button onClick={this.toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
            </div>
        );
    }
}

export default ContactInfo;