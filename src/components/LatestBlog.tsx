"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottomBanner from "./BottomBanner";

const LatestBlogs: React.FC = () => {
  const latestBlogs = [
    {
      title: "How AI is Revolutionizing Industries",
      description:
        "Discover the transformative impact of AI in various sectors.",
      link: "/blog/ai-revolution",
      slug: "ai-revolution",
      image: "/images/1.webp",
      content: `
      Artificial Intelligence (AI) is reshaping industries by automating tasks, enhancing decision-making, and unlocking new possibilities.
      This blog explores the impact of AI in healthcare, finance, education, and more.
    `,
    },
    {
      title: "The Future of Work in a Digital Era",
      description:
        "Explore how technology is shaping the workplace of tomorrow.",
      link: "/blog/future-of-work",
      slug: "future-of-work",
      image: "/images/2.jpg",
      content: `
      As digital tools transform the workplace, this blog examines trends like remote work, AI integration, and new career opportunities.
    `,
    },
    {
      title: "Cybersecurity Trends to Watch in 2024",
      description: "Stay ahead with the latest cybersecurity trends and tips.",
      link: "/blog/cybersecurity-trends",
      slug: "cybersecurity-trends",
      image: "/images/3.jpg",
      content: `
      With evolving threats, cybersecurity is more critical than ever. Discover key trends and best practices for 2024.
    `,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBlogs.map((blog, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link
              href={`/latest/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>
      <BottomBanner />
    </div>
  );
};

export default LatestBlogs;
