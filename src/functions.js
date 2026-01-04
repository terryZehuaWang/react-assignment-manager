import { ITEM_TYPE } from "./constants";

export function handleGetItemType(semester, course) {
    let itemType;
    if (semester == null && course == null)
        itemType = ITEM_TYPE.SEMESTER;
    else if (course == null)
        itemType = ITEM_TYPE.COURSE;
    else
        itemType = ITEM_TYPE.ASSIGNMENT;
    return itemType;
}

export function convertToURI(str_) {
    return encodeURIComponent(str_
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"));
}
