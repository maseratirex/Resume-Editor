import React, {Component} from 'react';
import '../styles.css'

const companyPlaceholder = 'Alphabet';
const positionTitlePlaceholder = 'Engineer';
const workDatePlaceholder = '01/23/45';

class ExperienceInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            company: '',
            positionTitle: '',
            workDate: '',
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
        const {company, positionTitle, workDate, isEditing} = this.state;
        return (
            <div className='centered'>
                {isEditing && <>
                    <input name="company" value={company ? company : ''} type="text" placeholder={companyPlaceholder} onChange={this.handleInputChange} />
                    <input name="workDate" value={workDate ? workDate : ''} placeholder={workDatePlaceholder} type="text" onChange={this.handleInputChange} />
                    <input name="positionTitle" value={positionTitle ? positionTitle : ''} type="text" placeholder={positionTitlePlaceholder} onChange={this.handleInputChange} />
                </>}
                {!isEditing && <>
                    <h1>Experience</h1>
                    <div className='break-line' />
                    <h2 className='left-aligned'>{company ? company : companyPlaceholder}</h2>
                    <h2 className='right-aligned'>{workDate ? workDate : workDatePlaceholder}</h2>
                    <div className='break-line' />
                    <h4 className='left-aligned'>{positionTitle ? positionTitle : positionTitlePlaceholder}</h4>
                </>}
                <button onClick={this.toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
            </div>
        );
    }
}

export default ExperienceInfo;