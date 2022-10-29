import { IconButton } from "@chakra-ui/button";
import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
    <Navbar/>
    <br/><br/>
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="xl" fontWeight="semibold" color="cyan.400" border="5px solid rgb(31,53,80)" borderRadius="50%" padding="10px" alignItems="center" backgroundColor="rgb(237,242,247)">
          <b>
            <i>₱p</i>
          </b>
        </Heading>

        <Spacer></Spacer>
        <a
          href="https://www.linkedin.com/in/pushpraj-patel-4006ba18a/"
          target="_blank"
        >
          {" "}
          <IconButton icon={<FaLinkedin />} isRound="true"></IconButton>
        </a>
        <a href="https://www.instagram.com/pushpraj.patel.007/" target="_blank">
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
        </a>
        <a href="https://github.com/pushpraj15295" target="_blank">
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
        </a>

        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
    </>
  );
}

export default App;
