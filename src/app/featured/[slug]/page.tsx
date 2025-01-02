"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface BlogContent {
  title: string;
  description: string;
  image: string;
  content: string;
}

const blogData: { [key: string]: BlogContent } = {
  "ai-tools": {
    title: "Top 5 AI Tools You Should Know About",
    description:
      "Artificial Intelligence (AI) is no longer just a buzzword—it’s a necessity in today’s fast-paced digital world. From automating mundane tasks to enhancing creativity, AI tools are transforming how we work and innovate. In this blog, we’ll explore five of the most influential AI tools you should know about.",
    image: "/images/4.jpg",
    content: `
      1. ChatGPT: The Game-Changer in Conversational AI

ChatGPT, developed by OpenAI, is one of the most advanced conversational AI tools available today. It helps businesses improve customer interactions, assist students with academic queries, and even draft creative writing pieces for content creators.

Use Cases:

1. Customer support automation
2. Writing assistance for blogs and social media
3. Generating code snippets for developers

With its ability to generate human-like text, ChatGPT is an essential tool for professionals across industries.

2. DALL·E: Turning Imagination into Reality

DALL·E, another innovation from OpenAI, specializes in image generation from text prompts. It’s a favorite among artists, designers, and marketers looking to create visually compelling content without traditional design tools.

Features:

1. Create unique illustrations and graphics
2. Generate mockups for advertising campaigns
3. Visualize complex concepts in seconds

DALL·E empowers individuals with no prior design experience to bring their ideas to life.

3. TensorFlow: The Backbone of Machine Learning

TensorFlow, an open-source machine learning platform by Google, is widely used for building AI models. From natural language processing to deep learning, TensorFlow provides the tools needed to implement sophisticated algorithms.

Why TensorFlow?

1. High scalability for complex projects
2. Pre-built models for faster implementation
3. Support for multiple programming languages

Companies use TensorFlow to predict trends, optimize processes, and innovate in fields like healthcare and finance.

4. Jasper AI: Elevating Content Marketing

Jasper AI is an AI-powered writing assistant that simplifies content creation. Whether it’s generating ad copies, blog posts, or email campaigns, Jasper ensures content is both engaging and SEO-friendly.

Conclusion

AI tools are shaping the future of work and creativity, allowing us to achieve more with less effort. Whether you’re a developer, designer, marketer, or entrepreneur, integrating AI into your workflow can significantly enhance your productivity and innovation. Start exploring these tools today and stay ahead in the ever-evolving digital landscape.
    `,
  },
  "quantum-computing": {
    title: "The Rise of Quantum Computing",
    description:
      "Quantum computing is one of the most exciting and rapidly developing fields in modern science and technology. Unlike classical computers that use bits to process information as 0s or 1s, quantum computers use quantum bits, or qubits, which can exist in multiple states at once. This fundamental difference has the potential to revolutionize industries such as cryptography, pharmaceuticals, and artificial intelligence. In this article, we will delve into the rise of quantum computing, its potential applications, and the impact it may have on various fields.",
    image: "/images/5.jpg",
    content: `
      What is Quantum Computing?

At its core, quantum computing leverages the principles of quantum mechanics to perform calculations. Classical computers rely on bits that are either in a state of 0 or 1. Quantum computers, however, use qubits, which can exist in multiple states simultaneously due to superposition, a phenomenon in quantum mechanics.

Additionally, quantum computers take advantage of entanglement, where the state of one qubit is directly related to the state of another, regardless of the distance between them. These properties enable quantum computers to solve certain complex problems much faster than classical computers.

How Quantum Computing Works

Quantum computing’s power lies in its ability to perform parallel computations. A quantum computer can process vast amounts of data at the same time due to the quantum properties of superposition and entanglement. This gives quantum computers a significant edge in solving problems that are too complicated for classical computers to handle in a reasonable amount of time.

For example, while a classical computer might take years to crack certain encryption algorithms, a quantum computer could solve these problems in seconds, revolutionizing the field of cybersecurity. The power of quantum computing is rooted in the complexity and interconnectedness of qubits, which is far beyond what classical systems can achieve.

Applications of Quantum Computing

1. Cryptography and Cybersecurity

One of the most anticipated applications of quantum computing is in the field of cryptography. Classical encryption methods, such as RSA encryption, rely on the difficulty of factoring large numbers. Quantum computers, however, could break these encryption systems quickly using algorithms like Shor’s algorithm, which is designed to factorize numbers exponentially faster than classical algorithms.

This poses both a threat and an opportunity. On one hand, it challenges the security of current encryption methods, but on the other hand, quantum-safe encryption methods are being developed to ensure data security in the quantum era.

2. Drug Discovery and Healthcare

Quantum computing has the potential to revolutionize drug discovery and personalized medicine. Classical computers struggle with simulating molecular structures and interactions, especially for large and complex molecules. Quantum computers, however, could model molecular behavior accurately and efficiently, leading to faster discovery of new drugs and treatments.

By simulating the interactions of atoms and molecules at a quantum level, researchers can better understand diseases and develop more effective treatments tailored to individual patients. This could ultimately lead to breakthroughs in areas such as cancer treatment, genetic disorders, and neurological diseases.

3. Machine Learning and Artificial Intelligence

Quantum computing could accelerate advancements in artificial intelligence and machine learning. Classical computers have limitations when it comes to processing vast datasets and performing complex calculations. Quantum computers, however, could perform these tasks much faster, enabling faster training of machine learning models and optimization algorithms.

By harnessing the power of quantum computing, AI could become more sophisticated and capable of solving more complex problems, such as those found in natural language processing and image recognition.

4. Supply Chain and Logistics Optimization

Quantum computing also has the potential to revolutionize industries such as logistics and supply chain management. The problem of optimizing delivery routes, inventory management, and scheduling is a complex one, especially as the number of variables increases. Quantum computers can process these variables simultaneously, providing faster and more accurate solutions.

For example, quantum computing could be used to optimize global supply chains, ensuring products are delivered more efficiently and reducing waste. The technology could also be used to model and predict economic patterns, helping businesses make better strategic decisions.

Challenges Facing Quantum Computing

Despite its potential, quantum computing is still in its infancy. There are several challenges that must be addressed before it can be widely adopted.

1. Hardware Limitations

Building a stable quantum computer is a major challenge. Qubits are highly sensitive to their environment, and even small disturbances can cause errors in calculations. Current quantum computers require extreme conditions, such as ultra-low temperatures, to maintain the stability of qubits.

Efforts are being made to develop more stable and scalable quantum computers, but there is still much work to be done.

2. Quantum Software and Algorithms

Another significant hurdle is the development of quantum algorithms. While there are a few algorithms that have shown promise, the field is still in its early stages. Many quantum applications still require new algorithms that can harness the full power of quantum computing.

3. Quantum Error Correction

Error correction is another major challenge in quantum computing. Because quantum states are fragile, errors can occur easily, disrupting calculations. Quantum error correction methods are being developed to mitigate these issues, but they add complexity and require additional computational resources.


Conclusion

Quantum computing is a groundbreaking technology with the potential to transform industries and solve some of the most complex problems facing humanity. Although there are significant challenges ahead, the rapid progress in the field of quantum research promises exciting opportunities. As we move closer to realizing the full potential of quantum computing, the world is on the verge of a technological revolution that will reshape the future of computation.
    `,
  },
  blockchain: {
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Blockchain technology is often associated with cryptocurrency, particularly Bitcoin, but its potential goes far beyond just digital currencies. Blockchain is a decentralized and distributed ledger that records transactions across multiple computers in a way that ensures security, transparency, and immutability. While cryptocurrencies like Bitcoin have drawn significant attention to the technology, blockchain is rapidly evolving and finding applications in various industries far beyond finance. In this article, we will explore the potential of blockchain outside of cryptocurrency, including its uses in supply chain management, healthcare, voting systems, and more.",
    image: "/images/6.jpg",
    content: `
      What is Blockchain?

At its core, blockchain is a type of database or ledger that stores data in blocks. Each block contains a set of transactions and is linked to the previous one, forming a chain. This structure makes it extremely difficult to alter any information without disrupting the entire chain. The decentralized nature of blockchain means that no single entity has control over the network, which enhances transparency and trust among participants.

In a typical blockchain system, data is validated by a network of nodes (computers) rather than a central authority, which is how traditional databases work. This decentralized approach reduces the risk of fraud and ensures that the information stored on the blockchain is tamper-proof.

Blockchain Applications Beyond Cryptocurrency

1. Supply Chain Management

One of the most promising uses of blockchain technology is in supply chain management. The ability to track products from their origin to the final consumer is critical in industries such as food production, manufacturing, and pharmaceuticals. Blockchain can provide an immutable record of every step a product takes through the supply chain, increasing transparency and accountability.

For example, in the food industry, blockchain can be used to trace the journey of food items from farm to table. This helps ensure food safety, as consumers can track the origins of products and verify that they meet quality standards. In the event of a contamination or recall, blockchain can provide an accurate and transparent audit trail, enabling companies to respond quickly and effectively.

2. Healthcare and Medical Records

Blockchain has the potential to revolutionize the healthcare industry by providing a secure and transparent way to store and share medical records. Currently, patient data is often stored in disparate systems, making it difficult for healthcare providers to access complete and accurate medical histories. With blockchain, patient records could be stored in a decentralized manner, giving patients control over their own data while enabling healthcare providers to access up-to-date information when needed.

Additionally, blockchain can be used to track the supply chain of pharmaceuticals, ensuring that drugs are not counterfeit and that they meet regulatory standards. By providing a transparent record of each step in the supply chain, blockchain can help reduce the risk of counterfeit drugs entering the market and protect public health.

3. Voting Systems

Election fraud and the security of voting systems have been hot topics of discussion in recent years. Blockchain offers a potential solution to these challenges by providing a secure and transparent voting system. Using blockchain, votes can be recorded as transactions, ensuring that each vote is valid and cannot be tampered with.

Because blockchain transactions are immutable, they create an accurate and auditable record of all votes cast. This can help increase trust in election results and reduce the likelihood of election fraud. Additionally, blockchain-based voting systems could make it easier for people to vote remotely, improving accessibility and increasing voter turnout.

4. Intellectual Property Protection

In industries such as entertainment, publishing, and technology, protecting intellectual property (IP) is a critical concern. Blockchain can be used to create a digital record of ownership for IP, ensuring that creators have proof of ownership and can easily enforce their rights. By recording each transaction related to an IP asset, blockchain can provide a transparent and immutable record of ownership, licensing, and royalties.

For example, musicians can use blockchain to track the distribution of their music and ensure that they are compensated fairly for their work. Similarly, authors and artists can use blockchain to prove ownership of their works and protect against unauthorized use or reproduction.

5. Real Estate and Property Transactions

The real estate industry is often criticized for its inefficiencies, high costs, and lack of transparency. Blockchain can help streamline property transactions by creating a secure and transparent ledger of ownership and transactions. By recording all property-related data on a blockchain, buyers, sellers, and real estate agents can verify ownership, reduce fraud, and eliminate the need for intermediaries such as title companies or banks.

Blockchain can also be used to facilitate the buying and selling of real estate by automating processes such as contract execution and payment through smart contracts. These self-executing contracts can help reduce paperwork, minimize delays, and lower transaction costs.

6. Digital Identity and Authentication

Digital identity management is becoming increasingly important as more services move online. Traditional identity verification methods, such as passwords or government-issued IDs, are vulnerable to hacking and fraud. Blockchain offers a more secure alternative by allowing individuals to control their own digital identities through a decentralized system.

With blockchain, individuals can store their personal information in a secure and private manner, sharing only the necessary details when required. For example, blockchain-based identity systems could be used for online banking, access to government services, or proving age for purchasing restricted goods. The decentralized nature of blockchain ensures that individuals’ personal information is secure and cannot be tampered with.

Challenges and Limitations of Blockchain Beyond Cryptocurrency

1. Scalability

One of the biggest challenges facing blockchain adoption outside of cryptocurrency is scalability. Blockchain networks, especially those using proof-of-work consensus mechanisms, can be slow and inefficient when handling large volumes of transactions. As the number of participants on a blockchain network increases, so does the computational power required to process transactions, leading to potential delays and higher costs.

Efforts are being made to develop more scalable blockchain solutions, such as using proof-of-stake or other consensus mechanisms that require less energy and can process transactions more quickly.

2. Regulatory and Legal Challenges

The widespread adoption of blockchain technology in industries outside of cryptocurrency is hindered by regulatory and legal challenges. Governments and regulators are still figuring out how to handle blockchain-based systems, particularly when it comes to data privacy, security, and compliance with existing laws.

For example, in the healthcare industry, blockchain may conflict with regulations such as the Health Insurance Portability and Accountability Act (HIPAA) in the U.S., which governs the use and sharing of medical data. Similarly, the use of blockchain for voting systems may require changes to existing election laws and procedures.

3. Interoperability

Blockchain networks are often isolated from one another, which means they cannot easily share data or communicate with other systems. For blockchain to be widely adopted in industries such as supply chain management or healthcare, it will need to be able to integrate with existing systems and networks. Efforts are underway to create standards and protocols that will enable interoperability between different blockchain platforms.


Conclusion

Blockchain is much more than just the backbone of cryptocurrencies like Bitcoin. Its potential to revolutionize industries such as supply chain management, healthcare, voting systems, intellectual property, and real estate is enormous. While challenges such as scalability, regulatory hurdles, and interoperability remain, the growing interest in blockchain solutions outside of cryptocurrency shows that this technology is here to stay. As blockchain continues to evolve, we can expect to see a wide range of applications that will change the way we live, work, and interact with the digital world.


    `,
  },
};

const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const blog = slug ? blogData[slug as string] : null;

  // State for comments and form inputs
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

  // Handle form submission
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && userName.trim()) {
      const newCommentObj = {
        id: Math.random().toString(36).substr(2, 9), // Unique ID for each comment
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
    setComments(updatedComments); // Update state
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments)); // Update localStorage
  };

  const handleEditComment = (id: string, newText: string) => {
    const updatedComments = comments.map((comment) =>
      comment.id === id ? { ...comment, text: newText } : comment
    );
    setComments(updatedComments);
    localStorage.setItem("blog-comments", JSON.stringify(updatedComments)); // Update localStorage
  };

  if (!blog) {
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
          {blog.title}
        </h1>
        <Image
          src={blog.image}
          alt={blog.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-md shadow-md mb-6"
        />
        <p className="text-lg text-gray-600 mb-4">{blog.description}</p>
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {blog.content}
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
};

export default BlogPage;
