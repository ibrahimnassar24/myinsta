import {
    Flex, Box, FormControl, FormLabel, Input, Heading, Button
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

import { useState } from "react";

export default function SignUp() {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setconfirm] = useState("");

    const emailChangeHandle = e => { setEmail(e.target.value) };
    const passwordChangeHandle = e => { setPassword(e.target.value) };
    const fNameChangeHandle = e => { setFName(e.target.value) };
    const lNameChangeHandle = e => { setLName(e.target.value) };
    const confirmChangeHandle = e => { setconfirm(e.target.value) };

    return (
        <Form
            method="post"
        >
            <Flex
                direction="column"
                gap={5}
            >

                <Flex>
                    <FormControl>
                        <Input
                            type="text"
                            name="fName"
                            placeholder="first name"
                            value={fName}
                            onChange={fNameChangeHandle}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type="text"
                            name="lName"
                            placeholder="last name"
                            value={lName}
                            onChange={lNameChangeHandle}
                        />
                    </FormControl>
                </Flex>

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

                <FormControl>
                    <Input
                        type="password"
                        placeholder="re-enter your password"
                        value={confirm}
                        onChange={confirmChangeHandle}
                    />
                </FormControl>

                <Button
                    type="submit"
                    w="full"
                    bgColor="blue.300"
                    isDisabled={!password || password !== confirm}
                >
                    Sign Up
                </Button>
            </Flex >
        </Form>
    );
};