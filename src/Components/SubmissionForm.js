import React, { Component } from 'react';
import '../Styles/SubmissionForm.css'

class SubmissionForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            release_date:'',
            tagline: '',
            runtime: '',
            overview: '',
            revenue: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="title"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="release date"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="tagline"
                        onChange={this.onChange}
                    />
                        <input
                            type="text"
                            placeholder="length (in minutes)"
                            onChange={this.onChange}
                        />
                    <input
                        type="text"
                        placeholder="synopsis"
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="box office receipts"
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}

export default SubmissionForm;