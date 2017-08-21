var Counter = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('div', {onClick: this.increment}, 'PLUS +'),
            React.createElement('div', {onClick: this.decrement}, 'MINUS -'),
            React.createElement('div', {}, this.props.name + ' ' + this.state.counter)
        );
    }
});

var element = React.createElement('div', {},
    React.createElement(Counter, {name: "Dodawanie"}),
    React.createElement(Counter, {name: "Odejmowanie"})
);
ReactDOM.render(element, document.getElementById('app'));