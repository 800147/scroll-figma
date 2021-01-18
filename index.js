(() => {
  const FONT_SIZE = 16;
  const DELTA_X_MULTIPLIER = FONT_SIZE * 3;
  const DELTA_Y_MULTIPLIER = FONT_SIZE;
  const DELTA_Z_MULTIPLIER = FONT_SIZE;

  const onWheel = event => {
    if (event.deltaMode !== WheelEvent.DOM_DELTA_LINE) {
      return;
    }

    if (event.target.tagName !== 'CANVAS') {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const modifiedEvent = new WheelEvent('wheel', {
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
      detail: event.detail,
      explicitOriginalTarget: event.explicitOriginalTarget,
      layerX: event.layerX,
      layerY: event.layerY,
      metaKey: event.metaKey,
      movementX: event.movementX,
      movementY: event.movementY,
      mozInputSource: event.mozInputSource,
      mozPressure: event.mozPressure,
      offsetX: event.offsetX,
      offsetY: event.offsetY,
      originalTarget: event.originalTarget,
      pageX: event.pageX,
      pageY: event.pageY,
      rangeOffset: event.rangeOffset,
      rangeParent: event.rangeParent,
      region: event.region,
      relatedTarget: event.relatedTarget,
      returnValue: event.returnValue,
      screenX: event.screenX,
      screenY: event.screenY,
      shiftKey: event.shiftKey,
      srcElement: event.srcElement,
      target: event.target,
      timeStamp: event.timeStamp,
      view: event.view,
      which: event.which,
      x: event.x,
      y: event.y,

      deltaMode: WheelEvent.DOM_DELTA_PIXEL,
      deltaX: event.deltaX * DELTA_X_MULTIPLIER,
      deltaY: event.deltaY * DELTA_Y_MULTIPLIER,
      deltaZ: event.deltaZ * DELTA_Z_MULTIPLIER
    });

    event.target.dispatchEvent(modifiedEvent);
  };

  window.addEventListener('wheel', onWheel, { capture: true, passive: false });
})();
