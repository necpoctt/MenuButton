import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MenuButton from './MenuButton';
import { TonicProvider } from '@tonic-ui/react';

test('render MenuButton', () => {
	render(
		<TonicProvider
			colorMode={{
				defaultValue: 'dark',
			}}>
			<div className="container">
				<MenuButton data-testid="test" />
			</div>
		</TonicProvider>
	);
	const ele = screen.getByTestId('test');
	expect(ele).toBeInTheDocument();
});

test('render MenuButton open menu', async () => {
	render(
		<TonicProvider
			colorMode={{
				defaultValue: 'dark',
			}}>
			<div className="container">
				<MenuButton />
			</div>
		</TonicProvider>
	);

	fireEvent.click(screen.getByRole('button'));
	waitFor(() => screen.getByText('Settings'));

	expect(screen.getByText('Settings')).toBeInTheDocument();
});
