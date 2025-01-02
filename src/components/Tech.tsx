"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import BottomBanner from "./BottomBanner";

const Tech: React.FC = () => {
  const techArticles = [
    {
      title: "Artificial Intelligence and Machine Learning Explained",
      description:
        "A beginner's guide to AI and machine learning technologies.",
      slug: "ai-ml-explained",
      image: "/images/7.jpg",
      content: `
      Artificial Intelligence (AI) and Machine Learning (ML) are rapidly advancing fields in technology. Here's a guide to help you understand these concepts:
      - **AI**: Focuses on creating systems that can perform tasks that would typically require human intelligence.
      - **ML**: A subset of AI, it allows systems to learn from data and improve over time.
      This article will explore both technologies and their impact on various industries.
    `,
    },
    {
      title: "The Role of 5G in Modern Technology",
      description:
        "How 5G will revolutionize connectivity and digital landscapes.",
      slug: "role-of-5g",
      image: "/images/8.jpg",
      content: `
      5G is the next generation of mobile networks, offering faster speeds and lower latency. Here's how 5G will impact the future:
      - **Speed**: 5G will enable ultra-fast data transfer speeds, unlocking new possibilities for mobile technology.
      - **Connectivity**: 5G will enhance IoT connectivity, enabling smarter homes and cities.
      - **Innovation**: From autonomous vehicles to immersive AR experiences, 5G will drive technological advancements.
    `,
    },
    {
      title: "Exploring Augmented Reality (AR) in Gaming",
      description:
        "How AR is changing the gaming world and creating immersive experiences.",
      slug: "ar-in-gaming",
      image: "/images/9.jpg",
      content: `
      Augmented Reality (AR) is revolutionizing gaming by blending digital elements with the real world. Here's how AR is reshaping gaming:
      - **Immersive Experiences**: Games like Pokémon GO have demonstrated the potential of AR to create engaging real-world experiences.
      - **Virtual Objects**: AR allows players to interact with virtual objects in their physical environment.
      - **Future of AR Gaming**: With advancements in AR technology, we can expect even more realistic and interactive experiences.
    `,
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Technology Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techArticles.map((article, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
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
              href={`/tech/${article.slug}`}
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

export default Tech;
