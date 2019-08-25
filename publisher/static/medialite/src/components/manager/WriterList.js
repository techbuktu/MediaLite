import React, { Component } from 'react';
import Writer from './Writer';

export default class WriterList extends Component {
    state = {
        writers: [ ]
    }

    render() {
        return this.state.writers.map((writer) => (
            <Writer key={writer.link} writer={writer} />
        ))
    }
}
