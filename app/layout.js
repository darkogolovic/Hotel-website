import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "Hotel Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by &copy; Darko Golovic</footer>
      </body>
    </html>
  );
}
