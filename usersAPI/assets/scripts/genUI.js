
// part2Section.classList.add('hidden');

let xmlEl = document.getElementById("xmltext");
xmlEl.textContent = `<req>
    <surname>Иванов</surname>
    <name>Иван</name>
    <patronymic>Иванович</patronymic>
    <birthdate>01.01.1990</birthdate>
    <birthplace>Москва</birthplace>
    <phone>8 926 766 48 48</phone>
</req>`;

let jsonEl = document.getElementById("jsontext");

let jsonBroken = `{
    "surname": ""Иванов""
    "name"": ""Иван"
    "patronymic"": ""Иванович"
    "birthdate"": ""01.01.1990"
    "birthplace"": ""Москва"
    "phone"": ""8 926 766 48 48"
}`;

let jsonFixed = `{
    "surname":"Иванов",
    "name":"Иван",
    "patronymic":"Иванович",
    "birthdate":"01.01.1990",
    "birthplace":"Москва",
    "phone":"8 926 766 48 48"
}`;
jsonEl.textContent = jsonBroken;



let jsonfixBtn = document.getElementById('jsonfix');
jsonfixBtn.addEventListener('click', function() {
    jsonEl.textContent = jsonFixed;
    Prism.highlightElement(jsonEl);
    jsonfixBtn.style.display = 'none';
    })


let part2Btn = document.getElementById('part2btn');
let part1Section = document.getElementById('part1');
let part2Section = document.getElementById('part2');
console.log(part1Section);
part2Btn.addEventListener('click', function() {
        part1Section.classList.add('hidden');
        part2Section.classList.remove('hidden');
    })
