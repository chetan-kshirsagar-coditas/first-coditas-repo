    // function add(num1, num2) {
    // let largeNumStr;
    // let smallNumStr;
    // let addition = "";
    // if(num1.toString().length > num2.toString().lenth){
    //     largeNumStr = num1.toString();
    //     smallNumStr = num2.toString();
    // }else{
    //     largeNumStr = num2.toString();
    //     smallNumStr = num1.toString();
    // }
    // addition = largeNumStr.slice(0,largeNumStr.length - smallNumStr.length);
    // for(let i = (largeNumStr.length - smallNumStr.length); i < largeNumStr.length; i++){
    //         let tempAdd = Number(largeNumStr.charAt(i)) + Number(smallNumStr.charAt((largeNumStr.length - smallNumStr.length - i)));
    //         addition = addition + tempAdd.toString();
    // }
    // console.log(addition);
    // }
    // add(156,5);

    function onlyOne(...arr) {
        let isFirstTrue = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == true){
                if(isFirstTrue){
                    return false;
                }else{
                    isFirstTrue = true;
                }
            }
        }
        return true;
}