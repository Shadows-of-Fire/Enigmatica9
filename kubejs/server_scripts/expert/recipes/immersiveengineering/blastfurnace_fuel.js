ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blastfurnace_fuel/';
    const recipes = [
        {
            input: { tag: 'forge:nuggets/horizonite' },
            time: 64 * 20,
            id: `${id_prefix}horizonite_nugget`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:blast_furnace_fuel';
        event.custom(recipe).id(recipe.id);
    });
});