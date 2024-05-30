import { Layout, Wallet } from "@/components";
import { Box, Button, Stack, Text } from "@interchain-ui/react";
import Link from "next/link";

export default function ConnectPage() {
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
              attributes={{ ml: 2, mt: 20, backgroundColor: "$green200" }}
            >
              <Link
                href="/choose-your-mood"
                style={{
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                Take me there!
              </Link>
            </Button>
          </Box>
        </div>
      </Box>
    </Layout>
  );
}
