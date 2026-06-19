function load_employees_from_external_xml(dataset_path, body_employee)
{
    var xhr = new XMLHttpRequest()
    xhr.open("GET", dataset_path, true)
    xhr.send()
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var xmlDoc = xhr.responseXML
            render_xml2html(xmlDoc, body_employee)
        }
        else
        {
            
        }
    }
}

function render_xml2html(xmlDoc, body_employee)
{
    body_employee.innerHTML = ""
    
    var employee_tags = xmlDoc.getElementsByTagName("employee")
    var titleSet = new Set()
    window.allEmployees = []
    
    for(var i = 0; i < employee_tags.length; i++)
    {
        var employee_tag = employee_tags[i]
        
        var id = employee_tag.getAttribute("id")
        var title = employee_tag.getAttribute("title")
        
        var name_tag = employee_tag.getElementsByTagName("name")[0]
        var phone_tag = employee_tag.getElementsByTagName("phone")[0]
        
        var employee_name = name_tag.childNodes[0].nodeValue
        var employee_phone = phone_tag.childNodes[0].nodeValue
        
        window.allEmployees.push({
            id: id,
            name: employee_name,
            title: title,
            phone: employee_phone
        })
        
        titleSet.add(title)
    }
    
    var dropList = document.getElementById("dropList")
    while(dropList.options.length > 0)
    {
        dropList.remove(0)
    }
    
    var titles = Array.from(titleSet).sort()
    for(var i = 0; i < titles.length; i++)
    {
        var option = document.createElement("option")
        option.value = titles[i]
        option.text = titles[i]
        dropList.appendChild(option)
    }
    if(titles.length > 0)
    {
        dropList.value = titles[0]  
        filterEmployees()           
    }
}

function filterEmployees()
{
    var dropList = document.getElementById("dropList")
    var selectedTitle = dropList.value
    var body_employee = document.getElementById("bodyemployee")
    
    body_employee.innerHTML = ""
    
    for(var i = 0; i < window.allEmployees.length; i++)
    {
        if(window.allEmployees[i].title === selectedTitle)
        {
            var emp = window.allEmployees[i]
            
            var tr = document.createElement("tr")
            var td_id = document.createElement("td")
            var td_name = document.createElement("td")
            var td_phone = document.createElement("td")
            
            td_id.innerHTML = emp.id
            td_name.innerHTML = emp.name
            td_phone.innerHTML = emp.phone
            
            tr.appendChild(td_id)
            tr.appendChild(td_name)
            tr.appendChild(td_phone)
            
            body_employee.appendChild(tr)
        }
    }
}

