import { Text, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textQRCode}>SCAN THIS QR CODE</Text>
        <Image
          source={{ uri: "../assets/images/qrcode.jpg" }}
          style={styles.imageQRCode}
        />
        <Text style={styles.textName}>YOUR NAME</Text>
        <Text style={styles.textEmail}>your-email@gmail.com</Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.textBarcode}>Try BARCODE</Text>
        <Image
          source={{ uri: "../assets/images/barcodeee.jpg" }}
          style={styles.imageBarcode}
        />
        <Text style={styles.textAnakBarcode}>Can't scan the QR Code?</Text>
        <Text style={styles.textLink}>
          Try{" "}
          <Link href={"/"} style={styles.linkAnak}>
            Bank Account
          </Link>
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#004d80",
    justifyContent: "center",
    alignItems: "center",
  },

  imageQRCode: {
    width: 200,
    height: 200,
  },

  textQRCode: {
    color: "#ffffff",
    fontWeight: "bold",
    fontStyle: "italic",
    paddingBottom: 10,
    fontSize: 15,
  },

  textName: {
    paddingTop: 60,
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 20,
    letterSpacing: 2,
  },

  textEmail: {
    opacity: 0.5,
    fontSize: 15,
    color: "#fff",
  },

  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textBarcode: {
    opacity: 0.5,
    color: "#000000",
    paddingBottom: 7,
  },

  imageBarcode: {
    width: 150,
    height: 50,
  },

  textAnakBarcode: {
    fontSize: 15,
    paddingTop: 60,
    opacity: 0.5,
  },

  textLink: {
    color: "#878c91",
    opacity: 1,
    fontSize: 15,
  },

  linkAnak: {
    color: "#0000ff",
    textDecorationLine: "underline",
  },
});
