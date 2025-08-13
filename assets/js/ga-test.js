// Google Analytics Test Script
// This script helps verify that GA4 is properly integrated

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔍 Testing Google Analytics Integration...');
    
    // Test 1: Check if gtag function exists
    if (typeof gtag !== 'undefined') {
        console.log('✅ gtag function is available');
        
        // Test 2: Send a test event
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
                'test_event': 'visitor_map_integration'
            }
        });
        console.log('✅ Test page_view event sent to GA4');
        
        // Test 3: Send a custom event for visitor map
        gtag('event', 'visitor_map_viewed', {
            event_category: 'engagement',
            event_label: 'homepage_visitor_map',
            value: 1
        });
        console.log('✅ Custom visitor map event sent to GA4');
        
    } else {
        console.error('❌ gtag function not found - Google Analytics may not be loaded');
    }
    
    // Test 4: Check if dataLayer exists
    if (window.dataLayer) {
        console.log('✅ dataLayer is available');
        console.log('📊 Current dataLayer:', window.dataLayer);
    } else {
        console.error('❌ dataLayer not found');
    }
    
    // Test 5: Check for Google Analytics script
    const gaScripts = document.querySelectorAll('script[src*="googletagmanager"]');
    if (gaScripts.length > 0) {
        console.log('✅ Google Analytics script found:', gaScripts.length, 'script(s)');
        gaScripts.forEach((script, index) => {
            console.log(`   Script ${index + 1}:`, script.src);
        });
    } else {
        console.error('❌ Google Analytics script not found in DOM');
    }
    
    console.log('🎯 Google Analytics test completed');
});
