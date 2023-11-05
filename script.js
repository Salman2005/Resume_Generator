function addNewSField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('sField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("s")
    let sAddButtonOb = document.getElementById("sAddButton")

    weOb.insertBefore(newNode, sAddButtonOb)
}

function addNewLField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('lField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("l")
    let lAddButtonOb = document.getElementById("lAddButton")

    weOb.insertBefore(newNode, lAddButtonOb)
}

function addNewWField(){
    // console.log("test function");

    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3)
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")

    aqOb.insertBefore(newNode, aqAddButtonOb)
}
 
// generate Cv

function generateCv(){
    // console.log("check function");
    let nameFiled = document.getElementById('nameField').value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = nameFiled;

    // ----//

    let nameFiled1 = document.getElementById('nameField').value;
    let nameT2 = document.getElementById("nameT2");
    nameT2.innerHTML = nameFiled1;

    let contactField = document.getElementById('contactField').value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = contactField;

    let addressField = document.getElementById('addressField').value;
    let addressT = document.getElementById('addressT')
    addressT.innerHTML = addressField

    let fbField = document.getElementById('fbField').value
    let fbT = document.getElementById("fbT")
    fbT.innerHTML = fbField

    let instaField = document.getElementById('instaField').value
    let instaT = document.getElementById('instaT')
    instaT.innerHTML = instaField

    let linkedFiled = document.getElementById('linkedField').value;
    let linkT = document.getElementById('linkT')
    linkT.innerHTML = linkedFiled

    let cField = document.getElementById('cField').value;
    let cT = document.getElementById('cT')
    cT.innerHTML = cField

    // language
    let lang = document.getElementsByClassName('lField')
    let str4 = "";
    for (let e of lang){
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById('lT').innerHTML = str4;
    
    // skill
    let skill = document.getElementsByClassName('sField')
    let str3 = "";
    for (let e of skill){
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById('sT').innerHTML = str3;

    // we
    let wes = document.getElementsByClassName('weField')
    let str = "";
    for (let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    // aq
    let aqs = document.getElementsByClassName('eqField')
    let str1 = "";
    for (let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML = str1;

    
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-templete").style.display = "block";
}

function printCv(){
    window.print();
}