import {
    Box,
    Container,
    Flex,
    Heading,
    Img,
    VStack,
    Text,
    Link
} from "@chakra-ui/react";
import { useState } from "react";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";

export default function RegisterPage() {

    const [isRegistered, setIsRegistered] = useState(true);
    const isRegisterdHandle = () => {
        setIsRegistered(s => !s)
    };

    return (
        <>
            <Flex
                w={{ base: "full", md: "3xl" }}
                h="90vh"
                m="auto"
                gap={100}
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
                    justifyContent="space-between"
                    alignItems="center"
                    flex={1}
                >

                    <Box
                        pt={10}
                    >
                        <Heading fontFamily="Pacifico">My insta</Heading>
                    </Box>

                    <Box>
                        {
                            isRegistered
                                ? <LogIn />
                                : <SignUp />
                        }
                    </Box>

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