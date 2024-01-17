import '@/app/ui/global.css';
import { InterFont } from '@/app/ui/font';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = { `${InterFont.className} antialiased`}>{children}</body>
    </html>
  );
}
