import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggler = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
			rounded='full'
			_focus={{ outline: 0 }}
		/>
	);
};

export default ThemeToggler;
