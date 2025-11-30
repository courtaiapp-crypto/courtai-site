import Layout from "./Layout.jsx";

import Home from "./Home";

import Terms from "./Terms";

import Privacy from "./Privacy";

import CookiePolicy from "./CookiePolicy";

import DeleteAccount from "./DeleteAccount";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Terms: Terms,
    
    Privacy: Privacy,
    
    CookiePolicy: CookiePolicy,
    
    DeleteAccount: DeleteAccount,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
    <Layout currentPageName={currentPage}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Support both lowercase URLs (used in links) and original capitalized paths */}
        <Route path="/terms" element={<Terms />} />
        <Route path="/Terms" element={<Terms />} />

        <Route path="/privacy" element={<Privacy />} />
        <Route path="/Privacy" element={<Privacy />} />

        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />

        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path="/DeleteAccount" element={<DeleteAccount />} />
      </Routes>
    </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}