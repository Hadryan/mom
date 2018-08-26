import { all, fork } from 'redux-saga/effects';

import signIn from './signin';
import signOut from './signout';

export default function* () {
  yield all([
    fork(signIn),
    fork(signOut),
  ]);
}
