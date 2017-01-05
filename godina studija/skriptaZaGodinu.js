function getUrlVars(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var profesorPodaci = [
    {id: 0, name:"Pikula-Milenko", imeProfesora:"Миленко Пикула", tipProfesora:"Редовни професор", zvanje: "проф. др"},
    {id: 1, name: "Elez-Nebojsa", imeProfesora:"Небојша Елез", tipProfesora:"Редовни професор", zvanje: "проф. др"},
    {id: 2, name: "Drakulic-Darko", imeProfesora:"Дарко Дракулић", tipProfesora:"Редовни професор", zvanje: "доц. др"},
    {id: 3, name: "Vladicic-Vladimir", imeProfesora:"Владимир Владичић", tipProfesora:"Редовни професор", zvanje: "доц. др"},
    {id: 4, name: "Ilic-Georgijevic-Emil", imeProfesora:"Емил Илић-Георгијевић", tipProfesora:"Ванредни професор", zvanje: "доц. др"},
    {id: 5, name: "Lalovic-Ilija", imeProfesora:"Илија Лаловић", tipProfesora:"Ванредни професор", zvanje: "доц. др"},
    {id: 6, name: "Govedarica-Vidan", imeProfesora: "Видан Говедарица", tipProfesora:"Ванредни професор", zvanje: "проф. др"},
    {id: 7, name: "Jojic-Dusko", imeProfesora: "Душко Јојић", tipProfesora:"Ванредни професор", zvanje: "проф. др"}
];
var asistentPodaci = [
    {id:0, name:"Sljuka-Aljosa", imeProfesora:"Аљоша Шљука", tipProfesora: "Виши асистент"},
    {id:1, name:"Radovic-Jelena", imeProfesora:"Јелена Радовић", tipProfesora: "Асистент"},
    {id:2, name:"Citic-Marko", imeProfesora:"Марко Ћитић", tipProfesora: "Виши асистент"},
    {id:3, name:"Papaz-Ognjen", imeProfesora:"Огњен Папаз", tipProfesora: "Виши асистент"}
];

var listaPredmeta = [
    [// Semestar 1
        {//MR1-1
            sifra:"МР1-1", 	naziv:"Анализа 1", 			fond:"2+2", ECTS:"9", status:"обавезни",
            profesor: profesorPodaci[0], 					asistent: asistentPodaci[1],
            rokovi: "<a target='_blank'  href='http://www.ffuis.edu.ba/media/faculty/documents/2009/03/31/1kol_09.pdf'>1.Кол</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2010/09/28/Microsoft_Word_-_A1.April10.pdf'>Април 2010</a><br>"
            +"<a target='_blank'  href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/Jun1A1.doc'>Јун1/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/Jun2A1.pdf'>Jун2/2009</a><br>",
            program : "<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/MM1-1_Analiza_1.pdf'> Program Predmeta </a><br>",
            literatura:""
        },
        {//MR1-2
            sifra:"МР1-2", naziv:"	Увод у алгебру",	fond:"2+2", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[4], asistent: asistentPodaci[3],
            rokovi: "",program: "",literatura: "<a href='http://www.ffuis.edu.ba/media/faculty/documents/literatura1.doc'>Литература </a>"
        },
        {//MR1-3
            sifra:"МР1-3", naziv:"Механика", 			fond:"3+2", ECTS:"5", status:"обавезни",
            profesor: {id: -1, imeProfesora: "Зоран Љубоје", linkRef: "http://www.ffuis.edu.ba/faculty/teacher/8/"},
            asistent: {id: -1, imeProfesora:"Весна Милетић" , linkRef: "http://www.ffuis.edu.ba/faculty/teacher/8/"},
            rokovi: "",
            program: "",
            literatura:""
        },
        {//MR1-4
            sifra:"МР1-4", naziv:"Теорија скупова",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[1], asistent: asistentPodaci[3],
            rokovi: 	"<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/06/22/teorijaskupova_19062014.pdf'>јун-јул 1 (2014)</a><br>"
            + 	"<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/07/22/teorija_skupova_10072014.pdf'>јун-јул 2 (2014)</a><br>"
            + 	"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/08/26/teorija_skupova_26082014.pdf'>септембар 1 (2014)</a><br>"
            + 	"<a target ='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/09/16/teorija_skupova_16092014.pdf'>септембар 2 (2014)</a><br>",
            program: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/MM1-4_Teorija_skupova.pdf'> Plan </a>",
            literatura:"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/23/1TeorijaSkupovadijelovi.pdf'>теорија 1</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/23/TS-skripta-2013.pdf'>теорија 2</a><br>"
            + "<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/23/teorija_skupova_zbirka_zadataka.pdf'>збирка задатака</a><br>"
        },
        {//MR1-5
            sifra:"МР1-5", naziv:"Основи програмирања",fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2], asistent:asistentPodaci[0],
            rokovi:"",
            program: "",
            literatura: "<a target='_blank' href='https://drive.google.com/file/d/0B7HxUII5udHVbldtQnVJMWpPaU0/view?usp=sharing'>Скрипта</a><br>"
            +"<a target='_blank' href='https://drive.google.com/file/d/0B7HxUII5udHVVFoxdWpTNFItcEk/view?usp=sharing'>Књига</a><br>"
        }
    ],
    [//Semestar 2
        {//MR2-1
            sifra:"МР2-1",naziv:"Анализа 2", 	fond:"4+4", ECTS:"9", status:"обавезни",
            profesor: profesorPodaci[0],  asistent: asistentPodaci[1],
            rokovi:"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/04/13/Microsoft_Word_-_Document1.pdf'>1.кол/09</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/A2.2.kol2009.pdf'>2.кол/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/Analiza2._feb09.pdf'>Феб/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/analiza2.jan09_.pdf'>Јан/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/Microsoft_Word_-_Jun1A2.pdf'>Јун1/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/Jun2A2.pdf'>Јун2/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/SEPT1.A2.pdf'>Сеп1/2009</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2009/09/25/A2.sept2_.pdf'>Сеп2/2009</a>",
            program: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/MM2-1_Analiza_2.pdf'>План</a>",
            literatura:""
        },
        {//MR2-2
            sifra:"МР2-2", naziv:"Аналитичка геометрија",	fond:"3+2", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[3],  asistent: asistentPodaci[1],
            rokovi:"",
            program: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/MM2-2_Analiticka_geometrija.pdf'>План</a>",
            literatura: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/literatura2.doc'>Литература </a>"
        },
        {//MR2-3
            sifra:"МР2-3", naziv:"Алгоритми и структуре података", 	fond:"2+3", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[5],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura: "<a target='_blank' href='https://drive.google.com/drive/folders/0B7HxUII5udHVSl9aVWlPbFJiZ28?usp=sharing'>Google Disk</a>"
        },
        {//MR2-4
            sifra:"МР2-4", naziv:"Рачунарски практикум",	fond:"0+3", ECTS:"4", status:"обавезни",
            profesor: profesorPodaci[2],  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR2-5/1
            sifra:"МР2-5/1", naziv:"Теорија бројева",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: profesorPodaci[6],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR2-5/2
            sifra:"МР2-5/2", naziv:"Страни језик",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: "",  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        }
    ],
    [//Semestar 3
        {//MR3-1
            sifra:"МР3-1",naziv:"Анализа 3", 	fond:"4+3", ECTS:"8", status:"обавезни",
            profesor: "",  asistent:"",
            rokovi:  "<a target='_blank'  href='http://www.ffuis.edu.ba/media/faculty/documents/2014/06/21/analiza3_19062014.pdf'>јун-јул 1(2014)</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/08/28/analiza_3_28082014.pdf'>cептембар 1 (2014)</a><br>",
            program: "<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/_3.docx'> Program Predmeta </a>",
            literatura:
            "<a target='_blank' href='https://drive.google.com/file/d/0ByM1prKzrEhINXNRM21jX0NpYnc/view?usp=sharing'>Предавања 2014</a><br>"
            + "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIRWxLdlFpTmRPeW8'>Вјежбе 2014</a><br>"
        },
        {//MR3-2
            sifra:"МР3-2", naziv:"Линеарна алгебра 1",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[3],  asistent: asistentPodaci[1],
            rokovi:"",
            program: "<a  target='_blank' href='http://www.ffuis.edu.ba/media/faculty/plans/MM3-2_Linearna_algebra.pdf'> Program Predmeta </a>",
            literatura:"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/literatura1_2.doc'>Литература</a><br>"
            + "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhId25yTl82aEZBMWM'>Рјешени задаци</a><br>"
        },
        {//MR3-3
            sifra:"МР3-3", naziv:"Геометрија 1", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[7],  asistent:asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/lteratura4.doc'>Литература</a><br>"
        },
        {//MR3-4
            sifra:"МР3-4", naziv:"Комбинаторика",	fond:"3+2", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[6],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR3-5
            sifra:"МР3-5", naziv:"Објектно оријентисано програмирање",	fond:"2+3", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[5],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/02/ZimeZameZum.rar'>01. Увод - Зиме Заме Зум</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/02/Date.rar'>02. Увод у конструкцију класа - Датум</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/02/ComplexNumber.rar'>03. Оператори и полиморфизам - Комплексни бројеви</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/02/Strings.rar'>04. Кориштење класа - Стрингови</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/16/PointAndSphere.rar'>05. Вјежба - Тачке и сфере у 3 димензије</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/16/Student.rar'>06. Изузеци и низови - Студент</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/16/Shop.rar'>07. Вјежба - Артикли</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/12/14/DynamicArray.rar'>08. Шаблон класе - Динамични низ</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/12/14/main.rar'>09. Standard Template Library</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/16/OOP_2013-14.zip'>Вјежбе 2013./14.</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2015/10/19/2014-15.zip'>Вјежбе 2014./15.</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2016/11/02/OOP_2015.rar'>Вјежбе 2015./16.</a><br>"
        }
    ],
    [//Semestar 4
        {//MR4-1
            sifra:"МР4-1",naziv:"Анализа 4", 	fond:"4+3", ECTS:"8", status:"обавезни",
            profesor: profesorPodaci[1],  asistent: asistentPodaci[3],
            rokovi: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/06/21/analiza4_17022014.pdf'>други колоквијум (2014)</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/07/08/analiza_4_23062014.pdf'>јун-јул 1 (2014)</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/07/22/analiza_4_11072014.pdf'>јун-јул 2 (2014)</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/17/analiza_4_06102014.pdf'>октобар 1 (2014)</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/08/30/analiza_4_29082014.pdf'>септембар 1 (2014)</a><br>"
            +"<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/17/analiza_4_19092014.pdf'>септембар 2 (2014)</a><br>",
            program:"",
            literatura:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIV3ZmeGtBZ252eEU'>Вјежбе 2015</a><br>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIV1BQR3VlU1EzX28'>Рјешени задаци</a><br>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIeU1MQ1FxdmVrTkU'>Теорија</a><br>"

        },
        {//MR4-2
            sifra:"МР4-2", naziv:"Линеарна алгебра 2",	fond:"3+3", ECTS:"7", status:"обавезни",
            profesor: profesorPodaci[3],  asistent: asistentPodaci[1],
            rokovi:"",
            program:"",
            literatura:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIdm52amdLSUdEQ00'>Рјешени задаци</a><br>"
        },
        {//MR4-3
            sifra:"МР4-3", naziv:"Геометрија 2", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[7],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura: "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/lteratura4_.doc'>Литература</a><br>"
        },
        {//MR4-4
            sifra:"МР4-4", naziv:"Оперативни системи",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:  "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/30/FileInputOutput.rar'>2016. Датотеке</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/30/walkingfilesystem.rar'>2016. Дрво система датотека</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/04/StudentskaSluzba.rar'>2016. GUI - 1</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/04/studentskasluzba1.rar'>2016. GUI - 2</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/04/StudentskaSluzba2.rar'>2016. GUI - 3</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/23/studentskasluzba3.rar'>2016. GUI - 4</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2016/05/23/StudentskaSluzba4.rar'>2016. GUI - 5</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/03/23/calculator.rar'>GUI - 1. дио</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/03/23/Calculator_.rar'>GUI - 2. дио</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/04/20/todolists_1.rar'>GUI - ToDo листе 1</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/05/11/ToDoLists2.rar'>GUI - ToDo листе 2</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/05/11/ToDoLists3.rar'>Рад са датотекама - ToDo листе 3</a><br>"
            + "<a target='_blank' href='http://www.ffuis.edu.ba/media/faculty/documents/2015/03/30/File_system.rar'>Систем датотека 1</a><br>"

        },
        {//MR4-5/1
            sifra:"МР4-5/1", naziv:"Интернет програмирање",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR4-5/2
            sifra:"МР4-5/2", naziv:"Неједнакости",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor:  profesorPodaci[7],  asistent: asistentPodaci[3],
            rokovi:"",
            program:"",
            literatura:""
        }
    ],
    [//Semestar 5
        {//MR5-1
            sifra:"МР5-1",naziv:"Диференцијалне једначине", 	fond:"2+3", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[3],  asistent:asistentPodaci[1],
            rokovi:"",
            program:"",
            literatura: "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIZVpwX3puVDE1VTg'>Биљешке са предавања</a><br>"
            + "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIcVBkdVVHeE95THptQ0tIa3RKdlhVR2cwNmFV'>Бјежбе</a><br>"
        },
        {//MR5-2
            sifra:"МР5-2", naziv:"Топологија",	fond:"3+2", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[7],  asistent: asistentPodaci[3],
            rokovi:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIRHpWRkFGc0ZNS1k'> Рокови</a>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/07/22/topologija_09072014.pdf'>јун-јул 2 (2014)</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/17/topologija_07102014.pdf'>октобар 1 (2014)</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/23/topologija_21102014.pdf'>октобар 2 (2014)</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/08/28/topologija_27082014.pdf'>септембар 1 (2014)</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/17/topologija_17092014.pdf'>септембар 2 (2014)</a><br>",
            program:"",
            literatura: "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIME9ITl9FWVhHRjA'> Вјежбе </a><br>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIQTdCLUhsWUlta0k'> Теорија </a><br>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIVlFzczh1T3drQ3M'> Бјежбе комплет </a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/29/LaTeX1.pdf'>задаци за вјежбање 1 (са рјешењима)</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/11/07/topologija_2.pdf'>задаци за вјежбање 2</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/10/29/topologija_3.pdf'>задаци за вјежбање 3</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/11/05/topologija_4.pdf'>задаци за вјежбање 4</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/11/22/topologija_5.pdf'>задаци за вјежбање 5</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/11/12/topologija_6_.pdf'>задаци за вјежбање 6</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/11/22/topologija_7.pdf'>задаци за вјежбање 7</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/12/22/topologija_8.pdf'>задаци за вјежбање 8</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2014/12/22/topologija_9.pdf'>задаци за вјежбање 9</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2015/01/27/topologija_10__.pdf'>задаци за вјежбање 10</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2015/01/27/topologija_11.pdf'>задаци за вјежбање 11</a><br>"
            +"<a href='http://www.ffuis.edu.ba/media/faculty/documents/2015/01/27/topologija_12.pdf'>задаци за вјежбање 12</a><br>"
        },
        {//MR5-3
            sifra:"МР5-3", naziv:"Комплексна анализа", 	fond:"3+2", ECTS:"6", status:"обавезни",
            profesor: profesorPodaci[3],  asistent: asistentPodaci[3],
            rokovi:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIT21qbC1Nc21YNzA'>Рокови</a>",
            program:"",
            literatura: "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIRjlBclJQSFh3eDZRVHJwSmo5cTlWQUZMWEpj'>Теорија</a>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIUHQxeXV2ZDVnNFk'>Вјежбе</a>"
        },
        {//MR5-4
            sifra:"МР5-4", naziv:"Педагогија и психологија",	fond:"2+0", ECTS:"2", status:"обавезни",
            profesor: {id:-1, imeProfesora: "Наташа Костић", linkRef: "http://www.http://ffuis.edu.ba/faculty/teacher/8/"},  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR5-5
            sifra:"МР5-5", naziv:"Базе података",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[5],  asistent:asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR5-6
            sifra:"МР5-6", naziv:"Инфрмациони системи",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        }
    ],
    [//Semestar 6
        {//MR6-1
            sifra:"МР6-1",naziv:"Нумеричке методе", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[3],  asistent:{id:-1, imeProfesora: "Наташа Павловић"},
            rokovi:"",
            program:"",
            literatura:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIQVlhZ3RXQm5xdUU'> Теорија </a>"
        },
        {//MR6-2
            sifra:"МР6-2", naziv:"Реална анализа",	fond:"3+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[1],  asistent: asistentPodaci[3],
            rokovi:"",
            program:"",
            literatura: "<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIUDVNXzdJT3l5Tm8'> Материјали </a>"
        },
        {//MR6-3
            sifra:"МР6-3", naziv:"Парцијалне диференцијалне једначине", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[4],  asistent: {id: -1, imeProfesora:"Весна Милетић", linkRef: "http://www.ffuis.edu.ba/faculty/teacher/8/"},
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR6-4
            sifra:"МР6-4", naziv:"Теорија графова",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[6],  asistent: asistentPodaci[2],
            rokovi:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIWnVsVkcxUkFsM2s'>Рокови</a>",
            program:"",
            literatura:"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIQnFIRERwTTVEc1E'> Теорија </a>"
            +"<a target='_blank' href='https://drive.google.com/open?id=0ByM1prKzrEhIZF9Uei03eEJqY28'> Вјежбе </a>"
        },
        {//MR6-5
            sifra:"МР6-5", naziv:"Програмски језици",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[5],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR6-6/1
            sifra:"МР6-6/1", naziv:"Рачунарске мреже",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        }
    ],
    //uradio
    [//Semestar 7
        {//MR7-1
            sifra:"МР7-1",naziv:"Методика наставе математике 1", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[1],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-2
            sifra:"МР7-2", naziv:"Методика наставе рачунарства 1",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-3
            sifra:"МР7-3", naziv:"Алгебра", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[4],  asistent: asistentPodaci[1],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-4
            sifra:"МР7-4", naziv:"Диференцијална геометрија",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[0],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-5
            sifra:"МР7-5", naziv:"Мултимедијални системи",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-6/1
            sifra:"МР7-6/1", naziv:"Програмски преводиоци",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: "",  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-6/2
            sifra:"МР7-6/2", naziv:"Специјалне функције",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: profesorPodaci[3],  asistent: asistentPodaci[3],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR7-6/3
            sifra:"МР7-6/3", naziv:"Реалне функције",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: "",  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        }
    ],
    [//Semestar 8
        {//MR8-1
            sifra:"МР8-1",naziv:"Методика наставе математике 2", 	fond:"1+3", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[1],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-2
            sifra:"МР8-2", naziv:"Методика наставе рачунарства 2",	fond:"1+3", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-3
            sifra:"МР8-3", naziv:"Вјероватноћа и статистика", 	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[0],  asistent: asistentPodaci[1],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-4
            sifra:"МР8-4", naziv:"Виша геометрија",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[7],  asistent: asistentPodaci[2],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-5
            sifra:"МР8-5", naziv:"Рачунарска графика",	fond:"2+2", ECTS:"5", status:"обавезни",
            profesor: profesorPodaci[2],  asistent: asistentPodaci[0],
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-6/1
            sifra:"МР8-6/1", naziv:"Историја математике",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: "",  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        },
        {//MR8-6/2
            sifra:"МР8-6/2", naziv:"Програмски пакети у математици",	fond:"2+2", ECTS:"5", status:"изборни",
            profesor: "",  asistent:"",
            rokovi:"",
            program:"",
            literatura:""
        }
    ]
];

var semestar = ["1", "2", "3", "4", "5", "6", "7", "8"];

// predmeti
function SubjectLoad(){
    var id = getUrlVars()['year'];
    var subject = getUrlVars()['subject'];

    if(id !== undefined && id <= 3 && id >= 0)
    {
        FillSemester(id);
    }
    else
    {
        id = getUrlVars()['semestar'];
        if(id !== undefined && id < 8 && id >= 0)
        {
            FillSemester(parseInt(id/2));
            if(subject!== undefined)
                SubjectData(id,subject);
        }
        else
        {
            document.getElementById("divZaIspis").innerHTML = "<h1 style='text-align:center'>Imamo gresku pri prosledjivanju</h1>";
        }
    }
}

function FillSemester(id){
    document.title = "" + (id*1 + 1) + ". godina";
    var tabele = document.getElementsByTagName("tbody");
    var cell;
    var row;
    for(var tabelID = 0; tabelID < tabele.length; tabelID++){
        row = tabele[tabelID].insertRow(0);
        cell = row.insertCell(0);
        cell.setAttribute("width", "20%");
        cell.setAttribute("class", "predmetTabela");
        cell.innerHTML = "<strong>Шифра</strong>";
        cell = row.insertCell(1);
        cell.setAttribute("width", "45%");
        cell.setAttribute("class", "predmetTabela");
        cell.innerHTML = "<strong>Назив</strong>";
        cell = row.insertCell(2);
        cell.setAttribute("width", "15%");
        cell.setAttribute("class", "predmetTabela");
        cell.innerHTML = "<strong>Фонд</strong>";
        cell = row.insertCell(3);
        cell.setAttribute("width", "10%");
        cell.setAttribute("class", "predmetTabela");
        cell.innerHTML = "<strong>ЕCTS</strong>";
        cell = row.insertCell(4);
        cell.setAttribute("width", "10%");
        cell.setAttribute("class", "predmetTabela");
        cell.innerHTML = "<strong>Статус</strong>";

        row = tabele[tabelID].insertRow(1);
        row.setAttribute("id", "Semestar");
        row.setAttribute("class", "predmetTabela");

        row.innerHTML= "<td colspan='7' >Семестар: " + semestar[tabelID + (2*id)] + "</td>";
        for(var i = 0; i < listaPredmeta[tabelID + 2*id].length ; i++)
        {
            row = tabele[tabelID].insertRow(i + 2);
            row.id = "red" + i;

            cell = row.insertCell(0);
            cell.setAttribute("width", "10%");
            cell.setAttribute("align","center");
            cell.setAttribute("class","sifra predmetTabela");
            cell.innerHTML = listaPredmeta[tabelID + (2*id)][i].sifra;

            var subject = "<a onclick='SubjectData(" + (tabelID + (2*id)) + "," + i + ");'>" + listaPredmeta[tabelID + (2*id)][i].naziv + "</a>";
            cell = row.insertCell(1);
            var divSubject = "<div align='left' class='NazivPredmeta'>";
            cell.innerHTML = divSubject + subject + "</div>";

            cell = row.insertCell(2);
            cell.setAttribute("class","sifra predmetTabela");
            cell.innerHTML = listaPredmeta[tabelID + (2*id)][i].fond;
            cell = row.insertCell(3);
            cell.setAttribute("class","ECTS predmetTabela");
            cell.innerHTML = listaPredmeta[tabelID + (2*id)][i].ECTS;

            cell = row.insertCell(4);
            cell.setAttribute("class","status predmetTabela");
            cell.innerHTML =  listaPredmeta[tabelID + (2*id)][i].status;
        }
    }
}

function SubjectData (semestar, id) {
    var profesor = "Profesor: ";
    if(listaPredmeta[semestar][id].profesor.imeProfesora !== undefined)
        if(listaPredmeta[semestar][id].profesor.linkRef === undefined)
            profesor += "<a target='' href='../profesor/profesor.html?id=" + listaPredmeta[semestar][id].profesor.id + "&type=Profesor'>"
                + listaPredmeta[semestar][id].profesor.imeProfesora + "</a>";
        else
            profesor += "<a target='_blank' href='" + listaPredmeta[semestar][id].profesor.linkRef + "'>"
                + listaPredmeta[semestar][id].profesor.imeProfesora + "</a>";
    var asistent = "Asistent: ";
    if(listaPredmeta[semestar][id].asistent.imeProfesora !== undefined)
        if(listaPredmeta[semestar][id].asistent.linkRef === undefined)
            asistent += "<a target='' href='../profesor/profesor.html?id=" + listaPredmeta[semestar][id].asistent.id + "&type=Asistent'>"
                + listaPredmeta[semestar][id].asistent.imeProfesora + "</a>";
        else
            asistent += "<a target='_blank' href='" + listaPredmeta[semestar][id].asistent.linkRef + "'>"
                + listaPredmeta[semestar][id].asistent.imeProfesora + "</a>";
    var predmet = "Predmet: " + listaPredmeta[semestar][id].naziv;
    var rokovi = "Ispiti:<br>" + listaPredmeta[semestar][id].rokovi;
    var literatura = "Materijali:<br>" + listaPredmeta[semestar][id].literatura;
    var program = "Program:<br>" + listaPredmeta[semestar][id].program;
    document.getElementById('profesor').innerHTML = profesor +"<br>" + asistent +"<br>" + predmet;
    document.getElementById("infoOPredmetu").innerHTML = rokovi;
    document.getElementById("Literatura").innerHTML =  literatura;
    document.getElementById("ProgramPredmeta").innerHTML =  program;
}

//profesori
var visibleProfessor;

function showProfessorOnClick(iden) {
    var prof = document.getElementById("profesori");
    var c = prof.children;
    console.log(visibleProfessor);

    if(visibleProfessor != undefined){
        visibleProfessor.style.display = 'none';
        visibleProfessor.style.visibility = 'hidden';
    }
    visibleProfessor = c[iden];

    visibleProfessor.style.display = 'inherit';
    visibleProfessor.style.visibility = 'visible';
}

function showProfessorOnPageLoad(){
    var id = getUrlVars()['id'];
    var type = getUrlVars()['type'];
    var items;
    for(var iden=0; iden < profesorPodaci.length; iden++){
        items = document.getElementById(profesorPodaci[iden].name);
        if(items != undefined)
        {
            items = items.children;
            items[0].innerHTML = profesorPodaci[iden].zvanje + " " + profesorPodaci[iden].imeProfesora;
            items[2].children[0].children[0].children[1].innerHTML = profesorPodaci[iden].tipProfesora;
            for(var sem = 0; sem < listaPredmeta.length; sem++)
                for(var sub = 0; sub < listaPredmeta[sem].length; sub++)
                {
                    if(listaPredmeta[sem][sub].profesor === profesorPodaci[iden])
                    {
                        items[2].children[0].children[2].children[1].innerHTML +=
                            "<a href='../godina studija/godina.html?semestar="+sem+"&subject="+sub+"'>"
                            + listaPredmeta[sem][sub].sifra + " " + listaPredmeta[sem][sub].naziv + "</a><br>";
                    }
                }
        }
    }
    for(var iden=0; iden < asistentPodaci.length; iden++){
        items = document.getElementById(asistentPodaci[iden].name);
        if(items != undefined)
        {
            items = items.children;
            items[0].innerHTML = "мр " + " " + asistentPodaci[iden].imeProfesora;
            items[2].children[0].children[0].children[1].innerHTML = asistentPodaci[iden].tipProfesora;
            for(var sem = 0; sem < listaPredmeta.length; sem++)
                for(var sub = 0; sub < listaPredmeta[sem].length; sub++)
                {
                    if(listaPredmeta[sem][sub].asistent === asistentPodaci[iden])
                    {
                        items[2].children[0].children[2].children[1].innerHTML +=
                            "<a href='../godina studija/godina.html?semestar="+sem+"&subject="+sub+"'>"
                            + listaPredmeta[sem][sub].sifra + " " + listaPredmeta[sem][sub].naziv + "</a><br>";
                    }
                }
        }
    }
    if(id!== undefined && id > 0)
    {
        if(type === "Asistent")
            showProfessorOnClick(asistentPodaci[id].name);
        else if(type === 'Profesor')
            showProfessorOnClick(profesorPodaci[id].name);
    }
}