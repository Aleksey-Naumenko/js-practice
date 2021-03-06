export function markFavorites(tree, favorites) {
    const isFavorite = favorites.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(child => markFavorites(child, favorites)),
    }
}