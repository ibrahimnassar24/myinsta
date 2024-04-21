import {
    Heading, FormControl, FormLabel, FormHelperText, FormErrorMessage, Input, Flex, Box,
    Button
} from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

export default function LogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailChangeHandle = e => { setEmail(e.target.value) };
    const passwordChangeHandle = e => { setPassword(e.target.value) };
    const loginHandle = () => { console.log(email, password) };

    return (
        <Flex
            direction="column"
            shadow="lg"
        >
            <Box
                m={10}
            >
                <Heading>Log In</Heading>
            </Box>

            <Box>
                <Form
                method="post"
                >
                    <FormControl>
                        <FormLabel>email</FormLabel>
                        <Input
                            type="text"
                            name="email"
                            placeholder="enter your email"
                            value={email}
                            onChange={emailChangeHandle}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            placeholder="enter your password"
                            value={password}
                            onChange={passwordChangeHandle}
                        />
                    </FormControl>

                    <Flex
                        justifyContent="end"
                        m={5}
                    >
                        <Button
                            type="submit"
                        >
                            Log In
                        </Button>
                    </Flex>

                </Form>
            </Box>
        </Flex>
    );
};