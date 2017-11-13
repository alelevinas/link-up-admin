import { put, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import {
    REVIEW_APPROVE_SUCCESS,
    REVIEW_APPROVE_FAILURE,
    REVIEW_REJECT_SUCCESS,
    REVIEW_REJECT_FAILURE,
} from './reviewActions';
import {
    FILTER_USERS_REPORTS
} from '../usersReports/reviewActions';
import {
    REPORTS_REJECT_USER
} from '../reports/reviewActions';

export default function* reviewSaga() {
    yield [
        takeEvery(REVIEW_APPROVE_SUCCESS, function* () {
            yield put(showNotification('Usuario correctamente habilitado!'));
            yield put(push('/'));
            yield put(push('/users'));
        }),
        takeEvery(FILTER_USERS_REPORTS, function* () {
            yield put(showNotification('Anda el refresh wacho???'));
            yield put(push('/'));
            yield put(push('./usersReports'));
        }),
        takeEvery(REVIEW_APPROVE_FAILURE, function* ({ error }) {
            yield put(showNotification('Error habilitando usuario!', 'warning'));
            console.error(error);
        }),
        takeEvery(REVIEW_REJECT_SUCCESS, function* () {
            yield put(showNotification('Usuario correctamente deshabilitado!'));
            yield put(push('/'));
            yield put(push('./users'));
        }),
        takeEvery(REVIEW_REJECT_FAILURE, function* ({ error }) {
            yield put(showNotification('Error deshabilitando usuario!', 'warning'));
            console.error(error);
        }),
        takeEvery(REPORTS_REJECT_USER, function* ({ error }) {
            yield put(showNotification('Usuario correctamente deshabilitado!'));
            yield put(push('/'));
            yield put(push('./reports'));
            window.location.reload();
        }),
    ];
}