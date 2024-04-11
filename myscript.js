
//load from json data
async function readJSONToArray(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Error fetching JSON file: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}
//append to html
async function appendItemsToDiv() {
  const projects = await readJSONToArray("./files/data.json");
  console.log(projects);
  const targetDiv = document.querySelector('.projects'); // Replace with your div's class name

  projects.projects.forEach(item => {
    // Replace with the desired data property

    var title=document.createElement("h4");
    title.textContent=item.title;


    var desc=document.createElement("p");
    desc.textContent=item.description;

    var icon=document.createElement("img");
   icon.className="icon";
    icon.src=item.icon;

    function openModal(imageUrl) {
      modalImage.src = imageUrl; // Set the image source for the modal
      imageModal.classList.remove('hidden'); // Make the modal visible
    }
    var previewbtn=document.createElement("div");
    previewbtn.className="previewbtn";
    previewbtn.textContent="PREVIEW";
    previewbtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      openModal(item.img);});


    var aprview=document.createElement("a");
    aprview.append(previewbtn);

    
    var divdetail=document.createElement("div");
    var titledivdetail= document.createElement("h5");
    titledivdetail.textContent="Tech used:";
    divdetail.className="projectdetail";
    divdetail.appendChild(titledivdetail);
    var divskills=document.createElement("div");
    divskills.className="skills"
    item.skills.forEach(skill => {
      var divskill=document.createElement("div");
      divskill.className="skill";
      divskill.textContent=skill.skill;
      divskills.append(divskill);
    });
    divdetail.appendChild(divskills);

    var divproject=document.createElement("div");
    var divfirst=document.createElement("div");
    var divlast=document.createElement("div");


    divproject.className="project";

    divfirst.appendChild(icon);
    divfirst.appendChild(title);
    divfirst.appendChild(desc);
    divlast.appendChild(divdetail);
    divlast.appendChild(aprview);
    
  
    divproject.appendChild(divfirst);
    divproject.appendChild(divlast);
 
    targetDiv.appendChild(divproject)
  });
}
await appendItemsToDiv();
/*
fetch('./files/data.json').then((res)=>{
  console.log(res);
  return res;
});*/
