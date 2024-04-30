import {
    Flex, Box
} from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import HomePge from "../pages/HomePage";

export default function BasicLayout() {

    return (
        <>
            <Flex h="100vh">
                
                {/* right section */}
                <Box
                    w={{base: "30px", lg: "18vw"}}
                >
                    <SideBar />
                </Box>

                {/* right section */}
                <Box flex={1}>
                    <HomePge />
                </Box>

            </Flex>
        </>
    );
};