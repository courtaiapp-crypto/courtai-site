import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Cookie, Shield, Eye, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Cookie className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-gray-400 mt-2">Last Updated: October 2025</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Privacy Standard 13 Compliance</h2>
            <p className="text-gray-300 leading-relaxed">
              Court AI is fully compliant with Privacy Standard 13 and international privacy regulations including GDPR. 
              This Cookie Policy explains how we use cookies and similar technologies, your rights regarding these technologies, 
              and how you can control their use.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">1. What Are Cookies?</h2>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Remembering your preferences and settings</li>
                <li>Understanding how you use our website</li>
                <li>Improving our services and user experience</li>
                <li>Ensuring the security and proper functioning of our website</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">2. Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Necessary Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are essential for the website to function properly. They cannot be disabled as they are necessary for:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Website security and fraud prevention</li>
                    <li>Basic website functionality</li>
                    <li>Cookie consent management</li>
                    <li>Load balancing and performance</li>
                  </ul>
                  <p className="text-green-400 font-semibold mt-2">Status: Always Active</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Analytics Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting anonymous information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Page views and user navigation patterns</li>
                    <li>Time spent on different pages</li>
                    <li>Device and browser information</li>
                    <li>Geographic location (country level only)</li>
                  </ul>
                  <p className="text-blue-400 font-semibold mt-2">Status: Optional - Requires Consent</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies remember your choices and provide enhanced features:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Language and region preferences</li>
                    <li>Customized content and recommendations</li>
                    <li>User interface preferences</li>
                    <li>Accessibility settings</li>
                  </ul>
                  <p className="text-blue-400 font-semibold mt-2">Status: Optional - Requires Consent</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Marketing Cookies</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    These cookies are used to deliver relevant advertisements and track advertising effectiveness:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Personalized advertising content</li>
                    <li>Tracking advertising campaign performance</li>
                    <li>Cross-site tracking for relevant ads</li>
                    <li>Social media integration</li>
                  </ul>
                  <p className="text-blue-400 font-semibold mt-2">Status: Optional - Requires Consent</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">3. Your Rights Under Privacy Standard 13</h2>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                In compliance with Privacy Standard 13, you have the following rights regarding cookies and your personal data:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Consent</h3>
                  <p className="text-gray-300 text-sm">You can choose which cookies to accept or reject</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Withdraw</h3>
                  <p className="text-gray-300 text-sm">You can withdraw your consent at any time</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Information</h3>
                  <p className="text-gray-300 text-sm">Clear information about what data we collect</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">Right to Control</h3>
                  <p className="text-gray-300 text-sm">Manage your cookie preferences anytime</p>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">4. Managing Your Cookie Preferences</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                You have several options to manage cookies:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Through Our Cookie Banner</h3>
                  <p className="text-gray-300">Use our cookie preference center that appears when you first visit our website</p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Browser Settings</h3>
                  <p className="text-gray-300 mb-2">Configure your browser to block or delete cookies:</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                    <li>Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>Firefox: Preferences → Privacy & Security</li>
                    <li>Safari: Preferences → Privacy</li>
                    <li>Edge: Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">Opt-Out Links</h3>
                  <p className="text-gray-300 mb-2">Third-party opt-out options:</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                    <li>Google Analytics: <span className="text-blue-400">tools.google.com/dlpage/gaoptout</span></li>
                    <li>Facebook: <span className="text-blue-400">facebook.com/settings/?tab=ads</span></li>
                    <li>Industry opt-out: <span className="text-blue-400">aboutads.info/choices</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We may use third-party services that set their own cookies. These services include:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-yellow-400 mb-2">Analytics Services</h3>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Google Analytics</li>
                    <li>Hotjar</li>
                    <li>Mixpanel</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-400 mb-2">Marketing Services</h3>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    <li>Facebook Pixel</li>
                    <li>Google Ads</li>
                    <li>LinkedIn Insight</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Security & Privacy Standard 13</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement robust security measures to protect your cookie data:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure cookie attributes (HttpOnly, Secure, SameSite)</li>
                <li>Regular security audits and updates</li>
                <li>Limited data retention periods</li>
                <li>Access controls and monitoring</li>
                <li>Compliance with Privacy Standard 13 requirements</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. When we make significant changes, we will:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Update the "Last Updated" date at the top of this policy</li>
                <li>Notify you through our website or email</li>
                <li>Request new consent if required by law</li>
                <li>Provide clear information about the changes</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> courtaiapp@gmail.com</p>
                <p><strong>Data Protection Officer:</strong> courtaiapp@gmail.com</p>
                <p><strong>Subject Line:</strong> "Cookie Policy Inquiry - Privacy Standard 13"</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-3 rounded-full font-semibold">
                Return to Court AI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}