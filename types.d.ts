import {Source} from 'tallbag';
import {Metadata} from 'shadow-callbag';

export default function fromPromise<T>(
  promise: Promise<T>,
): Source<T, Metadata>;
