import { Layout, Wallet } from "@/components";
import { Box, Button, Link, Stack, Text } from "@interchain-ui/react";

export default function ConnectPage() {
  function onClickTakeMeThere() {}

  return (
    <Layout>
      <Box
        display={"flex"}
        height="100%"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "100px" }}>
          <Box>
            <Wallet />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            maxWidth={"400px"}
          >
            <Text
              fontSize={"$15xl"}
              fontWeight={"$semibold"}
              fontFamily={"ui-sans-serif"}
            >
              10¢
            </Text>
            <ul>
              <li style={{ marginBottom: "10px" }}>
                <Text
                  textAlign={"left"}
                  fontSize={"$md"}
                  fontWeight={"$light"}
                  fontFamily={"monospace"}
                  color={"$accentText"}
                >
                  Experience the Emotional Jukebox for just 10 cents per
                  session.
                </Text>
              </li>
              <li>
                <Text
                  textAlign={"left"}
                  fontSize={"$md"}
                  fontWeight={"$light"}
                  fontFamily={"monospace"}
                  color={"$accentText"}
                >
                  Plus, with our interoperability with the Cosmos chain, you can
                  use your favorite token to pay. Enjoy the convenience and
                  flexibility of paying with the currency of your choice!
                </Text>
              </li>
            </ul>
            <Button
              onClick={onClickTakeMeThere}
              attributes={{ ml: 2, mt: 20, backgroundColor: "$green200" }}
            >
              Take me there!
            </Button>
          </Box>
        </div>
      </Box>
    </Layout>
  );
}
