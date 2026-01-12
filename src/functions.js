import { ITEM_TYPE, SEMESTERS_KEY } from "./constants";
import Assignment from "./pages/Assignments";

export function handleGetItemType(parentSemesterToken, parentCourseToken) {
    let itemType;
    if (parentSemesterToken == undefined && parentCourseToken == undefined)
        itemType = ITEM_TYPE.SEMESTER;
    else if (parentCourseToken == undefined)
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
    return token.split("~")[0];
}

export function handleGetItemsIdFromKey(key) {
    const itemsSaved = localStorage.getItem(key);
    const items = itemsSaved ? JSON.parse(itemsSaved) : [];
    return items;
}
/*
export function handleFindSemesterIdFromSlug(semesterSlug) {
    const semesters = handleGetItemsIdFromKey(SEMESTERS_KEY);
    const semester = semesters.find(s => s.slugName === semesterSlug);
    const semesterId = semester?.id;
    return semesterId;
}

export function handleFindCourseIdFromSlug(coursesKey, courseSlug) {
    const courses = handleGetItemsIdFromKey(coursesKey);
    const course = courses.find(c => c.slugName === courseSlug);
    const courseId = course?.id;
    return courseId;
}
*/
//pass courseSlug as null if items is a list of assignment
/*
export function handleGenItemsKey(semesterSlug, courseSlug) {
    const itemType = handleGetItemType(semesterSlug, courseSlug);

    if ((itemType) === ITEM_TYPE.SEMESTER) {
        return SEMESTERS_KEY;
    }
    const semesterId = handleFindSemesterIdFromSlug(semesterSlug);
    const coursesKey = `sem-${semesterId}-courses`;
    if (itemType === ITEM_TYPE.COURSE) {
        return coursesKey;
    }
    //itemType === ITEM_TYPE.ASSIGNMENT
    const courseId = handleFindCourseIdFromSlug(coursesKey, courseSlug);
    const assignmentsKey = `sem-${semesterId}-course-${courseId}-assignments`;
    return assignmentsKey;
}
    */


export function handlePrintAllKeys() {
    Object.keys(localStorage).forEach(k => console.log(k));;
}






/*
export function clearItems(strEnding) {
    Object.keys(localStorage).filter(k => k.endsWith("strEnding")).forEach(k => localStorage.removeItem(k));
}
    */
