import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    render() {

        let classes = 'badge m-2 ';
        classes += (this.state.count === 0) ? 'badge-warning' : 'badge-primary';

        return (
            <React.Fragment>
                <br/>
                <img src={this.state.imageUrl} alt=""/>
                <br/>
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state; // object destructuring
        return count === 0 ? 'Zero' : count ;
    }

}

export default Counter;