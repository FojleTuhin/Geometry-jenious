function triangleAreaCalculate(){
    const triangleBaseInput= document.getElementById("triangle-Base-Input");
    const triangleBaseValue= triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);


    const triangleHightInput = document.getElementById('triangle-hight-Input');
    const triangleHightValue = triangleHightInput.value;
    const hight= parseFloat(triangleHightValue);

    const triangleArea= 0.5 *base *hight;

    console.log(triangleArea);
    const triangleAreaOutput= document.getElementById('triangle-area');
    triangleAreaOutput.innerText=triangleArea;
}