import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-night-sky bg-cover bg-no-repeat bg-fixed bg-center"
    >
      <body>{children}</body>
    </html>
  );
}
