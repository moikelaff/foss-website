'use client'

import { useEffect } from 'react'

export default function DocumentFixes() {
  useEffect(() => {
    // This runs only in the browser, not during server-side rendering
    const fixStyles = () => {
      // Find all style tags that have mismatches
      const styleElements = document.querySelectorAll('style[type="text/css"]')
      
      styleElements.forEach((styleEl) => {
        // Remove the type attribute to match client rendering
        styleEl.removeAttribute('type')
        
        // Add the layer directive if not present
        if (!styleEl.textContent?.includes('@layer payload-default, payload')) {
          styleEl.textContent = '@layer payload-default, payload;\n' + styleEl.textContent
        }
      })
    }

    // Fix styles on mount
    fixStyles()

    // Also add mutation observer to catch dynamically added styles
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          fixStyles()
        }
      })
    })

    observer.observe(document.head, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])
  
  return null
}