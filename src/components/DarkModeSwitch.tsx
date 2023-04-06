import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

interface Props {
	onSwitchDarkMode: () => void;
}

const DarkModeSwitch = ({ onSwitchDarkMode }: Props) => {
	return (
		<FormControl display="flex" alignItems="center">
			<Switch
				id="darkModeSwitch"
				colorScheme="teal"
				onChange={onSwitchDarkMode}
				mr="2"
			/>
			<FormLabel htmlFor="darkModeSwitch" mb="0">
				Dark Mode
			</FormLabel>
		</FormControl>
	);
};

export default DarkModeSwitch;
