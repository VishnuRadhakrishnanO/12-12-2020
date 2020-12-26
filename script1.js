



var section1 = document.createElement ('section') ;
section1.setAttribute("class",   " profile");

var url1 = 'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg/revision/latest/top-crop/width/360/height/450?cb=20181130033425';
var image1 = new Image();
image1.src = url1;
document.body.append(section1)
var div_Pname = document.createElement ('div') ;
div_Pname .setAttribute("class", " bar ")
var name1 =document.createElement ('p') ;
name1.setAttribute("class", "name")
name1.innerText="Mr. Bean";
div_Pname.appendChild(name1);

section1.append(image1,div_Pname  );

var p1 = document.createElement ('p') ;
var a1 =document.createElement('a');
a1.innerHTML ="N. Damen Avenue, Chicago 99999| hello@kickresume.com| www.kickresume.com";
document.body.append(p1)
p1.appendChild(a1);


var div1 = document.createElement ('div') ;
div1.setAttribute("class", "resume");
document.body.append(div1);

var div2 = document.createElement ('div') ;
div2.setAttribute("class", "column");
div1.appendChild(div2);

//under div 2

var section2 = document.createElement ('section') ;
section2.setAttribute("class",   " Skills paratext");
div2.appendChild(section2);
//inside section 2

var header_2 =document.createElement ('h2') ;
var url2 = 'https://lh3.googleusercontent.com/pw/ACtC-3dDKzFO9OrA_BIVxdYdK5a82eJy7RpCIbNKj2rnYL9SMsguojSUaNRSpr1kgQ-VQzP01UC5ZPfU9tJ1uhopy8gqu9Hvz95SR22mMVfrR_qA3VagvLBJzaWal3GWbxTRMs4dm81yjPSZ_OELhSGrnIg=w657-h625-no?authuser=1';
var image2 = new Image();
image2.src = url2;
header_2.appendChild(image2);
var span_2 =document.createElement ('span') ;
span_2.setAttribute("class","heading");
span_2.innerText="  Profile"



header_2.appendChild(span_2);
section2.appendChild(header_2);

var p_2 = document.createElement ('p') ;
p_2.setAttribute("id", "paraalign")
p_2.innerText ="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.";
header_2.appendChild(p_2);


var section3 =  document.createElement ('section') ;
section3.setAttribute("class",   " Skills paratext");
div2.appendChild(section3);

var header_3 =document.createElement ('h2') ;
var img2 = document.createElement('img'); 
            img2.src =  "https://lh3.googleusercontent.com/pw/ACtC-3cGpfI7frs_KpS-_WzLVFx1X8Rt5ZwU_mCLEL_Qj-FPFfLTlBQYYq-WGAOnQRqte2-HW3Hew5fdJ_csdRyQIhcKJKlnlBTXgzVqjnaYkq61R7Y4uVzzjBw4SmRwcyAA9r2jhAD8yzg6IVgP7ZRWBXw=s176-no?authuser=1"
     
var span_3 =document.createElement ('span') ;
span_3.setAttribute("class","heading");
span_3.innerText="  Skills"

header_3.append(img2,span_3);
section3.appendChild(header_3);
var sub_head1 =document.createElement ('h4') ;
sub_head1.innerText="– TECHNICAL SKILLS"
header_3.appendChild(sub_head1)



var skill_list =document.createElement ('ul') ;
skill_list.setAttribute("class", "tech")
header_3.appendChild(skill_list);

var skill_Name =document.createElement ('li') ;

skill_list.append(skill_Name);

var skill_Name_u1 = document.createElement ('ul') ;
skill_Name_u1.setAttribute("class", "skills list_view")

skill_Name.appendChild(skill_Name_u1);

var skill_1 =document.createElement ('li') ;
skill_1.innerText= "JavaScript";
var skill_2 =document.createElement ('li') ;
skill_2.innerText= "CSS"
var skill_3 =document.createElement ('li') ;
skill_3.innerText= "HTML"
var skill_4 =document.createElement ('li') ;
skill_4.innerText= "React"
var skill_5 =document.createElement ('li') ;
skill_5.innerText= "Mongo"
var skill_6 =document.createElement ('li') ;
skill_6.innerText= "Deployment"
var skill_7 =document.createElement ('li') ;
skill_7.innerText= "Redux"

skill_Name.append(skill_1,skill_2,skill_3,skill_4,skill_5,skill_6,skill_7);


var skill_Progres =document.createElement ('li') ;
skill_list.append(skill_Progres);

var skill_Pg_bar = document.createElement ('ul') ;
skill_Pg_bar.setAttribute("class", "skills list_view")
skill_Progres.appendChild(skill_Pg_bar);

var skill_Pg_bar_1 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_1);
var skill_Pg_bar_1_c =document.createElement('div');
skill_Pg_bar_1_c.setAttribute("class", "container");
skill_Pg_bar_1.appendChild(skill_Pg_bar_1_c);

skill_Pg_bar_1_c_col =document.createElement('div');
skill_Pg_bar_1_c_col.setAttribute("class", "sk java");
skill_Pg_bar_1_c.appendChild(skill_Pg_bar_1_c_col);

///////////////////
var skill_Pg_bar_2 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_2);
var skill_Pg_bar_2_c =document.createElement('div');
skill_Pg_bar_2_c.setAttribute("class", "container");
skill_Pg_bar_2.appendChild(skill_Pg_bar_2_c);

skill_Pg_bar_2_c_col =document.createElement('div');
skill_Pg_bar_2_c_col.setAttribute("class", "sk css");
skill_Pg_bar_2_c.appendChild(skill_Pg_bar_2_c_col);

var skill_Pg_bar_3 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_3);
var skill_Pg_bar_3_c =document.createElement('div');
skill_Pg_bar_3_c.setAttribute("class", "container");
skill_Pg_bar_3.appendChild(skill_Pg_bar_3_c);

skill_Pg_bar_3_c_col =document.createElement('div');
skill_Pg_bar_3_c_col.setAttribute("class", "sk html1");
skill_Pg_bar_3_c.appendChild(skill_Pg_bar_3_c_col);


var skill_Pg_bar_4 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_4);
var skill_Pg_bar_4_c =document.createElement('div');
skill_Pg_bar_4_c.setAttribute("class", "container");
skill_Pg_bar_4.appendChild(skill_Pg_bar_4_c);

skill_Pg_bar_4_c_col =document.createElement('div');
skill_Pg_bar_4_c_col.setAttribute("class", "sk react");
skill_Pg_bar_4_c.appendChild(skill_Pg_bar_4_c_col);

var skill_Pg_bar_5 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_5);
var skill_Pg_bar_5_c =document.createElement('div');
skill_Pg_bar_5_c.setAttribute("class", "container");
skill_Pg_bar_5.appendChild(skill_Pg_bar_5_c);

skill_Pg_bar_5_c_col =document.createElement('div');
skill_Pg_bar_5_c_col.setAttribute("class", "sk react");
skill_Pg_bar_5_c.appendChild(skill_Pg_bar_5_c_col);


var skill_Pg_bar_6 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_6);
var skill_Pg_bar_6_c =document.createElement('div');
skill_Pg_bar_6_c.setAttribute("class", "container");
skill_Pg_bar_6.appendChild(skill_Pg_bar_6_c);

skill_Pg_bar_6_c_col =document.createElement('div');
skill_Pg_bar_6_c_col.setAttribute("class", "sk mongo");
skill_Pg_bar_6_c.appendChild(skill_Pg_bar_6_c_col);

var skill_Pg_bar_7 =document.createElement ('li') ;
skill_Pg_bar.appendChild(skill_Pg_bar_7);
var skill_Pg_bar_7_c =document.createElement('div');
skill_Pg_bar_7_c.setAttribute("class", "container");
skill_Pg_bar_7.appendChild(skill_Pg_bar_7_c);

skill_Pg_bar_7_c_col =document.createElement('div');
skill_Pg_bar_7_c_col.setAttribute("class", "sk dep");
skill_Pg_bar_7_c.appendChild(skill_Pg_bar_7_c_col);



var section4 =  document.createElement ('section') ;
section4.setAttribute("class",   " Skills paratext");
div2.appendChild(section4);

var header_4 =document.createElement ('h2') ;
var img4 = document.createElement('img'); 
            img4.src =  "https://lh3.googleusercontent.com/pw/ACtC-3eDHttGBRXybJ0YwqPp7My2jIwBeVhZ4r2-yRzxN9FK-TH6w22cqM9xw1nEic26aIZYT8UjziC9HR_7AKvHYzA9GkE4kUrSIsw-GNG-beu9IAUvgpLq481MLifVxUqUSWczDK9ccFe__WIZ4owOFf0=s225-no?authuser=0"
     
var span_4 =document.createElement ('span') ;
span_4.setAttribute("class","heading");
span_4.innerText="  Work experience"

header_4.append(img4,span_4);
section4.appendChild(header_4);
var para_4 =document.createElement ('p') ;
para_4.setAttribute("id","paraalign ");
para_4.innerText=" 03/2014 – 02/2017WASHINGTON DC";
header_4.append( para_4)
var sub_head4 =document.createElement ('h4') ;
sub_head4.innerText="Event Manager"
header_4.appendChild(sub_head4)

var sub_head5 =document.createElement ('h4') ;
sub_head5.innerText="C3 Presents"
header_4.appendChild(sub_head5)

var work_ex = document.createElement ('ul') ;
work_ex.setAttribute("id","para_list")
section4.appendChild(work_ex);

var work_ex_1 = document.createElement ('li') ;

work_ex_1.innerText="Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation."

work_ex.append(work_ex_1)

var work_ex_2 = document.createElement ('li') ;
work_ex_2.innerText="Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women";

work_ex.append(work_ex_2);

var div3 = document.createElement ('div') ;
div3.setAttribute("class", "column1");
div1.appendChild(div3);

var section5 =  document.createElement ('section') ;
section5.setAttribute("class",   " Skills");
div3.appendChild(section5);
section5.setAttribute("class", " Skills paratext2");

var header_5 =document.createElement ('h2') ;
var img5 = document.createElement('img'); 
            img5.src =  "https://lh3.googleusercontent.com/pw/ACtC-3eDHttGBRXybJ0YwqPp7My2jIwBeVhZ4r2-yRzxN9FK-TH6w22cqM9xw1nEic26aIZYT8UjziC9HR_7AKvHYzA9GkE4kUrSIsw-GNG-beu9IAUvgpLq481MLifVxUqUSWczDK9ccFe__WIZ4owOFf0=s225-no?authuser=0"
     
var span_5 =document.createElement ('span') ;
span_5.setAttribute("class","heading");
span_5.innerText="  Work experience"

header_5.append(img5,span_5);
section5.appendChild(header_5);
var heading_5 =document.createElement ('p') ;
heading_5.setAttribute("class","paratext1");
heading_5.innerText="11/2018 – 06/2018CHICAGO, IL"
section5.appendChild(heading_5)
var Para_5 =document.createElement ('p') ;
 Para_5.setAttribute("class","paratext1");
Para_5.innerText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus alias, eaque ad excepturi libero minima labore autem quisquam, id, recusandae officia voluptas reiciendis explicabo deserunt quos minus dolores doloremqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus alias, eaque ad excepturi libero minima labore autem quisquam, id, recusandae officia voluptas reiciendis explicabo deserunt quos minus dolores doloremqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus alias, eaque ad excepturi libero minima labore autem quisquam, id, recusandae officia voluptas reiciendis explicabo deserunt quos minus dolores doloremqu Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae doloribus alias, eaque ad excepturi libero minima labore autem quisquam, id, recusandae officia voluptas reiciendis explicabo deserunt quos minus dolores doloremqu'
section5.appendChild(Para_5)
