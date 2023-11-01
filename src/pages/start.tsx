import * as React from "react";
import Layout from "../components/layout";

const StartPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold text-center">Get Started</h1>
        <p className="text-lg text-center mt-4">Create your QR Code in seconds.</p>
      </div>
    </Layout>
  );
};

export default StartPage;
