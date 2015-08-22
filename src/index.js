var React = require('react');
class Home extends React.Component {
  render() {
    return(<h1>Test</h1>);
  }
}

React.render(
    <Home />,
    document.getElementById('home')
  );
