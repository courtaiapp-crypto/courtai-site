import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  CheckCircle,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CookieBanner from "../components/privacy/CookieBanner";

export default function Home() {
    const [highlightButtons, setHighlightButtons] = React.useState(false);

    const scrollToDownload = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setHighlightButtons(true);
      setTimeout(() => setHighlightButtons(false), 2000);
    };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cookie Banner */}
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-2 rounded-full font-semibold mb-8">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68da6e7c977fd0d4a25bee15/73c353a2f_CourtAI_AppIcon_Optimized_Under1MB.png" 
              alt="Court AI Logo" 
              className="w-6 h-6"
            />
            Your Personal Basketball Coach
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Court AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your personal AI basketball coach that creates customized training programs 
            just for you. Tailored to your position, skill level, and personal goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/app/id6753168199" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-105 rounded-lg ${highlightButtons ? 'ring-4 ring-yellow-400 ring-offset-4 ring-offset-black scale-110' : ''}`}
            >
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-[50px]"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.noamtzur.courtai" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`transition-all duration-300 hover:scale-105 rounded-lg ${highlightButtons ? 'ring-4 ring-yellow-400 ring-offset-4 ring-offset-black scale-110' : ''}`}
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-[74px] -my-3"
              />
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-30 animate-bounce"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              Your Personal Basketball Coach
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI-powered personalized training that adapts to your unique playing style and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Personalized Training Plans</h3>
                <p className="text-gray-400 leading-relaxed">
                  Every workout is customized specifically for your position, skill level, and individual goals. Your personal coach in your pocket.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Smart Progress Tracking</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced analytics track your improvement in real-time, adjusting your training program as you develop new skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 hover:border-yellow-400 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Goal-Focused Coaching</h3>
                <p className="text-gray-400 leading-relaxed">
                  Whether you want to improve your three-point shooting, ball handling, or athletic performance - your AI coach has you covered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
              How Your AI Coach Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Create Your Profile</h3>
              <p className="text-gray-400">Tell your AI coach about your position, current skill level, and basketball goals</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Get Personal Training</h3>
              <p className="text-gray-400">Receive customized workout plans designed specifically for your needs</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Train & Improve</h3>
              <p className="text-gray-400">Follow your personalized workouts and track every rep, shot, and drill</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-2xl group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">See Your Growth</h3>
              <p className="text-gray-400">Watch your skills improve with detailed progress analytics and coaching insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Personal Basketball Coach?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the future of basketball training with AI-powered personalized coaching
          </p>
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-900 px-12 py-4 text-lg font-semibold rounded-full"
            onClick={scrollToDownload}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68da6e7c977fd0d4a25bee15/73c353a2f_CourtAI_AppIcon_Optimized_Under1MB.png" 
                alt="Court AI Logo" 
                className="w-8 h-8"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                Court AI
              </h3>
            </div>
            <p className="text-gray-400">Your personal AI basketball coach</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8 border-t border-gray-800">
            <Link 
              to={createPageUrl("Terms")} 
              className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
            >
              Terms of Service
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
            <Link 
              to={createPageUrl("Privacy")} 
              className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
            <Link 
              to={createPageUrl("CookiePolicy")} 
              className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
            >
              Cookie Policy
            </Link>
            <div className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block"></div>
            <Link 
              to={createPageUrl("DeleteAccount")} 
              className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
            >
              Delete User
            </Link>
          </div>
          
          <div className="text-center mt-8 text-gray-500">
            <p>&copy; 2025 Court AI. All rights reserved.</p>
            <p className="text-sm mt-2">Privacy Standard 13 Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}