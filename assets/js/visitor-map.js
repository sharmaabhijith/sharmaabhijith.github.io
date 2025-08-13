// 3D World Map with Live Visitor Counting
class VisitorWorldMap {
    constructor(containerId) {
        this.containerId = containerId;
        this.container = document.getElementById(containerId);
        this.visitorData = {
            totalVisitors: 0,
            totalCountries: 0,
            todayVisitors: 0,
            monthVisitors: 0,
            countries: []
        };
        this.map = null;
        this.markers = [];
        this.animationFrame = null;
        this.init();
    }

    async init() {
        await this.loadVisitorData();
        this.createMap();
        this.startLiveUpdates();
    }

    async loadVisitorData() {
        try {
            // Try to get real visitor data from analytics services
            if (window.visitorAnalytics) {
                await this.fetchAnalyticsData();
            } else {
                throw new Error('Analytics not available');
            }
        } catch (error) {
            console.log('Using sample data for demonstration');
            this.loadSampleData();
        }
    }

    async fetchAnalyticsData() {
        try {
            // Get analytics summary from the analytics system
            const summary = await window.visitorAnalytics.getAnalyticsSummary();
            const locations = await window.visitorAnalytics.getVisitorLocations();
            
            this.visitorData = {
                totalVisitors: summary.totalVisitors,
                totalCountries: summary.totalCountries,
                todayVisitors: summary.todayVisitors,
                monthVisitors: summary.monthVisitors,
                countries: locations.map(location => ({
                    country: location.country,
                    visitors: location.visitors,
                    percentage: (location.visitors / summary.totalVisitors * 100).toFixed(1),
                    lat: location.lat,
                    lng: location.lng,
                    flag: location.flag
                }))
            };
            
            console.log('Loaded real analytics data:', this.visitorData);
        } catch (error) {
            console.error('Failed to fetch analytics data:', error);
            throw new Error('Analytics data fetch failed');
        }
    }

    loadSampleData() {
        // Sample data - replace with real analytics data
        this.visitorData = {
            totalVisitors: 1250,
            totalCountries: 45,
            todayVisitors: 23,
            monthVisitors: 156,
            countries: [
                { country: "United States", visitors: 450, percentage: 36.0, lat: 39.8283, lng: -98.5795, flag: "🇺🇸" },
                { country: "India", visitors: 320, percentage: 25.6, lat: 20.5937, lng: 78.9629, flag: "🇮🇳" },
                { country: "Canada", visitors: 180, percentage: 14.4, lat: 56.1304, lng: -106.3468, flag: "🇨🇦" },
                { country: "United Kingdom", visitors: 95, percentage: 7.6, lat: 55.3781, lng: -3.4360, flag: "🇬🇧" },
                { country: "Germany", visitors: 75, percentage: 6.0, lat: 51.1657, lng: 10.4515, flag: "🇩🇪" },
                { country: "Australia", visitors: 45, percentage: 3.6, lat: -25.2744, lng: 133.7751, flag: "🇦🇺" },
                { country: "France", visitors: 35, percentage: 2.8, lat: 46.2276, lng: 2.2137, flag: "🇫🇷" },
                { country: "Japan", visitors: 30, percentage: 2.4, lat: 36.2048, lng: 138.2529, flag: "🇯🇵" },
                { country: "Brazil", visitors: 25, percentage: 2.0, lat: -14.2350, lng: -51.9253, flag: "🇧🇷" },
                { country: "Netherlands", visitors: 20, percentage: 1.6, lat: 52.1326, lng: 5.2913, flag: "🇳🇱" }
            ]
        };
    }

    createMap() {
        if (typeof L === 'undefined') {
            this.createFallbackMap();
            return;
        }

        // Create 3D-style map with custom styling
        this.map = L.map(this.containerId, {
            center: [20, 0],
            zoom: 2,
            zoomControl: true,
            scrollWheelZoom: true,
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            boxZoom: true,
            keyboard: true
        });

        // Add custom 3D-style tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);

        // Add custom 3D-style overlay
        this.add3DOverlay();
        
        // Add visitor markers
        this.addVisitorMarkers();
        
        // Add legend
        this.addLegend();
        
        // Add real-time visitor counter
        this.addVisitorCounter();
    }

    createFallbackMap() {
        this.container.innerHTML = `
            <div class="fallback-map">
                <div class="globe-container">
                    <div class="globe">
                        <div class="globe-sphere"></div>
                        <div class="globe-outer-shadow"></div>
                        <div class="globe-worldmap">
                            <div class="globe-worldmap-front"></div>
                            <div class="globe-worldmap-back"></div>
                        </div>
                    </div>
                </div>
                <div class="visitor-stats">
                    <div class="stat-item">
                        <span class="stat-number" id="total-visitors">${this.visitorData.totalVisitors.toLocaleString()}</span>
                        <span class="stat-label">Total Visitors</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="total-countries">${this.visitorData.totalCountries}</span>
                        <span class="stat-label">Countries</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number" id="today-visitors">${this.visitorData.todayVisitors}</span>
                        <span class="stat-label">Today</span>
                    </div>
                </div>
            </div>
        `;
    }

    add3DOverlay() {
        // Add custom CSS for 3D effect
        const style = document.createElement('style');
        style.textContent = `
            .visitor-map-container {
                position: relative;
                overflow: hidden;
                border-radius: 15px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            
            .visitor-map-container::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%);
                pointer-events: none;
                z-index: 1;
            }
            
            .leaflet-container {
                border-radius: 15px;
            }
            
            .visitor-marker {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0% { transform: scale(1); opacity: 0.8; }
                50% { transform: scale(1.1); opacity: 1; }
                100% { transform: scale(1); opacity: 0.8; }
            }
        `;
        document.head.appendChild(style);
    }

    addVisitorMarkers() {
        this.visitorData.countries.forEach((country, index) => {
            // Create custom 3D-style marker
            const markerSize = Math.max(8, Math.min(25, country.visitors / 15));
            const markerColor = this.getMarkerColor(country.visitors);
            
            const marker = L.circleMarker([country.lat, country.lng], {
                radius: markerSize,
                fillColor: markerColor,
                color: '#fff',
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
                className: 'visitor-marker'
            }).addTo(this.map);

            // Add popup with visitor information
            const popupContent = `
                <div class="visitor-popup">
                    <div class="popup-header">
                        <span class="country-flag">${country.flag}</span>
                        <strong>${country.country}</strong>
                    </div>
                    <div class="popup-stats">
                        <div class="stat">
                            <span class="stat-value">${country.visitors.toLocaleString()}</span>
                            <span class="stat-label">Visitors</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${country.percentage}%</span>
                            <span class="stat-label">Share</span>
                        </div>
                    </div>
                </div>
            `;
            
            marker.bindPopup(popupContent, {
                maxWidth: 200,
                className: 'visitor-popup-container'
            });

            this.markers.push(marker);

            // Add entrance animation
            setTimeout(() => {
                marker.setRadius(0);
                marker.setRadius(markerSize);
            }, index * 100);
        });
    }

    getMarkerColor(visitors) {
        if (visitors > 300) return '#e74c3c';      // Red for high traffic
        if (visitors > 100) return '#f39c12';      // Orange for medium-high
        if (visitors > 50) return '#f1c40f';       // Yellow for medium
        if (visitors > 20) return '#2ecc71';       // Green for medium-low
        return '#3498db';                           // Blue for low
    }

    addLegend() {
        const legend = L.control({ position: 'bottomright' });
        legend.onAdd = () => {
            const div = L.DomUtil.create('div', 'info legend');
            div.style.backgroundColor = 'rgba(255,255,255,0.95)';
            div.style.padding = '15px';
            div.style.borderRadius = '10px';
            div.style.border = '2px solid rgba(0,0,0,0.1)';
            div.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            div.style.fontSize = '12px';
            div.style.minWidth = '150px';
            
            div.innerHTML = `
                <h4 style="margin: 0 0 10px 0; color: #333; font-size: 14px;">🌍 Visitor Traffic</h4>
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; background: #e74c3c; border-radius: 50%; margin-right: 8px; border: 2px solid #fff;"></span>High (300+)
                </div>
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; background: #f39c12; border-radius: 50%; margin-right: 8px; border: 2px solid #fff;"></span>Medium-High (100-299)
                </div>
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; background: #f1c40f; border-radius: 50%; margin-right: 8px; border: 2px solid #fff;"></span>Medium (50-99)
                </div>
                <div style="margin-bottom: 8px;">
                    <span style="display: inline-block; width: 12px; height: 12px; background: #2ecc71; border-radius: 50%; margin-right: 8px; border: 2px solid #fff;"></span>Medium-Low (20-49)
                </div>
                <div>
                    <span style="display: inline-block; width: 12px; height: 12px; background: #3498db; border-radius: 50%; margin-right: 8px; border: 2px solid #fff;"></span>Low (<20)
                </div>
            `;
            return div;
        };
        legend.addTo(this.map);
    }

    addVisitorCounter() {
        const counterDiv = L.control({ position: 'topleft' });
        counterDiv.onAdd = () => {
            const div = L.DomUtil.create('div', 'visitor-counter');
            div.style.backgroundColor = 'rgba(255,255,255,0.95)';
            div.style.padding = '15px';
            div.style.borderRadius = '10px';
            div.style.border = '2px solid rgba(0,0,0,0.1)';
            div.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            div.style.minWidth = '200px';
            div.style.fontSize = '12px';
            
            div.innerHTML = `
                <h4 style="margin: 0 0 10px 0; color: #333; font-size: 14px;">📊 Live Stats</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div style="text-align: center;">
                        <div style="font-size: 18px; font-weight: bold; color: #e74c3c;" id="live-total">${this.visitorData.totalVisitors.toLocaleString()}</div>
                        <div style="font-size: 10px; color: #666;">Total</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 18px; font-weight: bold; color: #3498db;" id="live-countries">${this.visitorData.totalCountries}</div>
                        <div style="font-size: 10px; color: #666;">Countries</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 18px; font-weight: bold; color: #f39c12;" id="live-today">${this.visitorData.todayVisitors}</div>
                        <div style="font-size: 10px; color: #666;">Today</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 18px; font-weight: bold; color: #2ecc71;" id="live-month">${this.visitorData.monthVisitors}</div>
                        <div style="font-size: 10px; color: #666;">Month</div>
                    </div>
                </div>
            `;
            return div;
        };
        counterDiv.addTo(this.map);
    }

    startLiveUpdates() {
        // Simulate live updates every 30 seconds
        setInterval(() => {
            this.updateVisitorCounts();
        }, 30000);

        // Add some random visitor activity for demonstration
        setInterval(() => {
            this.simulateVisitorActivity();
        }, 5000);
    }

    updateVisitorCounts() {
        // Update the live counter displays
        const liveTotal = document.getElementById('live-total');
        const liveCountries = document.getElementById('live-countries');
        const liveToday = document.getElementById('live-today');
        const liveMonth = document.getElementById('live-month');

        if (liveTotal) liveTotal.textContent = this.visitorData.totalVisitors.toLocaleString();
        if (liveCountries) liveCountries.textContent = this.visitorData.totalCountries;
        if (liveToday) liveToday.textContent = this.visitorData.todayVisitors;
        if (liveMonth) liveMonth.textContent = this.visitorData.monthVisitors;
    }

    simulateVisitorActivity() {
        // Simulate new visitors for demonstration
        if (Math.random() > 0.7) {
            this.visitorData.totalVisitors++;
            this.visitorData.todayVisitors++;
            this.visitorData.monthVisitors++;
            this.updateVisitorCounts();
            
            // Add a brief flash effect to show activity
            this.container.style.boxShadow = '0 0 20px rgba(46, 204, 113, 0.8)';
            setTimeout(() => {
                this.container.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }, 500);
        }
    }

    destroy() {
        if (this.map) {
            this.map.remove();
        }
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
}

// Initialize the visitor map when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Leaflet to be available
    const initMap = () => {
        if (typeof L !== 'undefined') {
            new VisitorWorldMap('visitor-map');
        } else {
            setTimeout(initMap, 100);
        }
    };
    initMap();
});
