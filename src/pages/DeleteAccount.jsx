import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Trash2, AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to={createPageUrl("Privacy")}>
            <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Privacy Policy
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                Account Deletion Guide
              </h1>
              <p className="text-gray-400 mt-2">How to Delete Your Court AI Account</p>
            </div>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {/* Warning Notice */}
          <Card className="bg-red-900/20 border-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-2">Important Notice</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Account deletion is permanent and cannot be undone. All your data, including training history, progress records, and personal settings will be permanently removed from our systems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Delete Your Account */}
          <section className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
              <Info className="w-8 h-8" />
              How to Delete Your Account
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Open Court AI App</h3>
                  <p className="text-gray-300">Launch the Court AI application on your mobile device.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Navigate to Settings</h3>
                  <p className="text-gray-300">Tap on your profile icon or menu button to access the app settings.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Find Your Profile</h3>
                  <p className="text-gray-300">In the Settings menu, look for "Profile" or "Account Settings".</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Select Delete Account</h3>
                  <p className="text-gray-300">Scroll down to find the "Delete Account" option and tap on it.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Confirm Deletion</h3>
                  <p className="text-gray-300">Read the warning message carefully and confirm that you want to permanently delete your account.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 text-black font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Account Deleted</h3>
                  <p className="text-gray-300">Your account and all associated data will be permanently removed within 30 days.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What Gets Deleted */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">What Gets Deleted</h2>
            <p className="text-gray-300 mb-4">When you delete your account, the following information will be permanently removed:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Your profile information (name, email, profile picture)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>All training programs and workout history</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Progress tracking data and statistics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Goals and personal preferences</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Any saved or favorited content</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span>Account settings and customizations</span>
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Data Retention Period</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-white">Immediate Deletion:</strong> Your account will be deactivated immediately upon confirmation. You will no longer be able to log in or access your data.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">30-Day Grace Period:</strong> Your data will be retained for 30 days in case you change your mind. During this period, you can contact us at <span className="text-yellow-400">courtaiapp@gmail.com</span> to restore your account.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Permanent Deletion:</strong> After 30 days, all your data will be permanently deleted from our systems and cannot be recovered.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Legal Requirements:</strong> Some data may be retained for longer periods if required by law or for legitimate business purposes (e.g., transaction records, legal compliance).
              </p>
            </div>
          </section>

          {/* Before You Delete */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Before You Delete Your Account</h2>
            <p className="text-gray-300 mb-4">Please consider the following before proceeding with account deletion:</p>
            <div className="space-y-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Export Your Data</h3>
                  <p className="text-gray-300 text-sm">You may want to export your training history and progress data before deletion. Contact us for a data export.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Cancel Active Subscriptions</h3>
                  <p className="text-gray-300 text-sm">Make sure to cancel any active subscriptions through your Apple App Store or Google Play Store account to avoid future charges.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Consider Deactivation Instead</h3>
                  <p className="text-gray-300 text-sm">If you're unsure, you might want to just stop using the app temporarily instead of permanent deletion.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Subscription Information */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Important: Subscription Management</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <strong className="text-white">Deleting your account does NOT automatically cancel your subscription.</strong>
              </p>
              <p className="leading-relaxed">
                If you have an active subscription, you must cancel it separately through:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Apple App Store</h3>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Open Settings on your iPhone</li>
                      <li>Tap your name → Subscriptions</li>
                      <li>Find Court AI</li>
                      <li>Tap Cancel Subscription</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">Google Play Store</h3>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Open Google Play Store</li>
                      <li>Tap Menu → Subscriptions</li>
                      <li>Find Court AI</li>
                      <li>Tap Cancel Subscription</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Your Rights Under Privacy Laws</h2>
            <p className="text-gray-300 mb-4">Under applicable privacy laws (GDPR, CCPA, etc.), you have the right to:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Right to Deletion:</strong> Request deletion of your personal information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Right to Access:</strong> Request a copy of your data before deletion</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Right to Rectification:</strong> Correct any inaccurate information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Right to Data Portability:</strong> Receive your data in a machine-readable format</span>
              </li>
            </ul>
          </section>

          {/* Need Help */}
          <section className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-8 text-black">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4 text-lg">
              If you're having trouble deleting your account or have questions about the process, we're here to help.
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Contact us at:</p>
              <p className="text-lg">Email: <span className="font-bold">courtaiapp@gmail.com</span></p>
              <p className="text-sm mt-4">We typically respond within 24-48 hours.</p>
            </div>
          </section>

          {/* Alternative Options */}
          <section className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">Alternative Options</h2>
            <p className="text-gray-300 mb-4">Before deleting your account permanently, consider these alternatives:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Take a Break</h3>
                  <p className="text-gray-300 text-sm">Simply stop using the app for a while. Your data will be safe when you return.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Adjust Privacy Settings</h3>
                  <p className="text-gray-300 text-sm">Modify what data we collect and how we use it in your privacy settings.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Contact Support</h3>
                  <p className="text-gray-300 text-sm">Let us know if there's an issue we can help resolve.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Provide Feedback</h3>
                  <p className="text-gray-300 text-sm">Tell us why you're leaving so we can improve the app.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Privacy")}>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full font-semibold">
                Back to Privacy Policy
              </Button>
            </Link>
            <Link to={createPageUrl("Home")}>
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 px-8 py-3 rounded-full font-semibold">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}