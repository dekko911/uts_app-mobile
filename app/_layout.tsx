import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          // backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "iPhone 13 Pro Memex" }}
      />
    </Stack>
  );
}
