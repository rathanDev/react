import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() {

        return (
            <React.Fragment>
                <img src={this.state.imageUrl} alt="" className='m-2' />
                <br />
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>

                {this.renderTags()}

            </React.Fragment>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0)
            return <p className='m-2'>there are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    getBadgeClasses() {
        let classes = 'badge m-2 ';
        classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state; // object destructuring
        return count === 0 ? 'Zero' : count;
    }

}

export default Counter;