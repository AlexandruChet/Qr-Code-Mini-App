import QRCode from "qrcode";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Generate a QR code? (y/n): ", (answer) => {
    if (answer === "y" || answer === "Y") {
        rl.question("Enter the text/URL for the QR code: ", async (text) => {
            try {
                const qr = await QRCode.toString(text, {
                    type: "terminal",
                    small: true,
                });

                console.log(qr);

                await QRCode.toFile("qr.png", text);
                console.log("QR code saved as qr.png");

            } catch (error) {
                console.error("Error generating QR code: " + error);
            } finally {
                rl.close();
            }
        });

    } else if (answer === "n" || answer === "N") {
        console.log("OK");
        rl.close();

    } else {
        console.log("Please write a correct answer (y/n).");
        rl.close();
    }
});
