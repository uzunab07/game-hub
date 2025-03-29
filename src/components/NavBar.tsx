import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={30}></Image>
      <Text> NavBar</Text>
    </HStack>
  );
};

export default NavBar;
