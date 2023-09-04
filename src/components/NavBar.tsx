import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

interface Props{
  onSearch: (searchText: string)=>void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="5px">
      <Image src={logo} />
      <SearchBox onSearch={onSearch}/>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
