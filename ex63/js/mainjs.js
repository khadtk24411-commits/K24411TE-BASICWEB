  function create_birthday_control(){
            for(var i=1; i<=31;i++){
                option=document.createElement("option")   
                option.innerHTML=i
                birthday_day.appendChild(option)
            }
            for(var i=1; i<=12;i++){
                option=document.createElement("option")   
                option.innerHTML=i
                birthday_month.appendChild(option)
            }
            for(var i=1965; i<=2025;i++){
                option=document.createElement("option")   
                option.innerHTML=i
                birthday_year.appendChild(option)
            }
        }
function create_tr(t_body){
        if(document.getElementById("name").value=="" || document.getElementById("mail").value =="" || !document.getElementById("mail").checkValidity()) {
            alert("Yêu điền đầy đủ thông tin hoặc kiểm tra lại email đã hợp lệ chưa")
        }
        else{
              tr=document.createElement("tr")
            td_name=document.createElement("td")
            td_name.innerHTML=document.getElementById("name").value
            tr.appendChild(td_name)

            td_email=document.createElement("td")
            td_email.innerHTML=document.getElementById("mail").value 
            tr.appendChild(td_email)

            td_gender = document.createElement("td");
            td_gender.innerHTML = document.querySelector(
                'input[name="gender"]:checked'
            ).value
            tr.appendChild(td_gender)
    
            td_day=document.createElement("td")
            td_day.innerHTML= document.getElementById("birthday_day").value +'/'+  document.getElementById("birthday_month").value+ '/'+ document.getElementById("birthday_year").value
            tr.appendChild(td_day)

            td_hobbies = document.createElement("td")
            hobbies = Array.from(
            document.querySelectorAll('input[name="hobbie"]:checked')
            ).map(checkbox => checkbox.value);
            td_hobbies.innerHTML = hobbies.join(", ")
            tr.appendChild(td_hobbies)

            td_color = document.createElement("td")
            td_color.innerHTML = document.querySelector(
                'input[name="color"]:checked'
            ).value
            tr.appendChild(td_color)
    
            t_body.appendChild(tr)

        }
      
}