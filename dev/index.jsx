import React from "react";
import ReactDOM from "react-dom";


// First example of how to put a component on the page via react.
var HelloWorld = React.createClass({
    render: function() {
        return (
          <p>Hello, {this.props.greetTarget}!</p>
      );
    }
});

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
  </div>,
    document.querySelector("#container1")
);  
// End first example



// Second example
    const Card = (props) => {
        return (
            <div>
                <img src="" />
                <div>
                    <div>Name</div>
                    <div>Company</div>
                </div>
            </div>
        );

    };

    ReactDOM.render(<Card />, 
        document.querySelector("#container2"));
// End second example