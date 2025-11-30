
import React from 'react';

export default function Layout({ children }) {
  // This simple layout just renders the page content,
  // effectively making the pages public and bypassing the default login screen.
  return (
    <div id="app-layout">
      {children}
    </div>
  );
}
