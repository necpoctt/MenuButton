import {
	Menu,
	Flex,
	MenuItem,
	MenuList,
	MenuToggle,
	Box,
	Icon,
	Text,
	useColorMode,
	useColorStyle,
} from '@tonic-ui/react';
import { useState } from 'react';
import Avatar from './Avatar';

const MenuButton = (props: any) => {
	const [colorMode] = useColorMode();
	const [colorStyle]: any = useColorStyle({ colorMode });
	const [menuState, setMenuState] = useState('main');

	return (
		<Menu
			onOpen={() => {
				setMenuState('main');
			}}
			{...props}
		>
			<MenuToggle>
				<Avatar
					backgroundColor={colorStyle.background.secondary}
					color={colorStyle.color.secondary}
					_hover={{
						color: colorStyle.color.primary,
					}}
				>
					<Icon icon="user-team" size="5x" />
				</Avatar>
			</MenuToggle>
			<MenuList width="max-content">
				<Box display={menuState === 'main' ? 'block' : 'none'}>
					<MenuItem>
						<Flex flex="none" mr="3x">
							<Icon icon="settings" />
						</Flex>
						<Flex flex="auto">
							<Text>Settings</Text>
						</Flex>
					</MenuItem>
					<MenuItem>
						<Flex flex="none" mr="3x">
							<Icon icon="user-team" />
						</Flex>
						<Flex flex="auto">
							<Text>Accounts</Text>
						</Flex>
					</MenuItem>
					<MenuItem>
						<Flex flex="none" mr="3x">
							<Icon icon="lock" />
						</Flex>
						<Flex flex="auto">
							<Text>Privacy control</Text>
						</Flex>
					</MenuItem>
				</Box>
			</MenuList>
		</Menu>
	);
};

export default MenuButton;
