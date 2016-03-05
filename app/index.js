/*jshint esnext: true */

var React = require('react');
var ReactDOM = require('react-dom');

var HelloUser = React.createClass({
    render: function (){
        var name = "Herman";
        var peeps = ['Erp', 'Derp', 'Lerp'];
        return (
            <div>
                <h2>Hello, {name}</h2>
                <ShowList names={peeps} />
            </div>
        )
    }
});

var ShowList = React.createClass({
    render: function (){
        var listItems = this.props.names.map(function(peep){
            return <li> {peep} </li>;
        });
        return (
            <div>
                <h3> Peeps </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<HelloUser />, document.getElementById('app'));
