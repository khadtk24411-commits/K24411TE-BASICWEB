function load_cd_from_external_xml(dataset_path,body_cd)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            
            var xmlDoc = xhr.responseXML;
            render_xml2html(xmlDoc,body_cd)
        }
        else
        {
            
        }
    }
}
function render_xml2html(xmlDoc,body_cd)
{
    
    var cd_tags=xmlDoc.getElementsByTagName("CD")
    for(i=0;i<cd_tags.length;i++)
    {
        
        cd_tag=cd_tags[i]
        titletag=cd_tag.getElementsByTagName("TITLE")[0]
        artistag=cd_tag.getElementsByTagName("ARTIST")[0]
        countrytag=cd_tag.getElementsByTagName("COUNTRY")[0]
        companytag=cd_tag.getElementsByTagName("COMPANY")[0]
        pricetag=cd_tag.getElementsByTagName("PRICE")[0]
        yeartag=cd_tag.getElementsByTagName("YEAR")[0]
        cdtitle=titletag.childNodes[0].nodeValue
        cdartist=artistag.childNodes[0].nodeValue
        cdcountry=countrytag.childNodes[0].nodeValue
        cdcompany=companytag.childNodes[0].nodeValue
        cdprice=pricetag.childNodes[0].nodeValue
        cdyear=yeartag.childNodes[0].nodeValue
       
        tr=document.createElement("tr")
        td_title=document.createElement("td")
        td_artist=document.createElement("td")
        td_country=document.createElement("td")
        td_company=document.createElement("td")
        td_price=document.createElement("td")
        td_year=document.createElement("td")

        td_title.innerHTML=cdtitle
        td_artist.innerHTML=cdartist
        td_country.innerHTML=cdcountry
        td_company.innerHTML=cdcompany
        td_price.innerHTML=cdprice
        td_year.innerHTML=cdyear

        tr.appendChild(td_title)
        tr.appendChild(td_artist)
        tr.appendChild(td_country)
        tr.appendChild(td_company)
        tr.appendChild(td_price)
        tr.appendChild(td_year)

        body_cd.appendChild(tr)
    }
}