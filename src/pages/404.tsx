import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main className="md:max-w-5xl mx-auto mt-32 text-center text-white">
        <h1 className="text-6xl font-bold tracking-tighter">404 - Page Not Found</h1>
        <p className="text-lg mt-5">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="px-6 py-3 font-medium leading-relaxed bg-transparent rounded-3xl shadow-[0_0_4px_rgba(255,255,255,0.4)]"
          >
            Go Back Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>