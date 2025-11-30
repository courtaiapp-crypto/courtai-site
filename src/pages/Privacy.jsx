
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Lock, Trash2 } from "lucide-react"; // Added Trash2 import
import { Button } from "@/components/ui/button";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Lock className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                PRIVACY POLICY
              </h1>
              <p className="text-gray-400 mt-2">Last updated October 01, 2025</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <p className="text-gray-300 leading-relaxed mb-4">
              This Privacy Notice for Noam Tzur (doing business as Court AI) ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Download and use our mobile application (Court AI), or any other application of ours that links to this Privacy Notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <span className="text-yellow-400">courtaiapp@gmail.com</span>.
            </p>
          </div>

          {/* Summary of Key Points */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">SUMMARY OF KEY POINTS</h2>
            <div className="space-y-4 text-gray-300">
              <p><strong className="text-white">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>
              
              <p><strong className="text-white">Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law.</p>
              
              <p><strong className="text-white">Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>
              
              <p><strong className="text-white">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
              
              <p><strong className="text-white">In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties.</p>
              
              <p><strong className="text-white">How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>
              
              <p><strong className="text-white">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
              
              <p><strong className="text-white">How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <span className="text-yellow-400">https://courtai.info/</span>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">TABLE OF CONTENTS</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
              <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
              <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
              <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              <li>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</li>
              <li>CHILDREN'S PRIVACY</li> 
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>
          </section>

          {/* Section 1 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">1. WHAT INFORMATION DO WE COLLECT?</h2>
            
            <h3 className="text-2xl font-bold text-white mb-4">Personal information you disclose to us</h3>
            <p className="text-gray-300 mb-4"><em>In Short: We collect personal information that you provide to us.</em></p>
            
            <p className="text-gray-300 mb-4">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>usernames</li>
              <li>passwords</li>
              <li>email addresses</li>
              <li>contact or authentication data</li>
            </ul>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Sensitive Information.</strong> When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>health data</li>
            </ul>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by Apple and Google. You may find their privacy notice link(s) here: <a href="https://www.apple.com/legal/privacy/" className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">Apple Privacy</a> and <a href="https://policies.google.com/privacy" className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">Google Privacy</a>.</p>
            
            <p className="text-gray-300 mb-4">All in-app purchases are processed securely through Apple App Store and Google Play. We do not store or process any credit card or payment information directly.</p>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider.</p>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Application Data.</strong> If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li><strong>Mobile Device Data:</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address.</li>
              <li><strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information automatically collected</h3>
            <p className="text-gray-300 mb-4"><em>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</em></p>
            
            <p className="text-gray-300 mb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.</p>
            
            <div className="bg-gray-800 p-6 rounded-lg mt-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Google API</h4>
              <p className="text-gray-300">Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p className="text-gray-300 mb-4"><em>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
            
            <p className="text-gray-300 mb-4">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>To facilitate account creation and authentication and otherwise manage user accounts</li>
              <li>To deliver and facilitate delivery of services to the user</li>
              <li>To respond to user inquiries/offer support to users</li>
              <li>To send administrative information to you</li>
              <li>To fulfill and manage your orders</li>
              <li>To request feedback</li>
              <li>To protect our Services</li>
              <li>To identify usage trends</li>
              <li>To determine the effectiveness of our marketing and promotional campaigns</li>
              <li>To save or protect an individual's vital interest</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</em></p>
            
            <h3 className="text-xl font-bold text-white mb-4">If you are located in the EU or UK, this section applies to you.</h3>
            <p className="text-gray-300 mb-4">The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-3 ml-4 mb-6">
              <li><strong className="text-white">Consent:</strong> We may process your information if you have given us permission to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
              <li><strong className="text-white">Performance of a Contract:</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you.</li>
              <li><strong className="text-white">Legitimate Interests:</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests.</li>
              <li><strong className="text-white">Legal Obligations:</strong> We may process your information where we believe it is necessary for compliance with our legal obligations.</li>
              <li><strong className="text-white">Vital Interests:</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-white mb-4 mt-8">If you are located in Canada, this section applies to you.</h3>
            <p className="text-gray-300 mb-4">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
          </section>

          {/* Section 4 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We may share information in specific situations described in this section and/or with the following categories of third parties.</em></p>
            
            <p className="text-gray-300 mb-4"><strong className="text-white">Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</p>
            
            <p className="text-gray-300 mb-4">The categories of third parties we may share personal information with are as follows:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>AI Platforms</li>
              <li>Cloud Computing Services</li>
              <li>Data Analytics Services</li>
              <li>Data Storage Service Providers</li>
              <li>Payment Processors</li>
              <li>Performance Monitoring Tools</li>
              <li>User Account Registration & Authentication Services</li>
              <li>Retargeting Platforms</li>
              <li>Sales & Marketing Tools</li>
              <li>Website Hosting Service Providers</li>
            </ul>
            
            <p className="text-gray-300 mb-4">We also may need to share your personal information in the following situations:</p>
            <p className="text-gray-300"><strong className="text-white">Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
          </section>

          {/* Section 5 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We may use cookies and other tracking technologies to collect and store your information.</em></p>
            
            <p className="text-gray-300 mb-4">We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
            
            <p className="text-gray-300 mb-4">Specific information about how we use such technologies and how you can refuse certain cookies is set out in our <Link to={createPageUrl("CookiePolicy")} className="text-yellow-400 underline">Cookie Notice</Link>.</p>
            
            <div className="bg-gray-800 p-6 rounded-lg mt-6">
              <h4 className="text-xl font-bold text-yellow-400 mb-3">Google Analytics</h4>
              <p className="text-gray-300">We may share your information with Google Analytics to track and analyze the use of the Services. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-yellow-400 underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">6. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</em></p>
            
            <p className="text-gray-300 mb-4">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.</p>
            
            <h3 className="text-xl font-bold text-white mb-4">Use of AI Technologies</h3>
            <p className="text-gray-300 mb-4">We provide the AI Products through third-party service providers ("AI Service Providers"), including DeepSeek and OpenAI. Your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products.</p>
            
            <h3 className="text-xl font-bold text-white mb-4">Our AI Products</h3>
            <p className="text-gray-300 mb-4">Our AI Products are designed for the following functions:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>AI development</li>
              <li>Video analysis</li>
              <li>AI bots</li>
            </ul>
            
            <p className="text-gray-300">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.</p>
          </section>

          {/* Section 7 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</em></p>
            
            <p className="text-gray-300 mb-4">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider.</p>
            
            <p className="text-gray-300">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services.</p>
          </section>

          {/* Section 8 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We may transfer, store, and process your information in countries other than your own.</em></p>
            
            <p className="text-gray-300 mb-4">Our servers are located in the United States. If you are accessing our Services from outside the United States, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information.</p>
            
            <p className="text-gray-300 mb-4">If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, we have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information.</p>
          </section>

          {/* Section 9 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">9. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></p>
            
            <p className="text-gray-300 mb-4">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law. No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
            
            <p className="text-gray-300">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
          </section>

          {/* Section 10 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">10. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We aim to protect your personal information through a system of organizational and technical security measures.</em></p>
            
            <p className="text-gray-300 mb-4">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
            
            <p className="text-gray-300">Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
          </section>

          {/* Section 11 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: Depending on your state of residence in the US or in some regions, you have rights that allow you greater access to and control over your personal information.</em></p>
            
            <p className="text-gray-300 mb-4">In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>to request access and obtain a copy of your personal information</li>
              <li>to request rectification or erasure</li>
              <li>to restrict the processing of your personal information</li>
              <li>if applicable, to data portability</li>
              <li>not to be subject to automated decision-making</li>
            </ul>
            
            <p className="text-gray-300 mb-4">In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us using the contact details provided below.</p>
            
            <h3 className="text-xl font-bold text-white mb-4 mt-8">Account Information</h3>
            <p className="text-gray-300 mb-4">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
              <li>Log in to your account settings and update your user account</li>
              <li>Contact us using the contact information provided</li>
            </ul>
            
            <p className="text-gray-300 mb-4">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
            
            <p className="text-gray-300">If you have questions or comments about your privacy rights, you may email us at <span className="text-yellow-400">courtaiapp@gmail.com</span>.</p>
          </section>

          {/* Section 12 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
            <p className="text-gray-300 mb-4">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected.</p>
            
            <p className="text-gray-300">At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.</p>
          </section>

          {/* Section 13 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">13. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information.</em></p>
            
            <h3 className="text-xl font-bold text-white mb-4">Your Rights</h3>
            <p className="text-gray-300 mb-4">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
              <li>Right to know whether or not we are processing your personal data</li>
              <li>Right to access your personal data</li>
              <li>Right to correct inaccuracies in your personal data</li>
              <li>Right to request the deletion of your personal data</li>
              <li>Right to obtain a copy of the personal data you previously shared with us</li>
              <li>Right to non-discrimination for exercising your rights</li>
              <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
            </ul>
            
            <h3 className="text-xl font-bold text-white mb-4">How to Exercise Your Rights</h3>
            <p className="text-gray-300 mb-4">To exercise these rights, you can contact us by visiting <span className="text-yellow-400">https://courtai.info/</span>, by emailing us at <span className="text-yellow-400">courtaiapp@gmail.com</span>, or by referring to the contact details at the bottom of this document.</p>
            
            <h3 className="text-xl font-bold text-white mb-4">California "Shine The Light" Law</h3>
            <p className="text-gray-300">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes.</p>
          </section>

          {/* Section 14 */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">14. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: You may have additional rights based on the country you reside in.</em></p>
            
            <h3 className="text-xl font-bold text-white mb-4">Australia and New Zealand</h3>
            <p className="text-gray-300 mb-4">We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020.</p>
            
            <p className="text-gray-300 mb-4">If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services.</p>
            
            <p className="text-gray-300">At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us using the contact details provided below.</p>
          </section>

          {/* Section 15 - Children's Privacy */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">15. CHILDREN'S PRIVACY</h2>
            <p className="text-gray-300 mb-6"><em>In Short: We do not knowingly collect data from or market to children under 13 years of age.</em></p>
            
            <p className="text-gray-300 mb-4">Our Services are not directed to children under the age of 13 (or the age of digital consent in your country, which may be 13–16). We do not knowingly collect personal information from children without verifiable parental consent.</p>
            
            <p className="text-gray-300 mb-4">If you are under 13 years of age (or the minimum age of digital consent in your jurisdiction), please do not use our Services or provide any personal information to us.</p>
            
            <p className="text-gray-300 mb-4">If we become aware that we have collected personal information from a child without parental consent, we will delete such information immediately.</p>
            
            <p className="text-gray-300 mb-4">Parents or legal guardians who believe that their child has provided us with personal information may contact us at <span className="text-yellow-400">courtaiapp@gmail.com</span> to request deletion.</p>
            
            <p className="text-gray-300 mb-4">For users between the ages of 13–18, we recommend parental guidance when using our Services.</p>
            
            <p className="text-gray-300">By using our Services, you represent that you are at least 18 years of age, or that you are the parent/guardian who has provided verifiable consent for your child's use of the Services.</p>
          </section>

          {/* Section 16 (formerly 15) */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">16. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
            <p className="text-gray-300 mb-6"><em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
            
            <p className="text-gray-300 mb-4">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification.</p>
            
            <p className="text-gray-300">We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
          </section>

          {/* Section 17 (formerly 16) */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">17. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
            <p className="text-gray-300 mb-4">If you have questions or comments about this notice, you may email us at:</p>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-yellow-400 text-lg font-semibold mb-2">courtaiapp@gmail.com</p>
              <p className="text-gray-300">Noam Tzur</p>
              <p className="text-gray-300">Court AI</p>
            </div>
          </section>

          {/* Section 18 (formerly 17) */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">18. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
            <p className="text-gray-300 mb-4">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information.</p>
            
            <p className="text-gray-300 mb-4">You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law.</p>
            
            <p className="text-gray-300 mb-6">To request to review, update, or delete your personal information, please visit: <span className="text-yellow-400">https://courtai.info/</span></p>
            
            <div className="mt-6">
              <Link to={createPageUrl("DeleteAccount")}>
                <Button className="bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 px-6 py-3 rounded-full font-semibold">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Account Deletion Guide
                </Button>
              </Link>
            </div>
          </section>

          <div className="mt-12 text-center">
            <Link to={createPageUrl("Home")}>
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
