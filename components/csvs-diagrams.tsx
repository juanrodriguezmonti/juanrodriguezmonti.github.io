'use client'

import React, { useState } from 'react';
import { Lock, Unlock, Eye, EyeOff, Shield, CheckCircle, FileText, Database, Globe, Search } from 'lucide-react';

const CSVSDiagrams = () => {
  const [activeTab, setActiveTab] = useState('algorithm');

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="mb-6">
        <div className="flex gap-4 border-b-2 border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('algorithm')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'algorithm'
                ? 'border-b-4 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            The CSVS Algorithm
          </button>
          <button
            onClick={() => setActiveTab('example')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'example'
                ? 'border-b-4 border-green-600 text-green-600 dark:text-green-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Real-World Example
          </button>
        </div>
      </div>

      {activeTab === 'algorithm' && <AlgorithmDiagram />}
      {activeTab === 'example' && <ExampleDiagram />}
    </div>
  );
};

const AlgorithmDiagram = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        How CSVS Works: The 4-Phase Protocol
      </h2>
      
      <div className="space-y-6">
        {/* Phase 1: SUBMIT */}
        <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300">SUBMIT (Submitter → Infrastructure)</h3>
          </div>
          
          <div className="ml-13 space-y-3">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <FileText className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Create Payload Hash</p>
                <code className="text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">H_payload = SHA3-256(Payload)</code>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <Lock className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Hybrid Encryption</p>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>• <span className="font-mono bg-gray-100 dark:bg-gray-600 px-1">ML-KEM.Encapsulate(pk_authority)</span> → shared secret</p>
                  <p>• <span className="font-mono bg-gray-100 dark:bg-gray-600 px-1">AES-256-GCM.Encrypt(Payload_padded)</span> → ciphertext</p>
                  <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">⚠️ Mandatory padding to 4KB blocks hides payload size</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <Shield className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Sign Transcript</p>
                <code className="text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">Signature = Sign(sk_submitter, H_transcript)</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Transcript = (version, fingerprints, H_payload, chain_index, size)</p>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 p-3 rounded-lg">
              <p className="font-bold text-blue-900 dark:text-blue-300 text-sm">📦 Artifact Output:</p>
              <code className="text-xs text-gray-800 dark:text-gray-200 block mt-1">A = (Ciphertext, KEM_ct, Signature, Transcript, Nonce)</code>
            </div>
          </div>
        </div>

        {/* Phase 2: PUBLISH */}
        <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 py-4 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-600 dark:bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-300">PUBLISH (Infrastructure → Public Witness)</h3>
          </div>
          
          <div className="ml-13 space-y-3">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <Globe className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Anchor to Independent Substrate</p>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>• <strong>Blockchain</strong>: Publish H_transcript to Ethereum (~$0.03/artifact, $0.00003 batched)</p>
                  <p>• <strong>CT Logs</strong>: Submit to multiple independent append-only logs</p>
                  <p>• <strong>Witness Networks</strong>: Roughtime-style cosigning</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 p-3 rounded-lg">
              <p className="font-bold text-purple-900 dark:text-purple-300 text-sm flex items-center gap-2">
                <EyeOff size={16} />
                Backend Blindness Active:
              </p>
              <p className="text-xs text-gray-800 dark:text-gray-200 mt-1">Infrastructure sees encrypted blob + metadata. Cannot read payload or distinguish between different payloads of same block size.</p>
            </div>
          </div>
        </div>

        {/* Phase 3: DISCLOSE */}
        <div className="border-l-4 border-green-600 dark:border-green-500 pl-6 py-4 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-600 dark:bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-green-900 dark:text-green-300">DISCLOSE (Authority Decrypts)</h3>
          </div>
          
          <div className="ml-13 space-y-3">
            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <Unlock className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Decapsulate & Decrypt</p>
                <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded block">ss = ML-KEM.Decapsulate(KEM_ct, sk_authority)</code>
                  <code className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded block mt-1">Payload = AES-GCM.Decrypt(Ciphertext, derived_key)</code>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-white dark:bg-gray-700 p-3 rounded-lg">
              <CheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Verify Integrity</p>
                <code className="text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">SHA3-256(Payload) == H_payload ✓</code>
              </div>
            </div>

            <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 p-3 rounded-lg">
              <p className="font-bold text-green-900 dark:text-green-300 text-sm">✅ Payload now public</p>
              <p className="text-xs text-gray-800 dark:text-gray-200 mt-1">Authority publishes: (Artifact A, Decrypted Payload P)</p>
            </div>
          </div>
        </div>

        {/* Phase 4: VERIFY */}
        <div className="border-l-4 border-orange-600 dark:border-orange-500 pl-6 py-4 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-orange-600 dark:bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
              4
            </div>
            <h3 className="text-xl font-bold text-orange-900 dark:text-orange-300">VERIFY (Anyone, Anytime)</h3>
          </div>
          
          <div className="ml-13 space-y-3">
            <div className="bg-white dark:bg-gray-700 p-3 rounded-lg">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">Third-party verification (no private keys needed):</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 dark:text-orange-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Integrity:</strong> SHA3-256(P) matches H_payload in transcript</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 dark:text-orange-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Authenticity:</strong> Signature verifies with pk_submitter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 dark:text-orange-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Pre-existence:</strong> H_transcript exists on witness substrate before event E</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 dark:text-orange-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Temporal order:</strong> Hash chain links verify sequential submission</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-orange-600 dark:text-orange-400" size={16} />
                  <span className="text-gray-700 dark:text-gray-300"><strong>Non-repudiation:</strong> Submitter cannot deny authorship</span>
                </div>
              </div>
            </div>

            <div className="bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 p-3 rounded-lg">
              <p className="font-bold text-orange-900 dark:text-orange-300 text-sm flex items-center gap-2">
                <Search size={16} />
                Key Property:
              </p>
              <p className="text-xs text-gray-800 dark:text-gray-200 mt-1">All verification uses only public artifacts. Infrastructure compromise doesn't affect verifiability.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight Box */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">🔑 The Core Insight</h3>
        <p className="text-sm leading-relaxed">
          The infrastructure is <strong>cryptographically blind</strong> during phases 1-2 (cannot decrypt), 
          becomes <strong>observable</strong> in phase 3 (authority decrypts), and remains <strong>verifiable forever</strong> in phase 4 
          (anyone can check integrity without private keys). Trust is replaced by math.
        </p>
      </div>
    </div>
  );
};

const ExampleDiagram = () => {
  const [step, setStep] = useState(0);
  
  const steps = [
    {
      title: "Day 0: Researcher Discovers Critical Vulnerability",
      actor: "Security Researcher (Alice)",
      action: "Discovers zero-day in popular framework",
      detail: "Alice finds a critical SQL injection affecting millions of users. She needs to disclose responsibly but doesn't trust bug bounty platforms.",
      color: "blue"
    },
    {
      title: "Day 0 (5min later): Alice Submits CSVS Artifact",
      actor: "Alice",
      action: "Creates and submits encrypted artifact",
      detail: "• Writes vulnerability report (10 KB)\n• Pads to 12 KB (nearest 4KB block)\n• Encrypts with CVE Authority's public key\n• Signs with her key\n• Artifact contains: encrypted report + hash + signature\n• Takes 2.1ms to generate",
      color: "blue"
    },
    {
      title: "Day 0 (10min later): Platform Publishes to Witness Substrate",
      actor: "Bug Bounty Platform (Untrusted)",
      action: "Stores artifact and anchors to public witness",
      detail: "• Platform receives encrypted blob\n• CANNOT read vulnerability details\n• CANNOT distinguish from other 12KB submissions\n• Publishes H_transcript to witness substrate (e.g., Ethereum)\n• Cost: ~$0.03\n• Block timestamp: 2026-01-15 14:32:18 UTC",
      color: "purple"
    },
    {
      title: "Day 0-89: Coordination Period",
      actor: "All Parties",
      action: "Vendor fixes bug, timeline documented",
      detail: "• Alice cannot deny report (signature binds her)\n• Platform cannot modify report (hash locked)\n• Vendor develops patch\n• Timeline: all verifiable via witness timestamps\n• Alice submits updates as new CSVS artifacts (chained)",
      color: "yellow"
    },
    {
      title: "Day 90: Public Disclosure",
      actor: "CVE Authority",
      action: "Decrypts and publishes vulnerability",
      detail: "• Authority uses private key to decrypt\n• Publishes: CVE-2026-XXXXX\n• Releases original report + all updates\n• Everyone can now verify:\n  ✓ Report matches original hash\n  ✓ Alice authored it (signature valid)\n  ✓ Existed since Jan 15 (witness proof)\n  ✓ Timeline matches (hash chain)",
      color: "green"
    },
    {
      title: "Day 90+: Independent Verification",
      actor: "Security Community",
      action: "Anyone verifies the disclosure timeline",
      detail: "Journalists, researchers, affected companies verify:\n• Original submission: Jan 15, 2026 (witness record)\n• Patch timeline: 87 days\n• No backdating (hash proves pre-existence)\n• No tampering (signature + hash verification)\n• Platform was blind entire time (encryption proof)\n\n🎯 Result: Trust replaced by cryptographic evidence",
      color: "orange"
    }
  ];

  const currentStep = steps[step];
  const colorClasses = {
    blue: "bg-blue-600 dark:bg-blue-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    yellow: "bg-yellow-600 dark:bg-yellow-500",
    green: "bg-green-600 dark:bg-green-500",
    orange: "bg-orange-600 dark:bg-orange-500"
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Real-World Example: Zero-Day Disclosure
      </h2>

      {/* Timeline */}
      <div className="mb-8">
        <div className="relative px-4">
          {/* Base connection line */}
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
          
          {/* Progress line - shows completed steps */}
          {step > 0 && (
            <div 
              className={`absolute top-6 h-0.5 z-0 transition-all duration-300 ${colorClasses[steps[Math.min(step, steps.length - 1)].color]}`}
              style={{
                left: '3rem',
                width: `calc(${(step / (steps.length - 1)) * 100}% - 3rem)`
              }}
            ></div>
          )}
          
          <div className="flex items-center justify-between relative z-10">
            {steps.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 relative">
                <button
                  onClick={() => setStep(idx)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all relative z-10 ${
                    idx === step ? colorClasses[s.color] : 'bg-gray-300 dark:bg-gray-600'
                  } ${idx <= step ? 'scale-110' : 'scale-100'} hover:scale-110 shadow-md`}
                >
                  {idx + 1}
                </button>
                <div className="text-xs text-center mt-2 text-gray-600 dark:text-gray-400 max-w-24 px-1 leading-tight">
                  {s.title.split(':')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Step Details */}
      <div className={`border-l-4 ${colorClasses[currentStep.color]} pl-6 py-6 pr-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg`}>
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{currentStep.title}</h3>
        
        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Actor:</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white">{currentStep.actor}</p>
        </div>

        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg mb-4">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Action:</p>
          <p className="text-lg text-gray-900 dark:text-white">{currentStep.action}</p>
        </div>

        <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Details:</p>
          <div className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed pb-1">
            {currentStep.detail}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-6 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="px-6 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Key Takeaways */}
      {step === steps.length - 1 && (
        <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-700 dark:to-blue-700 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">✨ What CSVS Achieved Here</h3>
          <div className="space-y-2 text-sm">
            <p>✅ <strong>Platform was cryptographically blind</strong> for 90 days (couldn't read the vuln)</p>
            <p>✅ <strong>Alice cannot deny authorship</strong> (signature proves it)</p>
            <p>✅ <strong>No one can backdate</strong> (witness timestamp immutable)</p>
            <p>✅ <strong>No tampering possible</strong> (hash verification detects any changes)</p>
            <p>✅ <strong>Timeline is provable</strong> (hash chain shows sequence)</p>
            <p>✅ <strong>Anyone can verify</strong> (no special access needed)</p>
          </div>
          <p className="mt-4 text-xs border-t border-white/30 pt-3">
            Even if the bug bounty platform was fully compromised, hacked, or malicious from day 1, 
            none of these guarantees would break. That's the power of Backend Blindness.
          </p>
        </div>
      )}
    </div>
  );
};

export default CSVSDiagrams;
