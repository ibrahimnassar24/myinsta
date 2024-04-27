import {
    Flex
} from "@chakra-ui/react";
import Post from "./Post";

export default function PostFeed() {

    return (
        <Flex
            direction="column"
        >
            <Post />
        </Flex>
    );
};