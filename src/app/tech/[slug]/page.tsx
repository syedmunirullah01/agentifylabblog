"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

interface BlogContent {
  title: string;
  description: string;
  image: string;
  content: string;
}

const techArticles: { [key: string]: BlogContent } = {
  "ai-ml-explained": {
    title: "Artificial Intelligence and Machine Learning Explained",
    description:
      "Artificial Intelligence (AI) and Machine Learning (ML) are two of the most transformative technologies of the 21st century. They are often mentioned together but serve different purposes. Understanding these technologies is crucial as they continue to revolutionize industries, reshape the workforce, and influence our daily lives.",
    image: "/images/7.jpg",
    content: `
      What is AI?
Artificial Intelligence refers to the capability of machines to perform tasks that would typically require human intelligence. AI can mimic cognitive functions such as learning, problem-solving, and decision-making. It powers technologies like virtual assistants (e.g., Siri and Alexa), self-driving cars, and even advanced healthcare systems that can diagnose diseases and suggest treatments.

What is ML?

Machine Learning is a subset of AI that focuses on building systems that can learn from data. Unlike traditional AI, which follows pre-programmed rules, ML enables machines to learn patterns and make predictions based on data. ML algorithms are used in recommendation systems, fraud detection, and image recognition. By processing vast amounts of data, ML systems improve their accuracy over time.

Key Differences

While AI is the broader concept of creating intelligent systems, Machine Learning is the specific method of achieving it through data analysis. AI includes a variety of techniques, and ML is one of the key tools used to implement AI solutions.

Applications

AI and ML are being applied across multiple industries. In healthcare, AI is used for diagnostic tools, in finance, ML helps detect fraudulent transactions, and in entertainment, AI powers personalized recommendations on platforms like Netflix and Spotify.

Conclusion

AI and ML are quickly becoming integral to everyday life and business. As these technologies continue to evolve, their potential to enhance productivity, create new solutions, and revolutionize industries will only grow. Understanding AI and ML is essential for staying competitive in the digital age.


    `,
  },
  "role-of-5g": {
    title: "The Role of 5G in Modern Technology",
    description:
      "The advent of 5G technology marks a significant leap forward in mobile communication and connectivity. It is the fifth generation of wireless technology, designed to be faster, more reliable, and capable of handling the increasing demands of data-driven applications and devices. 5G is poised to revolutionize industries and everyday life by enabling faster speeds, lower latency, and connecting a vast number of devices simultaneously.",
    image: "/images/8.jpg",
    content: `
      What is 5G?

5G is the next evolution of mobile networking, following 4G (LTE). It promises to deliver faster download and upload speeds, significantly reduced latency, and increased network reliability. 5G is not just an incremental upgrade but a radical transformation, opening the door to innovations like smart cities, autonomous vehicles, and the Internet of Things (IoT).

Key Benefits of 5G

Speed:
5G offers speeds up to 100 times faster than 4G, allowing for faster downloads, real-time streaming, and quicker data transfer.

Low Latency:
With latency as low as 1 millisecond, 5G can support real-time communication and applications such as remote surgery, autonomous driving, and virtual reality.

Connectivity:
5G can support up to 1 million devices per square kilometer, paving the way for a more interconnected world.
Applications in Various Industries

Healthcare:
5G enables telemedicine, remote surgeries, and real-time patient monitoring.

Transportation:
It plays a critical role in enabling autonomous vehicles and smart transportation systems.

Smart Cities:
5G powers smart grids, energy management, and urban surveillance, making cities more efficient and sustainable.

Conclusion

The role of 5G in modern technology is vast, as it holds the potential to unlock innovations that were previously unimaginable. By enhancing connectivity, speed, and reliability, 5G will transform various sectors and improve the quality of life for millions of people around the world.
    `,
  },
  "ar-in-gaming": {
    title: "Exploring Augmented Reality (AR) in Gaming",
    description:
      "Augmented Reality (AR) has emerged as one of the most exciting technologies in the gaming industry. Unlike Virtual Reality (VR), which creates a fully immersive digital world, AR overlays digital content onto the real world. By blending real and virtual elements, AR offers gamers a unique and interactive experience, transforming how games are played and experienced.",
    image: "/images/9.jpg",
    content: `
      What is Augmented Reality (AR)?

AR is a technology that superimposes computer-generated images, sounds, or other sensory enhancements onto the real world in real-time. This means that players can interact with virtual objects as if they exist in their actual environment. Through devices like smartphones, tablets, and AR glasses, AR has become accessible to a broad audience, particularly in gaming.

Impact of AR in Gaming

AR has brought a new dimension to the gaming world. Games like Pokémon GO are prime examples of how AR can merge the real world with the virtual. Players hunt for Pokémon in their neighborhoods, interacting with the environment in ways that were previously unimaginable. This concept of “location-based” gaming creates an entirely new gaming experience where the world becomes the playing field.

Benefits of AR in Gaming

Increased Interactivity:
AR allows players to engage with their surroundings, making games more immersive and physically active.

Social Engagement:
Games like Pokémon GO promote social interaction by encouraging players to go outdoors and meet other players.

Endless Possibilities:
With AR, developers can create endless scenarios where the virtual world blends seamlessly with the real world, providing an innovative gaming experience.

Conclusion

As AR continues to evolve, it promises to further revolutionize the gaming landscape. By offering a mix of real-world interaction and digital immersion, AR in gaming is transforming how we play, socialize, and experience entertainment.
    `,
  },
};
export default function TechArticleDetails() {
  const { slug } = useParams();
  const article = slug ? techArticles[slug as string] : null;

  const [comments, setComments] = useState<
    {
      id: string;
      name: string;
      text: string;
    }[]
  >([]);
  const [newComment, setNewComment] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const savedComments = localStorage.getItem("blog-comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("blog-comments", JSON.stringify(comments));
    }
  }, [comments]);

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const newCommentObj = {
        id: Math.random().toString(36).substr(2, 9),
        name: userName.trim(),
        text: newComment.trim(),
      };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);
      setNewComment("");
      setUserName("");
    } else {
      alert("Please fill in both name and comment.");
    }
  };

  const handleDeleteComment = (id: string) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments));
  };

  const handleEditComment = (id: string, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments));
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <p className="text-lg text-gray-700">
          Blog not found. Please check the URL.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8 ">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          {article.title}
        </h1>
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md shadow-md mb-6"
        />
        <p className="text-lg text-gray-600 mb-4">{article.description}</p>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {article.content}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Comments
          </h2>

          <div className="space-y-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm text-gray-800"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
                    <div>
                      <p className="font-medium text-gray-700">
                        {comment.name}
                      </p>
                      <p className="text-gray-600 text-sm">{comment.text}</p>
                    </div>
                    <div className="flex justify-between sm:justify-end space-x-4 text-sm">
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-red-600 hover:underline transition"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          const editedText = prompt(
                            "Edit your comment:",
                            comment.text
                          );
                          if (editedText !== null) {
                            handleEditComment(comment.id, editedText);
                          }
                        }}
                        className="text-blue-600 hover:underline transition"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          <form
            onSubmit={handleCommentSubmit}
            className="mt-8 bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600"
          >
            <div className="mb-6">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your name or email"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-6">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
