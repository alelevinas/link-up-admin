import { CREATE } from 'admin-on-rest';
import { GET_LIST } from 'admin-on-rest';

export const FILTER_USERS_REPORTS = 'FILTER_USERS_REPORTS';

export const reviewApprove = (id, data, basePath) => ({
    type: FILTER_USERS_REPORTS,
    payload: { id, data: { ...data }, basePath },
    meta: { resource: 'usersReports', fetch: GET_LIST, cancelPrevious: false },
});