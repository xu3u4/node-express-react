import ReactDOM from 'react-dom';
import React from 'react';
import GreetingCom from './greeting.jsx';

//component name must be Uppercamel case
class MainMessage extends React.Component{
	render(){
		return <GreetingCom name = "Jocelyn" />;
	}
}

ReactDOM.render(
	<MainMessage />,
	document.getElementById('app')
);