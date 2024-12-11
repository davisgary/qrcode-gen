import * as React from "react";
import { Link } from "gatsby";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import '../styles/global.css';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="container mx-auto text-center text-white my-8 mt-32 md:max-w-5xl">
        <h1 className="text-6xl font-bold tracking-tighter">Need A Quick QR Code?</h1>
        <p className="text-lg mt-5">Generate a QR Code for your URL in seconds, using this quick and easy generator.</p>
        <div className="mt-8">
          <Link to="/start" className="px-6 py-3 text-base font-medium bg-transparent rounded-3xl shadow-[0_0_4px_rgba(255,255,255,0.4)]">
            Get Started Generating Your QR Code
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>QR Code Generator</title>;
