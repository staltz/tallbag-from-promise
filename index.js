import makeShadow from 'shadow-callbag';

const fromPromise = promise => (start, sink) => {
  if (start !== 0) return;
  let ended = false;
  const shadow = makeShadow('from-promise');
  const onfulfilled = val => {
    if (ended) return;
    shadow(1, val);
    sink(1, val);
    if (ended) return;
    sink(2);
  };
  const onrejected = err => {
    if (ended) return;
    sink(2, err);
  };
  promise.then(onfulfilled, onrejected);
  function talkback(t) {
    if (t === 2) ended = true;
  }
  sink(0, talkback, shadow);
};

export default fromPromise;
