/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Technologies provider functions
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* Website includes */
import logMessage from '../../utils/logging';

const componentName = 'TechnologiesUtils';

/* eslint-disable padded-blocks, brace-style */
function resetFilters(status, categories) {

    logMessage(componentName, 'resetFilters --- BEGIN');

    const result = {};
    const array = Object.entries(categories);
    for (let i = 0; i < array.length; i += 1) {

        result[array[i][1].name] = status;
        for (let j = 0; j < array[i][1].subcategories.length; j += 1) {
            result[array[i][1].subcategories[j]] = status;
        }
    }

    logMessage(componentName, 'resetFilters --- END');
    return result;
}

function resetVisible(categories) {

    logMessage(componentName, 'resetVisible --- BEGIN');

    const array = Object.entries(categories);
    const result = { main: false };
    for (let i = 0; i < array.length; i += 1) {
        result[array[i][1].name] = false;
    }

    logMessage(componentName, 'resetVisible --- END');
    return result;
}

function updateSelected(selected, filters) {

    logMessage(componentName, 'updateSelected --- BEGIN');

    const result = [];
    for (let i = 0; i < selected.length; i += 1) {
        if (filters[selected[i].subcategory] === 'checked') {
            result.push(selected[i]);
        }
    }

    logMessage(componentName, 'updateSelected --- END');
    return result;
}

function searchSelected(selected, name) {

    logMessage(componentName, 'searchSelected --- BEGIN');

    const result = [];
    for (let i = 0; i < selected.length; i += 1) {
        if (selected[i].name.toLowerCase().indexOf(name.toLowerCase()) >= 0) {
            result.push(selected[i]);
        }
    }

    logMessage(componentName, 'searchSelected --- END');
    return result;
}

function sortSelected(list, sorting) {

    logMessage(componentName, 'sortSelected --- BEGIN');

    const result = list;
    result.sort((obj1, obj2) => {
        if (obj1[sorting.key] < obj2[sorting.key]) { return -1 * sorting.order; }
        if (obj2[sorting.key] < obj1[sorting.key]) { return 1 * sorting.order; }
        return 0;
    });

    logMessage(componentName, 'sortSelected --- END');
    return result;
}

function initializeProvider(technologies, palette) {

    logMessage(componentName, 'initializeProvider --- BEGIN');
    const result = {
        status: {},
        certified: [],
        filters: {},
        visible: {},
        selected: [],
        colors: {},
        categories: {},
        sorting: [],
    };
    let allCategories = [];

    result.sorting = [{ key: 'name', order: 1 }, { key: 'level', order: -1 }, { key: 'category', order: 1 }];

    function uniqueSorting(value, index, arr) {
        return index === arr.indexOf(value);
    }

    /* Initialize all technologies selection status to false */
    for (let i = 0; i < technologies.length; i += 1) {
        result.status[technologies[i].name] = false;
        if (technologies[i].certification.url !== '') {
            result.certified.push(technologies[i]);
        }
    }

    /* List all distinct categories and give a color to each of them */
    for (let i = 0; i < technologies.length; i += 1) {
        allCategories.push(technologies[i].category);
    }
    allCategories = allCategories.filter(uniqueSorting);

    for (let i = 0; i < allCategories.length; i += 1) {
        result.categories[allCategories[i]] = {
            name: allCategories[i],
            subcategories: [],
        };
    }

    for (let i = 0; i < technologies.length; i += 1) {
        result.categories[technologies[i].category].subcategories.push(technologies[i].subcategory);
    }
    for (let i = 0; i < allCategories.length; i += 1) {
        const index = allCategories[i];
        const list = result.categories[index].subcategories;
        result.categories[index].subcategories = list.filter(uniqueSorting);
    }

    for (let i = 0; i < allCategories.length; i += 1) {

        if (i < palette.length) { result.colors[allCategories[i]] = palette[i]; }
        else { result.colors[allCategories[i]] = '#000000'; }

    }

    result.visible = resetVisible(result.categories);
    result.filters = resetFilters('checked', result.categories);
    result.selected = sortSelected(technologies, result.sorting[0].key, result.sorting[0].order);

    logMessage(componentName, 'initializeProvider --- END');
    return result;

}
/* eslint-enable padded-blocks, brace-style */

export { initializeProvider, resetFilters, resetVisible,
    updateSelected, sortSelected, searchSelected };
