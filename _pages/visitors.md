---
layout: page
title: Visitors
permalink: /visitors/
nav: true
nav_order: 6
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <h2>🌍 Visitor Map</h2>
        <p>See where visitors to this website are located around the world!</p>
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div id="visitor-map" style="height: 600px; width: 100%; border: 1px solid #ddd; border-radius: 8px;"></div>
    </div>
</div>

<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        <h3>📊 Visitor Statistics</h3>
        <div class="row">
            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Total Visitors</h5>
                        <p class="card-text" id="total-visitors">Loading...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Countries</h5>
                        <p class="card-text" id="total-countries">Loading...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Today's Visitors</h5>
                        <p class="card-text" id="today-visitors">Loading...</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">This Month</h5>
                        <p class="card-text" id="month-visitors">Loading...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        <h3>🏆 Top Visitor Countries</h3>
        <div id="top-countries" class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Country</th>
                        <th>Visitors</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody id="countries-table">
                    <tr><td colspan="4" class="text-center">Loading...</td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- Integration Options -->
<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        <h3>🔗 Integration Options</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">📍 Clustrmaps</h5>
                        <p class="card-text">Real-time visitor map with live tracking.</p>
                        <div class="text-center">
                            <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=-JdpziCUz3Oi3ck10cI5eklPmY9bFzBngo-U9_OzT2c"></script>
                        </div>
                        <small class="text-muted">Live visitor globe showing real-time visitor locations</small>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">📈 ShinyStat Analytics</h5>
                        <p class="card-text">Detailed visitor statistics from ShinyStat.</p>
                        <div class="text-center">
                            <a href="https://www.shinystat.com/it/" target="_blank">
                                <img src="//www.shinystat.com/cgi-bin/shinystat.cgi?USER=SS-53561023-84070" alt="Statistiche web" style="border:0px" />
                            </a>
                        </div>
                        <small class="text-muted">Live ShinyStat analytics with your account</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Setup Instructions -->
<div class="row mt-4">
    <div class="col-sm mt-3 mt-md-0">
        <h3>⚙️ Setup Instructions</h3>
        <div class="alert alert-info">
            <h5>Your visitor tracking is now fully active with:</h5>
            <ol>
                <li><strong>✅ Clustrmaps:</strong> Live visitor globe showing real-time visitor locations</li>
                <li><strong>✅ ShinyStat:</strong> Configured with your account <code>SS-53561023-84070</code></li>
                <li><strong>Google Analytics:</strong> Enable Google Analytics in <code>_config.yml</code> and use the API to fetch visitor data</li>
                <li><strong>Custom Integration:</strong> Replace the sample data in the JavaScript with real data from your analytics service</li>
            </ol>
        </div>
    </div>
</div>

<script>
// Sample visitor data - replace with real data from your analytics
const visitorData = {
    totalVisitors: 1250,
    totalCountries: 45,
    todayVisitors: 23,
    monthVisitors: 156,
    countries: [
        { country: "United States", visitors: 450, percentage: 36.0, lat: 39.8283, lng: -98.5795 },
        { country: "India", visitors: 320, percentage: 25.6, lat: 20.5937, lng: 78.9629 },
        { country: "Canada", visitors: 180, percentage: 14.4, lat: 56.1304, lng: -106.3468 },
        { country: "United Kingdom", visitors: 95, percentage: 7.6, lat: 55.3781, lng: -3.4360 },
        { country: "Germany", visitors: 75, percentage: 6.0, lat: 51.1657, lng: 10.4515 },
        { country: "Australia", visitors: 45, percentage: 3.6, lat: -25.2744, lng: 133.7751 },
        { country: "France", visitors: 35, percentage: 2.8, lat: 46.2276, lng: 2.2137 },
        { country: "Japan", visitors: 30, percentage: 2.4, lat: 36.2048, lng: 138.2529 },
        { country: "Brazil", visitors: 25, percentage: 2.0, lat: -14.2350, lng: -51.9253 },
        { country: "Netherlands", visitors: 20, percentage: 1.6, lat: 52.1326, lng: 5.2913 }
    ]
};

// Update statistics
document.getElementById('total-visitors').textContent = visitorData.totalVisitors.toLocaleString();
document.getElementById('total-countries').textContent = visitorData.totalCountries;
document.getElementById('today-visitors').textContent = visitorData.todayVisitors;
document.getElementById('month-visitors').textContent = visitorData.monthVisitors;

// Update countries table
const countriesTable = document.getElementById('countries-table');
countriesTable.innerHTML = '';
visitorData.countries.forEach((country, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${country.country}</td>
        <td>${country.visitors.toLocaleString()}</td>
        <td>${country.percentage}%</td>
    `;
    countriesTable.appendChild(row);
});

// Initialize interactive map using Leaflet
function initMap() {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.log('Leaflet not available, using placeholder');
        document.getElementById('visitor-map').innerHTML = 
            '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 18px; font-weight: bold;">Interactive World Map<br><small>Enable Leaflet for full functionality</small></div>';
        return;
    }

    // Create map
    const map = L.map('visitor-map').setView([20, 0], 2);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add visitor markers
    visitorData.countries.forEach(country => {
        const marker = L.circleMarker([country.lat, country.lng], {
            radius: Math.max(5, country.visitors / 20),
            fillColor: '#ff7800',
            color: '#000',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map);

        marker.bindPopup(`
            <strong>${country.country}</strong><br>
            Visitors: ${country.visitors.toLocaleString()}<br>
            Percentage: ${country.percentage}%
        `);
    });

    // Add legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function(map) {
        const div = L.DomUtil.create('div', 'info legend');
        div.style.backgroundColor = 'white';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.border = '1px solid #ccc';
        div.innerHTML = '<h4>Visitor Count</h4>' +
            '<div><span style="display: inline-block; width: 10px; height: 10px; background: #ff7800; border-radius: 50%; margin-right: 5px;"></span>Low</div>' +
            '<div><span style="display: inline-block; width: 20px; height: 20px; background: #ff7800; border-radius: 50%; margin-right: 5px;"></span>High</div>';
        return div;
    };
    legend.addTo(map);
}

// Load map when page is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for Leaflet to load if it's being loaded asynchronously
    setTimeout(initMap, 1000);
});
</script>

<style>
.card {
    transition: transform 0.2s;
    margin-bottom: 20px;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

#visitor-map {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: bold;
}

.table th {
    background-color: #f8f9fa;
    border-top: none;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0,0,0,.02);
}

.alert {
    border-left: 4px solid #17a2b8;
}

.legend {
    font-size: 12px;
}

.legend h4 {
    margin: 0 0 10px 0;
    font-size: 14px;
}
</style> 