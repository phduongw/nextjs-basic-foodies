import React, {Suspense} from 'react';

import classes from './page.module.css';
import Link from "next/link";
import MealGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meals";
import MealLoadingPage from "@/app/meals/loading-out";

async function Meals() {
    const meals = await getMeals();

    return <MealGrid meals={meals} />
}

const MealsPage = () => {

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun</p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>
                        Share  Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;