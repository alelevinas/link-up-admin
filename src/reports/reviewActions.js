import { CREATE } from 'admin-on-rest';

export const REPORTS_REJECT_USER = 'REPORTS_REJECT_USER';

export const reviewReject = (id, data, basePath) => ({
	type: REPORTS_REJECT_USER,
	payload: { id, data: { ...data, status: 'accepted' }, basePath },
    meta: { resource: 'users/'+id+'/disable', fetch: CREATE, cancelPrevious: false },
});