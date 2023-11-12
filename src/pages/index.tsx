import * as React from "react";
import { Link } from "gatsby"; // Import Link from Gatsby
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="container mx-auto my-8 mt-32">
        <h1 className="text-6xl text-center font-sans font-bold">Need A QR Code Fast?</h1>
        <p className="text-lg text-center text-xl mt-6">Generate a QR Code for your URL in seconds, using this quick and easy generator.</p>
        <div className="text-center mt-8">
          <Link to="/start" className="px-6 py-3 text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started Generating Your QR Code
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>QR Code Generator</title>;
