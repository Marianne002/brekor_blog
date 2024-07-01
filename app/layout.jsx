// app/layout.jsx
"use client";
import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const layout = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />

        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
          rel="stylesheet"  
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="bg-darker">
          <Navbar />
          <main className="container">
            {children}
          </main>
          <Footer />
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></script>
        </body>
    </html>
  );
};

export default layout;
