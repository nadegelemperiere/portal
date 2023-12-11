/* -------------------------------------------------------
# Copyright (c) [2022] Nadege Lemperiere
# All rights reserved
# -------------------------------------------------------
# Technologies provider
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2022
# Latest revision: 02 february 2022
# -------------------------------------------------------*/

/* React includes */
import React, { useEffect, useState, useMemo } from 'react';

/* Website includes */
import logMessage from '../../utils/logging';

/* Local includes */
import TechnologiesContext from './Context';
import { initializeProvider, resetFilters, updateSelected, sortSelected, searchSelected } from './Utils';

function Provider(props) {

    /* --------- Gather inputs --------- */
    const { appConfig, children, persistKey = 'technologies' } = props;
    const { technologies } = appConfig || {};
    const componentName = 'TechnologiesProvider';

    /* ----- Create provider state ----- */
    const colorPalette = ['#1cade4', '#58b6c0', '#75bda7', '#7a8c8e', '#84acb6', '#6793cd', '#6b9f25'];
    const initial = initializeProvider(technologies, colorPalette);

    const savedState = JSON.parse(localStorage.getItem(persistKey));
    const [technologiesFilters, dispatch] = useState({
        visible: initial.visible,
        filters: initial.filters,
        certified: initial.certified,
        sort: initial.sorting[0],
        colors: initial.colors,
        categories: initial.categories,
        status: initial.status,
        sortingOptions: initial.sorting,
        selected: initial.selected,
        search: '',
        ...savedState,
    });

    const memorizedValue = useMemo(() => ({
        /* eslint-disable padded-blocks, brace-style */
        resetTechnologies(status) {

            logMessage(componentName, 'resetTechnologies --- BEGIN');
            const localFilters = resetFilters(status, technologiesFilters.categories);
            let localSelected = technologies;
            localSelected = updateSelected(localSelected, localFilters);
            localSelected = searchSelected(localSelected, '');
            localSelected = sortSelected(localSelected, technologiesFilters.sort);
            dispatch({ ...technologiesFilters, filters: localFilters, selected: localSelected, search: '' });

            logMessage(componentName, 'resetTechnologies --- END');

        },
        toggleTechnology(technology, newValue = null) {

            logMessage(componentName, 'toggleTechnology --- BEGIN');

            const localStatus = {};
            for (let i = 0; i < technologies.length; i += 1) {
                localStatus[technologies[i].name] = false;
            }
            localStatus[technology] =
                (newValue !== null ? newValue : !(technologiesFilters.status[technology]));
            dispatch({ ...technologiesFilters, status: localStatus });

            logMessage(componentName, 'toggleTechnology --- END');

        },
        sortTechnologies(key) {

            logMessage(componentName, 'sortTechnologies --- BEGIN');

            let order = 1;
            for (let i = 0; i < initial.sorting.length; i += 1) {
                if (initial.sorting[i].key === key) { order = initial.sorting[i].order; }
            }
            let localSelected = technologies;
            const localSorting = { key, order };
            localSelected = updateSelected(localSelected, technologiesFilters.filters);
            localSelected = searchSelected(localSelected, technologiesFilters.search);
            localSelected = sortSelected(localSelected, localSorting);
            dispatch({ ...technologiesFilters, sort: localSorting, selected: localSelected });

            logMessage(componentName, 'sortTechnologies --- END');

        },
        toggleFilters(category, newValue = null) {

            logMessage(componentName, 'toggleFilters --- BEGIN');

            const localVisible = technologiesFilters.visible;
            localVisible[category] = (newValue !== null ? newValue : !(localVisible[category]));
            dispatch({ ...technologiesFilters, visible: localVisible });

            logMessage(componentName, 'toggleFilters --- END');

        },
        selectCategory(category, newValue = null) {

            logMessage(componentName, 'selectCategory --- BEGIN');

            const localFilters = technologiesFilters.filters;
            if (newValue !== null) { localFilters[category] = newValue; }
            else if (localFilters[category] === 'unchecked') { localFilters[category] = 'checked'; }
            else if (localFilters[category] === 'checked') { localFilters[category] = 'unchecked'; }
            else if (localFilters[category] === 'indeterminated') { localFilters[category] = 'checked'; }

            for (let i = 0; i < initial.categories[category].subcategories.length; i += 1) {
                const index = initial.categories[category].subcategories[i];
                localFilters[index] = localFilters[category];
            }
            let localSelected = technologies;
            localSelected = updateSelected(localSelected, localFilters);
            localSelected = searchSelected(localSelected, technologiesFilters.search);
            localSelected = sortSelected(localSelected, technologiesFilters.sort);
            dispatch(
                { ...technologiesFilters, filters: localFilters, selected: localSelected }
            );

            logMessage(componentName, 'selectCategory --- END');

        },
        selectName(name) {

            logMessage(componentName, 'selectName --- BEGIN');

            let localSelected = technologies;
            localSelected = searchSelected(localSelected, name);
            localSelected = updateSelected(localSelected, technologiesFilters.filters);
            localSelected = sortSelected(localSelected, technologiesFilters.sort);
            dispatch({ ...technologiesFilters, selected: localSelected, search: name });

            logMessage(componentName, 'selectName --- END');

        },
        selectSubcategory(category, subcategory, newValue = null) {

            logMessage(componentName, 'selectSubcategory --- BEGIN');

            const localFilters = technologiesFilters.filters;
            if (newValue !== null) { localFilters[subcategory] = newValue; }
            else if (localFilters[subcategory] === 'unchecked') { localFilters[subcategory] = 'checked'; }
            else if (localFilters[subcategory] === 'checked') { localFilters[subcategory] = 'unchecked'; }

            let numCheck = 0;
            let numUncheck = 0;

            for (let j = 0; j < initial.categories[category].subcategories.length; j += 1) {
                if (localFilters[initial.categories[category].subcategories[j]] === 'unchecked') { numUncheck += 1; }
                if (localFilters[initial.categories[category].subcategories[j]] === 'checked') { numCheck += 1; }
            }

            if (numCheck === 0) { localFilters[category] = 'unchecked'; }
            else if (numUncheck === 0) { localFilters[category] = 'checked'; }
            else { localFilters[category] = 'indeterminated'; }

            let localSelected = technologies;

            localSelected = updateSelected(localSelected, localFilters);
            localSelected = searchSelected(localSelected, technologiesFilters.search);
            localSelected = sortSelected(localSelected, technologiesFilters.sort);

            dispatch(
                { ...technologiesFilters, filters: localFilters, selected: localSelected }
            );

            logMessage(componentName, 'selectSubcategory --- END');

        },
        /* eslint-enable padded-blocks, brace-style */
        filtersVisible: technologiesFilters.visible,
        technologySortOptions: technologiesFilters.sortingOptions,
        technologySort: technologiesFilters.sort,
        technologyFilters: technologiesFilters.filters,
        technologyColors: technologiesFilters.colors,
        technologyCategories: technologiesFilters.categories,
        technologySelection: technologiesFilters.selected,
        technologyStatus: technologiesFilters.status,
        technologySearch: technologiesFilters.search,
        technologyCertified: technologiesFilters.certified,
    }), [technologiesFilters, initial.categories, initial.sorting, technologies]);

    /* Manage technologies status update */
    useEffect(() => {

        /* eslint-disable padded-blocks, brace-style */
        logMessage(componentName, 'useEffect[technologiesFilters, persistKey] --- BEGIN');
        localStorage.setItem(persistKey, JSON.stringify(technologiesFilters));
        logMessage(componentName, 'useEffect[technologiesFilters, persistKey] --- END');
        /* eslint-enable padded-blocks, brace-style */

    }, [technologiesFilters, persistKey]);

    /* ----------- Define HTML --------- */
    return (
        <TechnologiesContext.Provider value={memorizedValue}>
            {children}
        </TechnologiesContext.Provider>
    );

}

export default Provider;
