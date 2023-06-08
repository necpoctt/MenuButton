import { Flex } from '@tonic-ui/react';

const Avatar = (props: any) => (
	<Flex
		p="1x"
		borderRadius="50%"
		alignItems="center"
		justifyContent="center"
		fontSize="xs"
		lineHeight="1"
		{...props}
	/>
);

export default Avatar;
