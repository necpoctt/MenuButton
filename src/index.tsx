import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { TonicProvider } from '@tonic-ui/react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const MenuButton = lazy(
	() => import(/* webpackPrefetch: true */ /* webpackChunkName: "MenuButton" */ './components/MenuButton')
);

root.render(
	<React.StrictMode>
		<TonicProvider
			colorMode={{
				defaultValue: 'dark',
			}}
		>
			<div className="container">
				<MenuButton />
			</div>
		</TonicProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
