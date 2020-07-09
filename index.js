const SPEED_MULTIPLIER = 16;

if (window.navigator.userAgent.includes('Linux')) {
  const duplicatedWheelEvents = new Set();

  window.addEventListener('wheel', event => {
    if (duplicatedWheelEvents.has(event)) {
      duplicatedWheelEvents.delete(event);

      return;
    }

    if (event.target.tagName !== 'CANVAS') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const duplicatedEvent = new WheelEvent('wheel', {
      altKey: event.altKey,
      bubbles: event.bubbles,
      button: event.button,
      buttons: event.buttons,
      cancelBubble: event.cancelBubble,
      cancelable: event.cancelable,
      clientX: event.clientX,
      clientY: event.clientY,
      composed: event.composed,
      ctrlKey: event.ctrlKey,
      currentTarget: event.currentTarget,
      defaultPrevented: event.defaultPrevented,
      deltaMode: event.deltaMode,
      deltaX: event.deltaX * SPEED_MULTIPLIER,
      deltaY: event.deltaY * SPEED_MULTIPLIER,
      deltaZ: event.deltaZ * SPEED_MULTIPLIER,
      detail: event.detail
    });

    duplicatedWheelEvents.add(duplicatedEvent);
    event.target.dispatchEvent(duplicatedEvent);
  }, { capture: true });
}
