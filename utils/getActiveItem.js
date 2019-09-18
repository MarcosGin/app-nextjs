function getActiveItem(items = [], searching = "") {
    let active = false;
    const mapActiveItem = (items = [], searching = "") => {
        items.map(item => {
            if (item.link === searching) {
                active = item;
            }

            if (item.children && item.children.length > 0) {
                mapActiveItem(item.children, searching);
            }
        });
    };
    mapActiveItem(items, searching);
    return active;
}

export default getActiveItem;