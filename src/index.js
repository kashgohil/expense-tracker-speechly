import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'context/context';
import { SpeechProvider } from '@speechly/react-client';
ReactDOM.render(
	<React.StrictMode>
		<SpeechProvider language='en-US' appId='312d9ac3-d335-462f-80f9-061e4e99c80a'>
			<Provider>
				<App />
			</Provider>
		</SpeechProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
