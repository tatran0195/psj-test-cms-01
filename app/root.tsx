import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const isNavigating = navigation.state === "loading" || navigation.state === "submitting";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Anti-FOUC (Flash of Unstyled Content) Script for Dark Mode */}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `
        }} />
      </head>
      <body>
        <AnimatePresence>
          {isNavigating && (
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 0.7, opacity: 1 }}
              exit={{ scaleX: 1, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 h-[3px] bg-accent z-[9999] origin-left shadow-[0_0_10px_var(--color-accent)]"
            />
          )}
        </AnimatePresence>
        
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}