const getSleepHours = day => {
  if(day === 'monday') {
        return 8;
    }
  else if(day === 'tuesday') {
    return 7;
  }
  else if(day === 'wednesday') {
    return 6;
  }
  else if(day === 'thursday') {
    return 8;
  }
  else if(day === 'friday') {
    return 7;
  }
  else if(day === 'saturday') {
    return 6;
  }
  else if(day === 'sunday') {
    return 8;
  }
  else {
    return 'Error!'
  }
};

const getActualSleepHours = () =>
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();


    if(actualSleepHours === idealSleepHours) {

      console.log("Perfect amound of sleep");
    }

    else if(actualSleepHours > idealSleepHours){

      console.log("You got more sleep than needed");
    }

    else if(actualSleepHours < idealSleepHours) {

      console.log("You should get some rest");
    }
    else {
        console.log('Error!');
    }
};



