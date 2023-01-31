// "6.1.0", "5.5.1", "5.1.0", "4.9.0", "4.22.0", "4.21.0"
var arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function hierarchySort(argsArr, argsKey) {
    return argsArr.sort((a, b) => gsiSorter(a[argsKey], b[argsKey]))
}

function gsiSorter(orderID_1, orderID_2) {
    if (orderID_1.includes(".")) {
        fillArr1(orderID_1.split("."));
    } else {
        orderID_1 = orderID_1 + ".0";
        fillArr1(orderID_1.split("."));
    }

    if (orderID_2.includes(".")) {
        fillArr2(orderID_2.split("."));
    } else {
        orderID_2 = orderID_2 + ".0";
        fillArr2(orderID_2.split("."));
    }

    // console.log(subtract(arr1, arr2))
    return subtract(arr1, arr2);
}

function fillArr1(filler) {
    filler.forEach((element, i) => {
        arr1[i] = Number(element)
    });
    // console.log(arr1)
}

function fillArr2(filler) {
    filler.forEach((element, i) => {
        arr2[i] = Number(element)
    });
    // console.log(arr2)
}

function subtract(arr1, arr2) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    result.forEach((element, i) => {
        result[i] = arr1[i] - arr2[i];
    });
    // console.log("Result")
    // console.log(result)

    // let flag = 0;
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        if (element < 0) {
            // console.log("Second is bigger");
            return -1;
        } else if (element > 0) {
            // console.log("First is bigger")
            return 1
        }
    }
}

// hierarchySort(myArray, "processID");


module.exports = hierarchySort;