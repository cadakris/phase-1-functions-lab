// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    if (num > 42) {
        return num - 42;
    } else if (num < 42) {
        return 42 - num;
    }
}

function distanceFromHqInFeet (num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet (start, end) {
    return Math.abs((end - start) * 264);
}

function calculatesFarePrice(start, end) {
    let n = distanceTravelledInFeet(start, end);
    if (n <= 400) {
        return 0;
    } else if (n > 400 && n < 2000) {
        return (n - 400) *.02;
    } else if (n > 2000 && n < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
} 