import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch/>}/>
      <Input placeholder="Search here..." variant="filled" borderRadius={20} />
    </InputGroup>
  );
};

export default SearchBox;
