import React from 'react';
import MadeGoal from './MadeGoal';
import MissGoal from './MissGoal';

const Goal = (isGoal) => {

    if (isGoal) {
        return <MadeGoal/>
    }
    else
    {
        return <MissGoal/>
    }
};

export default Goal;