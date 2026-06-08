"use client";

import { useState } from "react";

interface ReviewResult {
  summaryVerdict: string;
  conflicts: string[];
  missingContext: string[];
  suggestedFixes: string[];
}

export default function Home() {
  const [worldLore, setWorldLore] = useState("");
  const [newSubmission, setNewSubmission] = useState("");
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleReview = () => {
    // Clear previous results and errors
    setReviewResult(null);
    setErrorMessage("");

    // Validate inputs
    if (!worldLore.trim() || !newSubmission.trim()) {
      setErrorMessage(
        "Please provide both World Lore and New Submission text to perform a continuity review."
      );
      return;
    }

    // Generate mock review result
    const mockResult: ReviewResult = {
      summaryVerdict: "⚠️ MODERATE CONTINUITY RISK - Several potential conflicts detected that should be addressed before publication.",
      conflicts: [
        "Character age inconsistency: The new submission mentions the protagonist being 25 years old, but established lore states they were born in 1995, making them 31 in the current timeline (2026).",
        "Location contradiction: The new content places the 'Crystal Tower' in the northern district, but previous canon established it in the eastern quarter of the city.",
        "Power system mismatch: The submission describes magic requiring verbal incantations, contradicting the established silent casting system in your world lore.",
      ],
      missingContext: [
        "The new character 'Elena Darkwood' is introduced without explanation of her relationship to the established Darkwood family lineage.",
        "Reference to 'The Great Schism' event without clarifying when it occurred relative to other established timeline events.",
        "Mention of 'shadow crystals' as a power source, but no prior lore explains their origin or properties.",
      ],
      suggestedFixes: [
        "Update the protagonist's age to 31, or adjust the birth year in the world lore to maintain consistency.",
        "Either relocate the Crystal Tower to the eastern quarter in the new submission, or update the world lore to reflect the northern district location.",
        "Revise magic casting in the new submission to use silent casting, or add a narrative explanation for why this character uses verbal incantations (e.g., they're using an older, forbidden technique).",
        "Add a brief introduction explaining Elena's connection to the Darkwood family, or reference her branch of the family tree.",
        "Include a timeline note placing The Great Schism relative to other major events, or remove the reference if it's not essential.",
      ],
    };

    setReviewResult(mockResult);
  };

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
                onClick={handleReview}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors shadow-md hover:shadow-lg"
              >
                Review for Continuity
              </button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-yellow-800 dark:text-yellow-200">
                  {errorMessage}
                </p>
              </div>
            )}

            {/* Review Results Card */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Review Results
                </h3>
                {reviewResult && (
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full font-medium">
                    DEMO/PROTOTYPE
                  </span>
                )}
              </div>

              {!reviewResult && !errorMessage && (
                <p className="text-gray-600 dark:text-gray-400 italic">
                  Your continuity review will appear here after analysis.
                </p>
              )}

              {reviewResult && (
                <div className="space-y-6">
                  {/* Summary Verdict */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Summary Verdict
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                      {reviewResult.summaryVerdict}
                    </p>
                  </div>

                  {/* Potential Continuity Conflicts */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Potential Continuity Conflicts
                    </h4>
                    <ul className="space-y-2">
                      {reviewResult.conflicts.map((conflict, index) => (
                        <li 
                          key={index}
                          className="text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800"
                        >
                          <span className="font-medium text-red-700 dark:text-red-400">⚠️</span> {conflict}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Missing Context */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Missing Context
                    </h4>
                    <ul className="space-y-2">
                      {reviewResult.missingContext.map((context, index) => (
                        <li 
                          key={index}
                          className="text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800"
                        >
                          <span className="font-medium text-yellow-700 dark:text-yellow-400">ℹ️</span> {context}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Fixes */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Suggested Fixes
                    </h4>
                    <ul className="space-y-2">
                      {reviewResult.suggestedFixes.map((fix, index) => (
                        <li 
                          key={index}
                          className="text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800"
                        >
                          <span className="font-medium text-green-700 dark:text-green-400">✓</span> {fix}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Prototype Notice */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-6">
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      <strong>Note:</strong> This is a prototype demonstration with mock data. 
                      The actual AI-powered review will analyze your specific content and provide 
                      personalized continuity feedback.
                    </p>
                  </div>
                </div>
              )}
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
