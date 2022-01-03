import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default class OtherPage extends Component {
    render() {
        return (
            <div>
                Im some other page!
                <Link to='/'>Go back home</Link>
            </div>
        )
    }
}