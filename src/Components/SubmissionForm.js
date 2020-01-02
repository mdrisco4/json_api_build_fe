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
                        value={title}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="release date"
                        value={release_date}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="tagline"
                        value={tagline}
                        onChange={this.onChange}
                    />
                    <input
                            type="text"
                            placeholder="length (in minutes)"
                            value={runtime}
                            onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="synopsis"
                        value={overview}
                        onChange={this.onChange}
                    />
                    <input
                        type="text"
                        placeholder="box office receipts"
                        value={revenue}
                        onChange={this.onChange}
                    />
                </form>
            </div>
        );
    }
}

export default SubmissionForm;