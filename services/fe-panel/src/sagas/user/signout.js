import { takeLatest } from 'redux-saga/effects';

import { DO_SIGNOUT } from 'symbols/user';
import { logout as logoutService } from 'core/services/auth'
import { addDefaultHeaders } from 'config';
import { getSocket } from 'globals/socket';

function* watcher() {
  yield takeLatest(DO_SIGNOUT, function* () {
    try {
      yield logoutService();
    } catch (e) {
    }

    addDefaultHeaders({
      Authorization: null
    });

    localStorage.clear();

    getSocket()
      .logout()
  });
}

export default watcher;
