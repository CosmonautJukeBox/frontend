import { Layout, Wallet } from "@/components";
import { CHAIN_NAME, CONTRACTADDRESS } from "@/config";
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin } from "@cosmjs/stargate";
import { useChain } from "@cosmos-kit/react";
import {
  Box,
  Button,
  Link,
  NftProfileCard,
  Stack,
  Text,
} from "@interchain-ui/react";
import { useState, useEffect } from "react";

interface RootHashes {
  [key: number]: string[];
}

const ChooseYourMoodPage: React.FC = () => {
  const { address, getSigningCosmWasmClient } = useChain(CHAIN_NAME);
  const [client, setClient] = useState<SigningCosmWasmClient>();

  useEffect(() => {
    if (!address) return;

    getSigningCosmWasmClient()
      .then((client) => {
        // @ts-ignore
        setClient(client);
      })
      .catch((error) => {
        console.error("Failed to get signing client", error);
      });
  }, [getSigningCosmWasmClient, address]);

  const moods = {
    happy: 1,
    angry: 2,
    sad: 3,
    tired: 4,
    horny: 5,
  } as const;

  type Mood = keyof typeof moods;

  const rootHashes: RootHashes = {
    1: [
      "63193d187b2f8d4851d140bc1853cd24e54c394eb5f511d3406bd599ddf4fe9d",
      // Add other happy hashes here
    ],
    2: [
      "795b406879edd15c9ad152764c9f9b7421976e0250f0559caefae6a1bfffc323",
      // Add other angry hashes here
    ],
    3: [
      "9c1fa66a0db4b0b79d790083307938d7ea77135b9d8886aa921cb15b8bebc855",
      // Add other sad hashes here
    ],
    4: [
      "d9b14828e5982b559f7fff83ac5a6009a131a78cefee2cae02de9fd3c61ef5aa",
      // Add other tired hashes here
    ],
    5: [
      "52b81a78ffeb38153d0cac6fb3de0333dab73d0825c7309827cbb12fbea6316c",
      // Add other horny hashes here
    ],
  };

  const addHash = async (
    client: SigningCosmWasmClient,
    sender: string,
    hash: string,
    funds: Coin[]
  ) => {
    try {
      const res = await client.execute(
        sender,
        CONTRACTADDRESS,
        { add_led_hash: { hash: 1 } },
        "auto",
        "",
        funds
      );
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error executing contract:", error);
    }
  };

  const handleCardClick = async (mood: Mood) => {
    console.log("clicked ", client);

    if (!client || !address) return;

    const sender = address;
    const hashes = rootHashes[moods[mood]];
    const randomHash = hashes[Math.floor(Math.random() * hashes.length)];
    const funds: Coin[] = [];

    await addHash(client, sender, randomHash, funds);
  };

  return (
    <Layout>
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        {Object.keys(moods).map((mood) => (
          <Box key={mood} maxWidth="360px" mx="$10">
            <NftProfileCard
              imgSrc={`/astronauts/${mood}.jpg`}
              name={`${mood.charAt(0).toUpperCase() + mood.slice(1)}`}
              onClick={() => handleCardClick(mood as Mood)}
            />
          </Box>
        ))}
      </Box>
    </Layout>
  );
};

export default ChooseYourMoodPage;
