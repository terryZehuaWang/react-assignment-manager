import { ITEM_TYPE, SEMESTERS_KEY } from "./constants";


export function handleGetItemType(parentSemester, parentCourse) {
    let itemType;
    if (parentSemester == undefined && parentCourse == undefined)
        itemType = ITEM_TYPE.SEMESTER;
    else if (parentCourse == undefined)
        itemType = ITEM_TYPE.COURSE;
    else
        itemType = ITEM_TYPE.ASSIGNMENT;
    return itemType;
}

export function handleGetSlug(str_) {
    return encodeURIComponent(str_
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"));
}


export function handleMakeIdSlugToken(id, slug) {
    return `${id}~${slug}`;
}

export function handleGetIdFromToken(token) {
    if (token === undefined) {
        return token;
    }
    return token.split("~")[0];
}

export function handleGetItemsIdFromKey(key) {
    const itemsSaved = localStorage.getItem(key);
    const items = itemsSaved ? JSON.parse(itemsSaved) : [];
    return items;
}

export function handleGetorGenCoursesKey(parentSemesterId) {
    return `sem-${parentSemesterId}-courses`;
}
export function handleGetorGenAmentsKey(parentSemesterId, parentCourseId) {
    return `sem-${parentSemesterId}-course-${parentCourseId}-assignments`;
}


export function handleDeleteAllChildren(item, parentSemesterId) {
    const itemType = item.itemType;
    if (itemType == ITEM_TYPE.ASSIGNMENT) {
        return;
    }
    if (itemType === ITEM_TYPE.SEMESTER)
        handleDeleteAllKeysStartWith(`sem-${item.id}-`);
    if (itemType === ITEM_TYPE.COURSE) {
        localStorage.removeItem(`${`sem-${parentSemesterId}-course-${item.id}-assignments`}`);
    }
}
export function handleDeleteAllKeysStartWith(keyStartWith) {
    Object.keys(localStorage).filter(k => k.startsWith(keyStartWith)).forEach(k => localStorage.removeItem(k));
}


/*
`sem-${parentSemesterId}-courses`
export function handleGetItemDirectChildIds(parentId, itemType) {
    let ChildIds = [];
    for 
    return ChildIds;
}

export function GetDirectChildIdsFromIdsList(parentIds) {

}

export function 
*/

export function handlePrintAllKeys() {
    Object.keys(localStorage).forEach(k => console.log(k));;
}




