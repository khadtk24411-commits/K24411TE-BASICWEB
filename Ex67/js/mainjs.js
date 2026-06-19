function load_student_from_xml(dataset, bodystudent)
{
    var parser = new DOMParser(); 
    var xmlDoc = parser.parseFromString(dataset, "text/xml"); 
    render_xml2html(xmlDoc, bodystudent)
}

function render_xml2html(xmlDoc, bodystudent)
{
    var student_tags = xmlDoc.getElementsByTagName("student")
    for(i = 0; i < student_tags.length; i++)
    {
        student_tag = student_tags[i]
        id_tag = student_tag.getElementsByTagName("id")[0]
        name_tag = student_tag.getElementsByTagName("name")[0]
        birthday_tag = student_tag.getElementsByTagName("birthday")[0]
        gender_tag = student_tag.getElementsByTagName("gender")[0]
        
        var student_id = id_tag.textContent.trim()
        var student_name = name_tag.textContent.trim()
        var student_birthday = birthday_tag.textContent.trim()
        var student_gender = gender_tag.textContent.trim()
        
        tr = document.createElement("tr")
        td_id = document.createElement("td")
        td_name = document.createElement("td")
        td_birthday = document.createElement("td")
        td_gender = document.createElement("td")
        
        td_id.innerHTML = student_id
        td_name.innerHTML = student_name
        td_birthday.innerHTML = student_birthday
        td_gender.innerHTML = student_gender
        
        tr.appendChild(td_id)
        tr.appendChild(td_name)
        tr.appendChild(td_birthday)
        tr.appendChild(td_gender)
        
        getdetail(tr, student_name)
        bodystudent.appendChild(tr)
    }
}

function loadDetail() { 
    var params = new URLSearchParams(window.location.search) 
    var name = params.get("name") 
    if (typeof xmlString !== 'undefined') 
        { var parser = new DOMParser()
            var xmlDoc = parser.parseFromString(xmlString, "text/xml")
            getStudent(xmlDoc, name) 
        } 
    }
function getStudent(xmlDoc, name)
{
    var student_tags = xmlDoc.getElementsByTagName("student")
    for(var i = 0; i < student_tags.length; i++)
    {
        var student_tag = student_tags[i]
        var sname = student_tag.getElementsByTagName("name")[0].textContent.trim()
        if(sname == name)
        {
            var id_tag = student_tag.getElementsByTagName("id")[0]
            var name_tag = student_tag.getElementsByTagName("name")[0]
            var birthday_tag = student_tag.getElementsByTagName("birthday")[0]
            var gender_tag = student_tag.getElementsByTagName("gender")[0]

            var student_id = id_tag.textContent.trim()
            var student_name = name_tag.textContent.trim()
            var student_birthday = birthday_tag.textContent.trim()
            var student_gender = gender_tag.textContent.trim()
            
            var detailbody = document.getElementById("detailbody")
            detailbody.innerHTML =
                "<tr><td><strong>Student ID</strong></td><td>" + student_id + "</td></tr>" +
                "<tr><td><strong>Student Name</strong></td><td>" + student_name + "</td></tr>" +
                "<tr><td><strong>Birthday</strong></td><td>" + student_birthday + "</td></tr>" +
                "<tr><td><strong>Gender</strong></td><td>" + student_gender + "</td></tr>"
            return
        }
    }
    var detailbody = document.getElementById("detailbody")
    detailbody.innerHTML = "<tr><td colspan='2'>Student not found: " + name + "</td></tr>"
}

function getdetail(tr, student_name)
{
    tr.onclick = function()
    {
        window.location.href = "studentdetail.html?name=" + encodeURIComponent(student_name)
    }
}
var asc = true
function sortByName()
{
    if (typeof window.xmlString !== 'undefined') {
        var parser = new DOMParser()
        var xmlDoc = parser.parseFromString(window.xmlString, "text/xml")
        var student_tags = Array.from(xmlDoc.getElementsByTagName("student"))
        
        student_tags.sort(function(a, b)
        {
            var nameA = a.getElementsByTagName("name")[0].textContent.trim()
            var nameB = b.getElementsByTagName("name")[0].textContent.trim()
            return asc 
                ? nameA.localeCompare(nameB) 
                : nameB.localeCompare(nameA)
        })
        asc = !asc
        var bodystudent = document.getElementById("bodystudent")
        bodystudent.innerHTML = ""
        for(i = 0; i < student_tags.length; i++)
        {
            student_tag = student_tags[i]
            id_tag = student_tag.getElementsByTagName("id")[0]
            name_tag = student_tag.getElementsByTagName("name")[0]
            birthday_tag = student_tag.getElementsByTagName("birthday")[0]
            gender_tag = student_tag.getElementsByTagName("gender")[0]
            
            var student_id = id_tag.textContent.trim()
            var student_name = name_tag.textContent.trim()
            var student_birthday = birthday_tag.textContent.trim()
            var student_gender = gender_tag.textContent.trim()
            
            tr = document.createElement("tr")
            td_id = document.createElement("td")
            td_name = document.createElement("td")
            td_birthday = document.createElement("td")
            td_gender = document.createElement("td")
            
            td_id.innerHTML = student_id
            td_name.innerHTML = student_name
            td_birthday.innerHTML = student_birthday
            td_gender.innerHTML = student_gender
        
            tr.appendChild(td_id)
            tr.appendChild(td_name)
            tr.appendChild(td_birthday)
            tr.appendChild(td_gender)
            
            getdetail(tr, student_name)
            bodystudent.appendChild(tr)
        }
    }
}