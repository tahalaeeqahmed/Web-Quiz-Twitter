import '../app/globals.css';
import { Sidebar } from './Components/Sidebar';

export const metadata = {
  title: 'Twitter Clone',
  description: 'A simple Twitter-like UI built with Next.js and TypeScript',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
