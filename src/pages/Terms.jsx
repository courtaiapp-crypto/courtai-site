import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-gray-400 mt-2">Effective Date: October 2025</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gray-900 rounded-2xl p-8 mb-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are Court AI ("Company," "we," "us," "our"), a business registered in Israel.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We operate the mobile application Court AI (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              You can contact us by email at <span className="text-yellow-400">courtaiapp@gmail.com</span>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Court AI, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong className="text-white">IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by email or app notification. By continuing to use the Services after the effective date, you agree to the changes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">1. OUR SERVICES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
              
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Our intellectual property</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Your use of our Services</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
                <li>solely for your personal, non-commercial use or internal business purpose.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mb-4">
                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <span className="text-yellow-400">courtaiapp@gmail.com</span>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms, and your right to use our Services will terminate immediately.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">3. USER REPRESENTATIONS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">By using the Services, you represent and warrant that:</p>
              <ul className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>you have the legal capacity and you agree to comply with these Legal Terms;</li>
                <li>you are not a minor in the jurisdiction in which you reside;</li>
                <li>you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
                <li>you will not use the Services for any illegal or unauthorized purpose; and</li>
                <li>your use of the Services will not violate any applicable law or regulation.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">4. PROHIBITED ACTIVITIES</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">As a user of the Services, you agree not to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 text-sm">
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">5. USER GENERATED CONTRIBUTIONS</h2>
              <p className="text-gray-300 leading-relaxed">
                The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">6. CONTRIBUTION LICENSE</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">7. SERVICES MANAGEMENT</h2>
              <p className="text-gray-300 leading-relaxed mb-4">We reserve the right, but not the obligation, to:</p>
              <ul className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                <li>monitor the Services for violations of these Legal Terms;</li>
                <li>take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms;</li>
                <li>refuse, restrict access to, limit the availability of, or disable any of your Contributions;</li>
                <li>remove from the Services or otherwise disable all files and content that are excessive in size or burdensome to our systems; and</li>
                <li>otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">8. TERM AND TERMINATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Legal Terms shall remain in full force and effect while you use the Services. <strong className="text-white">WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">9. MODIFICATIONS AND INTERRUPTIONS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">10. GOVERNING LAW</h2>
              <p className="text-gray-300 leading-relaxed">
                These Legal Terms shall be governed by and defined following the laws of Israel. Court AI and yourself irrevocably consent that the courts of Israel shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">11. DISPUTE RESOLUTION</h2>
              
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Informal Negotiations</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute" and collectively, the "Disputes") brought by either you or us, the Parties agree to first attempt to negotiate any Dispute informally for at least 30 days before initiating arbitration.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Binding Arbitration</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration under the applicable arbitration laws of Israel.
              </p>

              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Restrictions</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                <li>no arbitration shall be joined with any other proceeding;</li>
                <li>there is no right or authority for any Dispute to be arbitrated on a class-action basis;</li>
                <li>there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public.</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Exceptions to Arbitration</h3>
              <p className="text-gray-300 leading-relaxed mb-4">The Parties agree that the following Disputes are not subject to arbitration:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>any Disputes seeking to enforce or protect intellectual property rights;</li>
                <li>any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use;</li>
                <li>any claim for injunctive relief.</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">12. CORRECTIONS</h2>
              <p className="text-gray-300 leading-relaxed">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">13. DISCLAIMER</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS</li>
                <li>PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO THE SERVICES</li>
                <li>ANY UNAUTHORIZED ACCESS TO OUR SECURE SERVERS</li>
                <li>ANY INTERRUPTION OR CESSATION OF TRANSMISSION</li>
                <li>ANY BUGS, VIRUSES, OR TROJAN HORSES TRANSMITTED THROUGH THE SERVICES</li>
                <li>ANY ERRORS OR OMISSIONS IN ANY CONTENT</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">14. LIMITATIONS OF LIABILITY</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.</strong>
              </p>
              <p className="text-gray-300 leading-relaxed">
                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">15. INDEMNIFICATION</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand made by any third party due to or arising out of:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>use of the Services;</li>
                <li>breach of these Legal Terms;</li>
                <li>any breach of your representations and warranties;</li>
                <li>your violation of the rights of a third party, including intellectual property rights;</li>
                <li>any harmful act toward any other user of the Services.</li>
              </ul>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">16. USER DATA</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">17. ELECTRONIC COMMUNICATIONS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically satisfy any legal requirement that such communication be in writing.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</strong>
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">18. MISCELLANEOUS</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable and does not affect the validity and enforceability of any remaining provisions.
              </p>
            </section>

            <section className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-4">19. CONTACT US</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>Email: <span className="text-yellow-400">courtaiapp@gmail.com</span></p>
              </div>
            </section>
          </div>

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