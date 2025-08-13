# 🌍 Live Visitor Map Setup Guide

This guide explains how to set up the live 3D world map with real visitor counting on your website.

## ✨ Features

- **3D World Map**: Interactive map showing visitor locations worldwide
- **Live Visitor Counting**: Real-time updates of visitor statistics
- **Multiple Analytics Integration**: Support for Google Analytics, ShinyStat, and custom analytics
- **Responsive Design**: Works on all devices
- **Fallback Support**: Graceful degradation when analytics services are unavailable

## 🚀 Quick Start

The visitor map is automatically included on your home page (`/`) and will work with sample data immediately.

## 📊 Real Analytics Integration

### Google Analytics 4

1. **Enable Google Analytics** in your `_config.yml`:
   ```yaml
   google_analytics:
     tracking_id: "G-XXXXXXXXXX"
   ```

2. **Add GA4 tracking code** to your `_includes/head.liquid`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

3. **Enable Real-Time API** in Google Analytics:
   - Go to Google Analytics > Admin > Property Settings
   - Enable Real-Time reporting
   - Set up API access for real-time data

### ShinyStat Integration

ShinyStat is already configured in your site. The visitor map will automatically detect and use ShinyStat data when available.

### Custom Analytics

To integrate with your own analytics system:

1. **Create a custom analytics object**:
   ```javascript
   window.customAnalytics = {
     getVisitorCount: async () => { /* return visitor count */ },
     getVisitorLocations: async () => { /* return location data */ },
     trackVisitor: (data) => { /* track new visitor */ }
   };
   ```

2. **The visitor map will automatically detect and use your custom analytics**.

## 🔧 Configuration

### Customizing the Map

Edit `assets/js/visitor-map.js` to customize:
- Map center and zoom level
- Marker colors and sizes
- Update intervals
- Animation effects

### Styling

Edit `assets/css/visitor-map.css` to customize:
- Colors and gradients
- Animations
- Responsive breakpoints
- Dark mode support

### Sample Data

The map includes sample visitor data for demonstration. To use real data:

1. **Replace sample data** in `assets/js/visitor-analytics.js`
2. **Implement real API calls** to your analytics services
3. **Update data refresh intervals** as needed

## 📱 Responsive Design

The visitor map automatically adapts to different screen sizes:
- **Desktop**: Full 600px height with detailed controls
- **Tablet**: 400px height with optimized layout
- **Mobile**: 300px height with touch-friendly controls

## 🌙 Dark Mode Support

The visitor map automatically detects and adapts to your system's dark mode preference.

## 🚀 Performance Optimization

- **Lazy Loading**: Map loads only when needed
- **Efficient Updates**: Minimal DOM manipulation
- **Memory Management**: Proper cleanup of event listeners
- **CDN Resources**: Uses CDN for Leaflet library

## 🔍 Troubleshooting

### Map Not Loading

1. Check browser console for JavaScript errors
2. Ensure Leaflet library is loading correctly
3. Verify CSS files are being loaded

### No Visitor Data

1. Check if analytics services are properly configured
2. Verify API keys and permissions
3. Check network requests in browser dev tools

### Performance Issues

1. Reduce update intervals in the JavaScript
2. Limit the number of visitor markers
3. Use browser dev tools to profile performance

## 📈 Advanced Features

### Real-Time Updates

The map updates every 30 seconds by default. To change this:

```javascript
// In visitor-map.js
setInterval(() => {
    this.updateVisitorCounts();
}, 60000); // Change to 60 seconds
```

### Custom Markers

To add custom markers or modify existing ones:

```javascript
// In visitor-map.js
addCustomMarker(lat, lng, data) {
    const marker = L.marker([lat, lng]).addTo(this.map);
    marker.bindPopup(`<b>${data.title}</b><br>${data.description}`);
}
```

### Analytics Events

Track custom events when visitors interact with the map:

```javascript
// In visitor-analytics.js
trackMapInteraction(interactionType) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'map_interaction', {
            interaction_type: interactionType,
            page: window.location.pathname
        });
    }
}
```

## 🎯 Best Practices

1. **Privacy Compliance**: Ensure visitor tracking complies with GDPR/CCPA
2. **Performance**: Monitor map performance on mobile devices
3. **Accessibility**: Ensure map controls are keyboard accessible
4. **SEO**: Map content is properly indexed by search engines

## 🤝 Contributing

To contribute to the visitor map:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This visitor map is part of your academic website and follows the same license terms.

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console for error messages
3. Test with different browsers/devices
4. Check analytics service status

---

**Note**: The visitor map is designed to work seamlessly with your existing analytics setup. It will automatically detect available services and fall back to sample data when needed.
