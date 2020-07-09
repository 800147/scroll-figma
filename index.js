if (window.navigator.userAgent.includes('Linux')) {
  const duplicatedWheelEvents = new Set();

  window.addEventListener('wheel', event => {
    if (duplicatedWheelEvents.has(event)) {
      duplicatedWheelEvents.delete(event);

      return;
    }

    for (let i = 0; i < 16; i++) {
      const duplicatedEvent = new event.constructor(event.type, event);
      duplicatedWheelEvents.add(duplicatedEvent);
      event.target.dispatchEvent(duplicatedEvent);
    }
  });
}
