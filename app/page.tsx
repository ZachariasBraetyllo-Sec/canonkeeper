"use client";

import { useState } from "react";

interface ReviewResult {
  summaryVerdict: string;
  conflicts: string[];
  missingContext: string[];
  suggestedFixes: string[];
  creatorNote: string;
}

// Sample data constants for demo purposes
const SAMPLE_WORLD_LORE = `# Nocturne City - World Lore

## The Three Species

### Vampires
- Created through blood exchange ritual requiring three nights
- Weaknesses: Sunlight causes instant combustion; cannot cross running water
- Must consume human blood weekly; animal blood causes severe illness
- Cannot enter private residences without invitation
- Powers: Enhanced strength, speed, hypnotic gaze (only works on humans)

### Witches
- Born with innate magical ability; powers manifest at age 13
- Magic System: Draw power from ley lines; spells require verbal incantations
- Lifespan: Natural human lifespan (magic cannot extend it)
- Each witch has ONE primary discipline (elemental, divination, or binding)
- Using magic on another supernatural being without consent is a capital offense

### Werewolves
- Hereditary condition passed through bloodlines
- Transformation: Forced shift during full moon; voluntary shifts possible other times
- Weaknesses: Silver causes burns and prevents healing
- Age at half the rate of humans
- Biting a human to create new werewolves has been forbidden since 1923

## The Covenant of Shadows (established 1847)
1. The Masquerade: Supernatural existence must remain hidden from humans
2. The Truce: No species may wage war against another
3. Disputes are settled by a Tribunal (one representative per species)

## Current Timeline: 2026`;

const SAMPLE_SUBMISSION = `# Character Submission: Lyra Nightshade

## Basic Information
- Name: Lyra Nightshade
- Species: Vampire-Witch Hybrid
- Age: 157 years old (turned at age 25 in 1894)

## Abilities
- Vampire Powers: Enhanced strength, speed, flight, and telepathy
- Witch Magic: Specializes in ALL THREE disciplines (elemental, divination, and binding)
- Unique Trait: Can walk in sunlight for up to 2 hours with only minor discomfort
- Feeding: Feeds on magical energy from ley lines instead of blood

## Current Situation
Lyra recently arrived in Nocturne City and has taken residence in an abandoned church.
She's been offering magical services to humans, helping them with supernatural problems.
She's also been recruiting young witches (ages 10-12) to teach them magic before their
powers manifest at age 13.

## Goals
- Establish a new coven that accepts both witches and vampires
- Create a new supernatural species by developing a ritual that can turn humans into
  hybrid beings like herself
- Reveal supernatural beings to humanity and work together openly

## Relationships
- Works closely with a pack of six lone werewolves`;

export default function Home() {
  const [worldLore, setWorldLore] = useState("");
  const [newSubmission, setNewSubmission] = useState("");
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Demo helper functions
  const loadSampleLore = () => {
    setWorldLore(SAMPLE_WORLD_LORE);
    setErrorMessage("");
  };

  const loadSampleSubmission = () => {
    setNewSubmission(SAMPLE_SUBMISSION);
    setErrorMessage("");
  };

  const clearFields = () => {
    setWorldLore("");
    setNewSubmission("");
    setReviewResult(null);
    setErrorMessage("");
  };

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

    // Generate mock review result tailored to the supernatural lore sample
    const mockResult: ReviewResult = {
      summaryVerdict: "🚨 HIGH CONTINUITY RISK - Multiple critical conflicts with established canon detected. This submission requires significant revision before approval.",
      conflicts: [
        "VAMPIRE-WITCH HYBRID IMPOSSIBILITY: The character is described as a 'Vampire-Witch Hybrid' who retained magical abilities after vampiric transformation. However, established lore states witches are 'born with innate magical ability' and have a 'natural human lifespan.' The vampiric transformation process (blood exchange over three nights) would fundamentally alter the witch's biology, likely severing their connection to ley lines and magical ability.",
        "SUNLIGHT RESISTANCE VIOLATION: Lyra can 'walk in sunlight for up to 2 hours with only minor discomfort,' directly contradicting the established vampire weakness: 'Sunlight causes instant combustion.' This is a core species limitation with no exceptions mentioned in canon.",
        "CONSECRATED GROUND CONFLICT: Lyra has 'taken residence in an abandoned church.' While the lore doesn't explicitly address churches, vampires 'cannot enter private residences without invitation' and have historical associations with being repelled by holy ground. An abandoned church would likely still be consecrated territory.",
        "MULTI-DISCIPLINE MAGIC VIOLATION: Lyra 'specializes in all three disciplines (elemental, divination, and binding magic),' but established lore clearly states 'Each witch has ONE primary discipline.' This is a fundamental limitation of the magic system.",
        "ALTERNATIVE FEEDING CONTRADICTION: Lyra 'feeds on magical energy from ley lines instead of blood,' but vampire lore explicitly states they 'must consume human blood weekly; animal blood causes severe illness.' No alternative feeding methods are mentioned as possible.",
        "MASQUERADE BREACH: Lyra is 'offering her services as a magical consultant to humans, helping them with supernatural problems.' This directly violates the Covenant's first law: 'The Masquerade: Supernatural existence must remain hidden from humans.'",
        "UNAUTHORIZED COVEN FORMATION: Lyra wants to 'establish a new coven that accepts both witches and vampires.' However, witch lore states covens 'must belong to a registered coven' and there's no mention of cross-species covens being permitted under the Covenant.",
        "FORBIDDEN TRANSFORMATION RESEARCH: Lyra aims to 'create a new supernatural species by developing a ritual that can turn humans into hybrid beings.' This parallels the werewolf restriction where 'biting a human to create new werewolves has been forbidden since 1923,' suggesting species creation is likely prohibited.",
      ],
      missingContext: [
        "How did Lyra's vampiric transformation NOT destroy her connection to ley lines and magical ability? This requires explanation as it contradicts the biological nature of witch magic.",
        "What is the source of Lyra's sunlight resistance? Is it related to her hybrid nature, a unique artifact, or a previously unknown vampire bloodline trait?",
        "How has Lyra avoided detection by the Wardens while openly breaking the Masquerade by offering magical services to humans?",
        "What is the Tribunal's stance on hybrid beings? Are they legal under the Covenant, or is Lyra's very existence a violation?",
        "How did Lyra acquire the ability to fly and use telepathy? Standard vampire powers listed are 'enhanced strength, speed, hypnotic gaze' - flight and telepathy are not mentioned.",
        "Why are six werewolves operating as 'lone wolves' when the lore states 'lone wolves are considered unstable' and packs normally have 8-20 members?",
        "How is Lyra recruiting children (ages 10-12) without their parents' knowledge or the Circle of Thorns' awareness? This seems like it would attract immediate attention.",
      ],
      suggestedFixes: [
        "HYBRID EXPLANATION: Add detailed lore explaining how vampire-witch hybrids are possible. Perhaps Lyra's transformation was interrupted or modified by a powerful ritual, creating an unprecedented case that the Tribunal is monitoring.",
        "SUNLIGHT LIMITATION: Either remove the sunlight resistance entirely, or explain it as a temporary effect from a rare artifact/spell that requires constant renewal and has significant costs.",
        "CHURCH RESIDENCE: Relocate Lyra to a secular abandoned building (warehouse, apartment, etc.) or explain that the church was deconsecrated, making it safe for vampires.",
        "MAGIC SPECIALIZATION: Reduce Lyra's abilities to ONE primary discipline as per canon rules. Her hybrid nature could make her exceptionally powerful in that one discipline instead.",
        "FEEDING REQUIREMENT: Have Lyra still require blood but perhaps need less frequently due to supplementing with ley line energy, or explain that she's slowly dying from refusing to feed properly.",
        "MASQUERADE COMPLIANCE: Change Lyra's activities to work within supernatural-only circles, or have her operating in secret with the constant threat of Warden discovery as a plot tension point.",
        "TRIBUNAL APPROVAL: Add that Lyra is seeking official Tribunal approval for her coven concept, or that she's operating illegally and this is a source of conflict.",
        "WEREWOLF PACK CONTEXT: Explain why these six werewolves are lone wolves (exiled? survivors of a destroyed pack?) and address the 'unstable' concern mentioned in lore.",
      ],
      creatorNote: "Remember: These are suggestions, not mandates. You're the creator and have final say over your world. If you want Lyra to break established rules, that can be a compelling story element - but it works best when the rule-breaking is intentional, acknowledged in-narrative, and has consequences. Consider whether each conflict serves your story or is an accidental oversight. CanonKeeper is here to help you make informed creative decisions, not to restrict your imagination.",
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
            {/* Demo Helper Buttons */}
            <div className="flex flex-wrap gap-3 justify-center bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <button
                onClick={loadSampleLore}
                className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-blue-700 dark:text-blue-300 font-medium px-4 py-2 rounded-lg text-sm border border-blue-300 dark:border-blue-700 transition-colors shadow-sm"
              >
                📚 Load Sample Lore
              </button>
              <button
                onClick={loadSampleSubmission}
                className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-blue-700 dark:text-blue-300 font-medium px-4 py-2 rounded-lg text-sm border border-blue-300 dark:border-blue-700 transition-colors shadow-sm"
              >
                📝 Load Sample Submission
              </button>
              <button
                onClick={clearFields}
                className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium px-4 py-2 rounded-lg text-sm border border-gray-300 dark:border-gray-600 transition-colors shadow-sm"
              >
                🗑️ Clear Fields
              </button>
            </div>

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

                  {/* Creator Control Note */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Creator Control Note
                    </h4>
                    <div className="text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                      <span className="font-medium text-blue-700 dark:text-blue-400">💡</span> {reviewResult.creatorNote}
                    </div>
                  </div>

                  {/* Prototype Notice */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-6">
                    <p className="text-sm text-purple-800 dark:text-purple-300">
                      <strong>Prototype Demo:</strong> This is a demonstration with mock analysis tailored to the sample supernatural lore.
                      The actual AI-powered review will analyze your specific content and provide
                      personalized continuity feedback based on your unique world-building.
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
