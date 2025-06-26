import "./globals.css";
import Header from "../components/Header";


export const metadata = {
  title: "Meraki-Culinary Arts Society,IITK",
  description: "We are the community of food lovers who love to cook and try out different cuisines all over the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
