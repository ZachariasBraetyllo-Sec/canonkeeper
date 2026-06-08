"use client";

import { useState } from "react";

export default function Home() {
  const [worldLore, setWorldLore] = useState("");
  const [newSubmission, setNewSubmission] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            CanonKeeper
          </h1>
          <p className="text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
            Keep the story straight.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            An AI-powered continuity review assistant for writers, roleplay communities, 
            and collaborative storytellers.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            How It Works
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              CanonKeeper helps you maintain consistency in your creative projects by 
              analyzing your existing lore and new content for potential issues.
            </p>
            <p className="text-lg leading-relaxed">
              Simply paste your established world-building, character backgrounds, and 
              plot details alongside new content you're developing. Our AI will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Identify contradictions with existing canon</li>
              <li>Highlight missing context or unexplained elements</li>
              <li>Flag continuity risks before they become problems</li>
              <li>Suggest areas that need clarification or expansion</li>
            </ul>
            <p className="text-lg leading-relaxed mt-6">
              Perfect for writers working on series, roleplay communities managing 
              shared universes, or any collaborative storytelling project where 
              consistency matters.
            </p>
          </div>
        </div>

        {/* Prototype Review Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Try the continuity review prototype
          </h2>
          
          <div className="space-y-6">
            {/* World Lore Textarea */}
            <div>
              <label 
                htmlFor="world-lore" 
                className="block text-lg font-medium text-gray-900 dark:text-white mb-2"
              >
                World Lore
              </label>
              <textarea
                id="world-lore"
                value={worldLore}
                onChange={(e) => setWorldLore(e.target.value)}
                className="w-full h-40 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Paste your established world lore, character backgrounds, and canon details here..."
              />
            </div>

            {/* New Submission Textarea */}
            <div>
              <label 
                htmlFor="new-submission" 
                className="block text-lg font-medium text-gray-900 dark:text-white mb-2"
              >
                New Submission
              </label>
              <textarea
                id="new-submission"
                value={newSubmission}
                onChange={(e) => setNewSubmission(e.target.value)}
                className="w-full h-40 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Paste the new content you want to check for continuity issues..."
              />
            </div>

            {/* Review Button */}
            <div className="flex justify-center">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Review for Continuity
              </button>
            </div>

            {/* Review Results Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Review Results
              </h3>
              <p className="text-gray-600 dark:text-gray-400 italic">
                Your continuity review will appear here after analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg">
            Get Started
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Built for the IBM July Challenge: Reimagine Creative Industries with AI
          </p>
        </div>
      </main>
    </div>
  );
}

// Made with Bob
