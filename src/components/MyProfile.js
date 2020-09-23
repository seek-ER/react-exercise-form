import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Your name',
            gender: 'male',
            description: 'Description about yourself',
            isChecked: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={'title'}>My Profile</div>
                <label htmlFor="">
                    <div className={'subtitle'}>Name</div>
                    <input
                        className={'context'}
                        type="text"
                        name={'name'}
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </label><br/>
                <label htmlFor="">
                    <div className={'subtitle'}>Gender</div>
                    <select className={'context'} name="gender" value={this.state.gender} onChange={this.handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label><br/>
                <label htmlFor="">
                    <div className={'subtitle'}>Description</div>
                    <textarea id={'textarea'}
                              className={'context'}
                              name="description"
                              value={this.state.description}
                              onChange={this.handleChange}
                              cols="40" rows="8">
                    </textarea>
                </label><br/>
                <label htmlFor="">
                    <div>
                        <input className={'checkbox'} type="checkbox"
                               checked={this.state.isChecked}
                               onChange={this.toggleChange}
                        />
                        I have read the terms of conduct
                    </div>
                </label>
                <input className={'submit'}
                       type="submit"
                       value={'submit'}
                       disabled={!this.state.name || !this.state.gender || !this.state.description || !this.state.isChecked}
                />
            </form>
        );
    }
}

export default MyProfile;


