import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import { Icon } from '@tonic-ui/react';

test('render Avatar Icon', () => {
	render(
		<Avatar>
			<Icon icon="user-team" size="5x" />
		</Avatar>
	);
	const svgEle = screen.getByRole('presentation', { hidden: true });

	expect(svgEle).toBeInTheDocument();
});

test('render Avatar backgroundColor', () => {
	const value = '#ffffff';

	render(<Avatar data-testid="test" backgroundColor={value}></Avatar>);

	const ele = screen.getByTestId('test');

	expect(ele).toHaveStyle(`background-color: ${value}`);
});

test('render Avatar color', () => {
	const value = '#ffffff';

	render(<Avatar data-testid="test" color={value}></Avatar>);

	const ele = screen.getByTestId('test');

	expect(ele).toHaveStyle(`color: ${value}`);
});
