import React, {Component} from 'react';
import '../styles.css'

const universityPlaceholder = 'University of Collegetown';
const graduationPlaceholder = '01/23/45';
const degreePlaceholder = 'Computer Science';

class EducationInfo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            university: '',
            graduation: '',
            degree: '',
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
        const {university, graduation, degree, isEditing} = this.state;
        return (
            <div className='centered'>
                {isEditing && <>
                    <input name="university" value={university ? university : ''} type="text" placeholder={universityPlaceholder} onChange={this.handleInputChange} />
                    <input name="graduation" value={graduation ? graduation : ''} type="text" placeholder={graduationPlaceholder} onChange={this.handleInputChange} />
                    <input name="degree" value={degree ? degree : ''} placeholder={degreePlaceholder} type="text" onChange={this.handleInputChange} />
                </>}
                {!isEditing && <>
                    <h1>Education</h1>
                    <div className='break-line' />
                    <h2 className='left-aligned'>{university ? university : universityPlaceholder}</h2>
                    <h2 className='right-aligned'>{graduation ? graduation : graduationPlaceholder}</h2>
                    <div className='break-line' />
                    <h4 className='left-aligned'>{degree ? degree : degreePlaceholder}</h4>
                </>}
                <button onClick={this.toggleEdit}>{isEditing ? "Save" : "Edit"}</button>
            </div>
        );
    }
}

export default EducationInfo;