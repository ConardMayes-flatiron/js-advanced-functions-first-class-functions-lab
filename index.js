// Code your solution in this file!


const returnFirstTwoDrivers = (drivers=[]) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers=[]) => drivers.slice(-2);

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

const createFareMultiplier = num => {
    return function(fare){
        return fare*num;
    }
}

function fareDoubler(fare) { 
    return createFareMultiplier(2)(fare);

}


function fareTripler(fare) { 
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driverList, option){
    return option(driverList);
}
done();