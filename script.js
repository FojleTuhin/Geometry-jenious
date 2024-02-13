function triangleAreaCalculate(){
    const triangleBaseInput= document.getElementById("triangle-Base-Input");
    const triangleBaseValue= triangleBaseInput.value;
    const base = parseFloat(triangleBaseValue);


    const triangleHightInput = document.getElementById('triangle-hight-Input');
    const triangleHightValue = triangleHightInput.value;
    const hight= parseFloat(triangleHightValue);

    const triangleArea= 0.5 *base *hight;

    const triangleAreaOutput= document.getElementById('triangle-area');
    triangleAreaOutput.innerText=triangleArea;
}


function rectangleAreaCalculate(){
    const rectangleWidthInput= document.getElementById('rectangle-width-input');
    const rectangleWidthValue= rectangleWidthInput.value;
    const width= parseFloat(rectangleWidthValue);

    const rectangleHightInput= document.getElementById('rectangle-length-input');
    const rectangleightValue=rectangleHightInput.value;
    const rectanglehight= parseFloat(rectangleightValue);

    const rectangleArea= width*rectanglehight;
    console.log(rectangleArea)

    const rectangleAreaOutput= document.getElementById('rectangle-area');
    rectangleAreaOutput=rectangleArea;
}