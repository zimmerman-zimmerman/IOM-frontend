export const TOGGLE_MODAL_REQUEST = 'TOGGLE_MODAL_REQUEST';
export const TOGGLE_MODAL_SUCCESS = 'TOGGLE_MODAL_SUCCESS';

export function toggleModalRequest(component) {
    return {
        type: TOGGLE_MODAL_REQUEST,
        component,
    }
}

export function toggleModalSuccess(component) {
    return {
        type: TOGGLE_MODAL_SUCCESS,
        component,
    }
}

export const UPDATE_BREADCRUMBS_REQUEST = 'UPDATE_BREADCRUMBS_REQUEST';
export const UPDATE_BREADCRUMBS_SUCCESS = 'UPDATE_BREADCRUMBS_SUCCESS';

export function updateBreadcrumbsRequest(breadcrumbItems) {
    return {
        type: UPDATE_BREADCRUMBS_REQUEST,
        breadcrumbItems,
    }
}

export function updateBreadcrumbsSuccess(breadcrumbItems) {
    return {
        type: UPDATE_BREADCRUMBS_SUCCESS,
        breadcrumbItems,
    }
}
