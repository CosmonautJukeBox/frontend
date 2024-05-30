import {
  Box,
  Button,
  Divider,
  Icon,
  Link,
  Text,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";
import { dependencies } from "@/config";
import Logo from "@/public/favicon.ico";
import Image from "next/image";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center", // Align items along the vertical center
        }}
      >
        <Box display="flex" alignItems="center">
          {" "}
          {/* Centering elements */}
          <Link href={"/"} attributes={{ marginRight: "10px" }}>
            <Image src={Logo} alt={"Logo"} height={60} />
          </Link>
          <Text
            as="h1"
            fontWeight="$extrabold"
            fontSize={{ mobile: "$3xl", tablet: "$5xl" }}
            attributes={{ mb: "8px" }}
          >
            Cosmonaunt Juke Box
          </Text>
        </Box>

        <Box>
          <Button
            intent="secondary"
            size="sm"
            onClick={toggleColorMode}
            attributes={{ px: 0 }}
          >
            <Icon name={useColorModeValue("moonLine", "sunLine")} />
          </Button>
        </Box>
      </div>
      <Box mb={"$6"}>
        <Divider />
      </Box>
    </>
  );
}
