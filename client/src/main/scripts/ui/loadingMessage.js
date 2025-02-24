export default function loadingMessage() {
  let currentIndex = 0;
  const widgetLoadingMessage = document.querySelector('.loading-message');
  const widgetNames = [
    'About',
    'Calculator',
    'Digital Footprint',
    'Task Manager',
    'Financial Markets',
    'Lottery History',
    'Repository Search',
    'Community Bookmarks',
  ];

  function updateMessage() {
    widgetLoadingMessage.textContent = widgetNames[currentIndex];
    currentIndex = (currentIndex + 1) % widgetNames.length;
  }

  updateMessage();
  const interval = setInterval(updateMessage, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
}
