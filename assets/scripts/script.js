// Credentials provided for your channel
const API_KEY = atob(atob('UVVsNllWTjVSSFZqV1hCR1pUVmpSM0V6WTNwV2NFSnZWVTVmV1hKSU1UZDNRek0zUWpCQg=='));
const CHANNEL_ID = 'UCXik9f16X1kXfRTXAJrrr3A'; // Your YouTube Channel ID

async function fetchSubscribers() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    if (data.items && data.items.length > 0) {
      const subCount = data.items[0].statistics.subscriberCount;
      document.getElementById('sub-count').textContent = Number(subCount).toLocaleString();
    } else {
      document.getElementById('sub-count').textContent = 'Channel not found';
    }
  } catch (error) {
    console.error('Error fetching subscriber count:', error);
    document.getElementById('sub-count').textContent = 'Error loading count';
  }
}

window.addEventListener('DOMContentLoaded', fetchSubscribers);
setInterval(fetchSubscribers, 60000);
