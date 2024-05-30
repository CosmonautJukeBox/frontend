/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Divider, Stack, Text } from "@interchain-ui/react";
import { Layout, Wallet } from "@/components";
import Image from "next/image";
import LandingPageImage from "@/public/gifs/f242bac4512325947a7284b1afd4d32b.gif";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Box height={"100%"}>
        <Stack direction="horizontal" space={"$10"}>
          <Image
            style={{ borderRadius: 200, height: 400, width: 400 }}
            src={LandingPageImage}
            alt="astronaunt image"
          />
          <Box padding={"$15"}>
            <Stack direction="vertical">
              <Box mt={"$3"}>
                <Text as="h2" fontSize="$5xl">
                  Tune Into Your Emotions
                </Text>
              </Box>

              <Box mt={"$6"} p={"$2"}>
                <Text as="p" fontWeight={"$light"} fontSize={"$lg"}>
                  Connect with your feelings like never before with our
                  innovative Emotional Jukebox app. Whether you're feeling sad,
                  happy, tired, hungry, or horny, we've got the perfect
                  soundtrack and light show to match your mood.
                </Text>
              </Box>

              <Box mt={"$12"} width={"$full"}>
                <Button
                  fluidWidth
                  attributes={{ backgroundColor: "$green200" }}
                >
                  <Link
                    href="/connect-wallet"
                    style={{
                      // width: "100%",
                      // height: "100%",
                      textAlign: "center",
                      textDecoration: "underline",
                    }}
                  >
                    Start Here
                  </Link>
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
}
