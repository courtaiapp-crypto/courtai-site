import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functionality: false
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('courtai-cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const savePreferences = (acceptAll = false) => {
    const finalPreferences = acceptAll ? {
      necessary: true,
      analytics: true,
      marketing: true,
      functionality: true
    } : preferences;

    localStorage.setItem('courtai-cookie-consent', JSON.stringify(finalPreferences));
    localStorage.setItem('courtai-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true);
  };

  const handleAcceptSelected = () => {
    savePreferences(false);
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functionality: false
    });
    savePreferences(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="bg-gray-900 border-yellow-400 shadow-2xl max-w-4xl mx-auto">
        <CardContent className="p-6">
          {!showSettings ? (
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Cookie Notice & Privacy Standard 13 Compliance
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Court AI respects your privacy rights under Privacy Standard 13. We use cookies and similar technologies to enhance your experience, analyze usage patterns, and comply with legal requirements. 
                    You have full control over your data and can manage your preferences at any time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Link to={createPageUrl("Privacy")} className="text-yellow-400 hover:text-yellow-300 text-sm underline">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-500">|</span>
                  <Link to={createPageUrl("CookiePolicy")} className="text-yellow-400 hover:text-yellow-300 text-sm underline">
                    Cookie Policy
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Cookie Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleRejectAll}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    Reject All
                  </Button>
                  <Button 
                    size="sm"
                    onClick={handleAcceptAll}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Cookie Preferences</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Necessary Cookies</h4>
                    <p className="text-sm text-gray-400">Required for basic website functionality and security</p>
                  </div>
                  <div className="text-green-400 font-semibold">Always Active</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Analytics Cookies</h4>
                    <p className="text-sm text-gray-400">Help us understand how visitors use our website</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Functionality Cookies</h4>
                    <p className="text-sm text-gray-400">Remember your preferences and settings</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.functionality}
                      onChange={(e) => setPreferences({...preferences, functionality: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-white">Marketing Cookies</h4>
                    <p className="text-sm text-gray-400">Used to deliver relevant advertisements</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  variant="outline"
                  onClick={handleRejectAll}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1"
                >
                  Reject All
                </Button>
                <Button 
                  onClick={handleAcceptSelected}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 flex-1"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}