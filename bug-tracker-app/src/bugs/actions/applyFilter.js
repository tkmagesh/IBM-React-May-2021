function applyFilter(filterBugs){
    return {
        type : 'APPLY_FILTER',
        payload : filterBugs
    }
}

export default applyFilter;