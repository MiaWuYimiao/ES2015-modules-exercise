const choice = (items) => {
    const idxRandom = Math.floor(Math.random() * items.length);
    return items[idxRandom];
}

function remove(items, item) {
    let idx = items.findIndex(i => i === item);
    if(idx >= 0) {
        var removed =  items.splice(idx, 1);
        return removed;
    } else {
        return undefined;
    }
}

export {choice, remove};