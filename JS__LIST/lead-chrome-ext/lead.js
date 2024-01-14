let myLeads = []
const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("del-btn")
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [{url:"sdfsdfkdfsj"}]

tabBtn.addEventListener("click",function(){
  // console.log(tabs[0].url)
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})
function render(leads){
  let listItems = ""
  for(let i=0;i<leads.length;i++)
  {
  //  listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>" +myLeads[i] + "</li>"
  // in place of the above we use template strings
  listItems += `
    <li>
      <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
      </li>`

  // ulEl.innerHTML +="<li>" +myLeads[i] + "</li>"
  // const li = document.createElement("li")
  // li.textContent= myLeads[i]
  // ulEl.append(li)
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear() //clear local storage
  myLeads =[] //clear leads array
  render(myLeads) //clear DOM 
})
inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  inputEl.value = "" //clear the input field
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})
