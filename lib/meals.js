import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Fetching meals...");
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(id) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(id);
}