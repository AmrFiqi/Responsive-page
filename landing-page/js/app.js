/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

//Selecting the section part to loop through it to add the nav bar and creating document fragment populate it later.
const getSections=document.querySelectorAll("section");

let newFrag=document.createDocumentFragment();
let list=document.getElementById('navbar__list');



//build the menu
//Create list item, link and append the link to the li.
for(const section of getSections){
    //console.log(section.id); ensures the loop is running for all sections
    let newList=document.createElement("li");
    let item=document.createElement('a');
    let itemName=document.createTextNode(section.dataset.nav);
    //Set the created link "a" name and href
    item.classList.add("menu__link");
    item.href="#"+section.id;
    
    item.appendChild(itemName);
    //Was testing to check the result of both.
     
    //item.textContent=section.dataset.nav;
    newList.appendChild(item);
    //console.log(item); 
    
    //Setting Scroll Behaviour to be smooth instead of just teleporting.
    item.addEventListener("click", function(e){
        e.preventDefault();
        section.scrollIntoView({behavior: "smooth",block: "center"});
    });


    //Using DocumentFragment to get all the work done to it then adding it to the document body instead of calling the body for every Iteration.
    newFrag.appendChild(newList);
    //console.log(newFrag);
}
    //Add the fragment to the main page
    list.appendChild(newFrag);


    //Active section
    //Check which part of the page is active and active class to it.
const sections = [... document.querySelectorAll("section")];
const navItems= document.querySelectorAll('a');
window.addEventListener('scroll',(_)=>{


   for(const section of sections){
       
        let rect= section.getBoundingClientRect();
        let linkText=section.dataset.nav;
        //If the viewport showing any part of the top-200px and top + 300 px, mark the class as active and highlight the corresponding nav item
       if(rect.top>=-200 && rect.top <=300){
        for(const item of navItems){
            section.classList.add("animation");
            if(item.innerText==linkText)
            {
                item.classList.add("highlight");
            }
            else{
                item.classList.remove("highlight");
            }
            
            //console.log("hi"); Tests if the statment works correctly
       }
    }
       //remove active class from inactive parts
       else{
           section.classList.remove("animation");       
       }
       }
});





