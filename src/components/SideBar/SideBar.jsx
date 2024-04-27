import {
    Flex, Box, Text,
    Link,
    Tooltip
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import svgs, { MyInstaSVG, SettingsSVG, ThreadsSVG } from "./SVGs";

export default function SideBar() {

    return (
        <Flex
            h="full"
            direction="column"
        >

            <Box>
                <Box
                    display={{ base: "block", lg: "none" }}
                    p={5}
                >
                    <MyInstaSVG />
                </Box>
                <Box
                    display={{ base: "none", lg: "block" }}
                    textAlign="center"
                >
                    <Text
                        as="span"
                        fontFamily="Pacifico"
                        fontSize="4xl"
                    >
                        My Insta
                    </Text>
                </Box>
            </Box>

            <Flex
                direction="column"
                justify="space-between"
                flex={1}
            >
                <Box>
                    {

                        svgs.map(svg => (

                            <Box key={svg.text}>
                                <RLink>
                                    <Flex
                                        justify="flex-start"
                                        align="center"
                                        gap={4}
                                        p={5}
                                    >
                                        <Box display={{ base: "none", lg: "block" }}>
                                            {svg.element}
                                        </Box>
                                        <Box display={{ base: "block", lg: "none" }}>
                                            <Tooltip
                                                hasArrow
                                                label={svg.text}
                                                bg="gray.700"
                                                placement="right"
                                            >
                                                <Box>
                                                    {svg.element}
                                                </Box>

                                            </Tooltip>
                                        </Box>
                                        <Box
                                            display={{ base: "none", lg: "block" }}
                                        >
                                            <Text>{svg.text}</Text>
                                        </Box>
                                    </Flex>
                                </RLink>
                            </Box>
                        ))

                    }
                </Box>

                <Box>
                    <RLink>
                        <Flex
                            justify="flex-start"
                            align="center"
                            gap={4}
                            p={5}
                        >
                            <Box display={{ base: "none", lg: "block" }}>
                                <ThreadsSVG />
                            </Box>
                            <Box display={{ base: "block", lg: "none" }}>
                                <Tooltip
                                    hasArrow
                                    label="Threads"
                                    bg="gray.700"
                                    placement="right"
                                >
                                    <Box>
                                        <ThreadsSVG />
                                    </Box>
                                </Tooltip>
                            </Box>
                            <Box display={{ base: "none", lg: "block" }}>
                                <Text>Threads</Text>
                            </Box>
                        </Flex>
                    </RLink>
                    <RLink>
                        <Flex
                            justify="flex-start"
                            align="center"
                            gap={4}
                            p={5}
                        >
                            <Box display={{ base: "none", lg: "block" }}>
                                <SettingsSVG />
                            </Box>
                            <Box display={{ base: "block", lg: "none" }}>
                                <Tooltip
                                    hasArrow
                                    label="Settings"
                                    bg="gray.700"
                                    placement="right"
                                >
                                    <Box>
                                        <SettingsSVG />
                                    </Box>
                                </Tooltip>
                            </Box>
                            <Box display={{ base: "none", lg: "block" }}>
                                <Text>Settings</Text>
                            </Box>
                        </Flex>
                    </RLink>
                </Box>
            </Flex>

        </Flex>
    );
};