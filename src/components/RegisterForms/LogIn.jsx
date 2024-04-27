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

        <Form
            method="post"
        >
            <Flex
                direction="column"
                gap={5}
            >
                <FormControl>
                    <Input
                        type="text"
                        name="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={emailChangeHandle}
                    />
                </FormControl>

                <FormControl>
                    <Input
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        value={password}
                        onChange={passwordChangeHandle}
                    />
                </FormControl>

                <Button
                    type="submit"
                    w="full"
                    bgColor="blue.300"
                >
                    Log In
                </Button>

            </Flex>
        </Form >
    );
};