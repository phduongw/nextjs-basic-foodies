import React from 'react';

import classes from './loading.module.css'

const MealLoadingPage = () => {
    return (
        <p className={classes.loading}>Fetching meals.....</p>
    );
};

export default MealLoadingPage;