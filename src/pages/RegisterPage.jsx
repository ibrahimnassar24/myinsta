import {
    Box,
    Container,
    Flex,
    Heading,
    Img,
    VStack,
    Text,
    Link,
    Divider
} from "@chakra-ui/react";
import { useState } from "react";
import LogIn from "../components/RegisterForms/LogIn";
import SignUp from "../components/RegisterForms/SignUp";
import { color } from "framer-motion";

export default function RegisterPage() {

    const [isRegistered, setIsRegistered] = useState(true);
    const isRegisterdHandle = () => {
        setIsRegistered(s => !s)
    };

    return (
        <>
            <Flex
                w={{ base: "full", md: "4xl" }}
                h="90vh"
                m="auto"
            >
                <Box
                    display={{ base: "none", md: "block" }}
                    p={20}
                    flex={1}
                >
                    <Img src="/screenshot1.png" />
                </Box>
                <Flex
                    h="100%"
                    direction="column"
                    p={5}
                    justifyContent="space-between"
                    alignItems="center"
                    flex={1}
                    borderWidth="1px"
                    borderStyle="solid"
                    borderColor="gray.300"
                >

                    <Box
                        w="full"
                        p={10}
                        textAlign="center"
                        fontFamily="Pacifico"
                        fontSize="6xl"
                    >
                        My Insta
                    </Box>

                    <Box w="full">
                        {
                            isRegistered
                                ? <LogIn />
                                : <SignUp />
                        }
                    </Box>

                    <Flex
                        w="full"
                        direction="column"
                        justify="center"
                        align="center"
                        gap={5}
                    >

                        <Flex wrap="nowrap" justify="center" align="center">
                            <Divider w="50%"/>
                            <Box p={2}>OR</Box>
                            
                        </Flex>
                        <Link>log in with facebook</Link>
                        <Link>forget password?</Link>
                    </Flex>


                    <Box>
                        {
                            isRegistered
                                ? (<Text>
                                    dont have an account
                                    <Link p={2} as="span" onClick={isRegisterdHandle}>create one</Link>
                                </Text>)
                                : (<Text>
                                    already have an account
                                    <Link p={2} as="span" onClick={isRegisterdHandle}>Log in</Link>
                                </Text>)
                        }
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};