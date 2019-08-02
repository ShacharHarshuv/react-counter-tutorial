import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    render() {
        return (
            <React.Fragment>
                <span className={this.badgeClasses}>{this.countView}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    { this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    get badgeClasses() {
        return `badge ${this.state.count === 0 ? 'badge-warning' : 'badge-primary' } m-2`
    }

    get countView() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
