import { Switch, HStack, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
				colorScheme="teal"
			/>
			<Text>NavBar</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
