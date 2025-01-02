"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BottomBanner from "./BottomBanner";

interface Article {
  title: string;
  description: string;
  slug: string;
  image: string;
}

const Featured: React.FC = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = [
        {
          title: "Top 5 AI Tools You Should Know About",
          description: "A curated list of AI tools for professionals.",
          slug: "ai-tools",
          image: "/images/4.jpg",
        },
        {
          title: "The Rise of Quantum Computing",
          description:
            "An in-depth look into the evolving field of quantum computing.",
          slug: "quantum-computing",
          image: "/images/5.jpg",
        },
        {
          title: "Blockchain Beyond Cryptocurrency",
          description:
            "Understanding blockchain's potential outside of crypto.",
          slug: "blockchain",
          image: "/images/6.jpg",
        },
      ];
      setFeaturedArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.length === 0 ? (
          <div className="col-span-3 text-center text-gray-600">
            Loading articles...
          </div>
        ) : (
          featuredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>

              <Link
                href={`/featured/${article.slug}`}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))
        )}
      </div>
      <BottomBanner />
    </div>
  );
};

export default Featured;
