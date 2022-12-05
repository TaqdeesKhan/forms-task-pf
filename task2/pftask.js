const form = document.getElementById("form")
const startDate = document.getElementById("sdate");
const endDate = document.getElementById("edate");


const Button = document.getElementById("butn");



Button.addEventListener('click', (e)=> {
    e.preventDefault()
    
    if(startDate.value > endDate.value)
    alert("eror")


    let formobject= {

        name : document.getElementById('name').value,
        DOB :  document.getElementById('dob').value,
        Startdate : document.getElementById('sdate').value,
        Enddate :  document.getElementById('edate').value,
        File : document.getElementById('file').value,
    }

    localStorage.setItem('information', JSON.stringify(formobject));

})