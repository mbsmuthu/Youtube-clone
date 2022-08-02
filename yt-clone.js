const menuIcon=document.querySelector("#menu-icon");
const sidebar=document.querySelector("#sidebar");
const container=document.querySelector("#container");
const input = document.querySelector("#input-box");
const videoList = document.querySelector("#videoList");

let fullVideoList = [{thumbnail:"images/thumbnail1.png",
name:"Learn HTML CSS Javascript",
channel_logo:"images/Jack.jpeg", 
channel_name:"Channel1", 
views:"23K views", 
time_published:"1 year ago"}, 

{thumbnail:"images/thumbnail2.png",
name:"Vikram Movie Teaser",
channel_logo:"images/megan.png", 
channel_name:"Channel2", 
views:"223K views", 
time_published:"5 days ago"}, 

{thumbnail:"images/thumbnail3.png",
name:"How to use your brain to the maximum",
channel_logo:"images/simon.png", 
channel_name:"Channel3", 
views:"23M views", 
time_published:"Yesterday"}, 

{thumbnail:"images/thumbnail4.png",
name:"Movie review",
channel_logo:"images/tom.png", 
channel_name:"Channel4", 
views:"1K views", 
time_published:"1 week ago"}, 

{thumbnail:"images/thumbnail5.png",
name:"Learn Javascript and ReactJS",
channel_logo:"images/Jack.png", 
channel_name:"Channel5", 
views:"988K views", 
time_published:"2 weeks ago"}, 

{thumbnail:"images/thumbnail6.png",
name:"How to cook Sambar",
channel_logo:"images/megan.png", 
channel_name:"Channel6", 
views:"234M views", 
time_published:"1 month ago"}, 

{thumbnail:"images/thumbnail7.png",
name:"Advanced HTML",
channel_logo:"images/simon.png", 
channel_name:"Channel7", 
views:"123 views", 
time_published:"3 days ago"}, 

{thumbnail:"images/thumbnail8.png",
name:"Resume templates",
channel_logo:"images/tom.png", 
channel_name:"Channel8", 
views:"93K views", 
time_published:"4 months ago"}, 

{thumbnail:"images/thumbnail1.png",
name:"Cooking video",
channel_logo:"images/Jack.png", 
channel_name:"Channel9", 
views:"230 views", 
time_published:"3 weeks ago"}, 

{thumbnail:"images/thumbnail1.png",
name:"How to write a resume",
channel_logo:"images/tom.png", 
channel_name:"Channel10", 
views:"214K views", 
time_published:"5 years ago"}, 

{thumbnail:"images/thumbnail2.png",
name:"Singapore Tour",
channel_logo:"images/simon.png", 
channel_name:"Channel11", 
views:"83K views", 
time_published:"8 months ago"}, 

{thumbnail:"images/thumbnail3.png",
name:"CSS Flexbox",
channel_logo:"images/simon.png", 
channel_name:"Channel12", 
views:"83M views", 
time_published:"2 weeks ago"}, 

{thumbnail:"images/thumbnail4.png",
name:"Iphone 13 review",
channel_logo:"images/megan.png", 
channel_name:"Channel13", 
views:"83B views", 
time_published:"5 months ago"}, 

{thumbnail:"images/thumbnail5.png",
name:"GP Muthu",
channel_logo:"images/Jack.png", 
channel_name:"Channel14", 
views:"54 views", 
time_published:"7 months ago"}, 

{thumbnail:"images/thumbnail6.png",
name:"How to fix a broken screen in a phone",
channel_logo:"images/simon.png", 
channel_name:"Channel15", 
views:"64K views", 
time_published:"a day ago"}, 

{thumbnail:"images/thumbnail7.png",
name:"India Tour",
channel_logo:"images/megan.png", 
channel_name:"Channel16", 
views:"1K views", 
time_published:"1 year ago"}, 

{thumbnail:"images/thumbnail8.png",
name:"James Webb Telescope",
channel_logo:"images/tom.png", 
channel_name:"Channel17", 
views:"4.5K views", 
time_published:"8 months ago"}, 

{thumbnail:"images/thumbnail1.png",
name:"Arabic kuthu Song",
channel_logo:"images/simon.png", 
channel_name:"Channel18", 
views:"5B views", 
time_published:"6 weeks ago"}];


menuIcon.addEventListener("click", ()=>{   
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
})

function render(array){
    for(let i=0;i<array.length;i++){
        videoList.insertAdjacentHTML("beforeend",
       `<div class="video-list">
        <a href=""><img src=${array[i].thumbnail} alt="" class="thumbnail"></a>
        <div class="flex-container">
            <img src=${array[i].channel_logo} alt="">
            <div class="video-info">
                <a href="">${array[i].name}</a>
                <p>${array[i].views}</p>
                <p>${array[i].time_published}</p>
            </div>
        </div>
    </div>`)
    }
}


render(fullVideoList);

input.addEventListener("change", event=>{
    // let inputText = event.target.value.toLowerCase().trim();
    let inputText = event.target.value.toLowerCase().trim();
    videoList.innerHTML = [];
    if(inputText.length > 0){
        let filteredList = fullVideoList.filter(video=>{
            return video.name.toLowerCase().includes(inputText);
            
        });
    
        
    
    render(filteredList);
    // window.addEventListener("load", renderVideoList(filteredArray));
    }
    else{
        render(fullVideoList);
    }
    
    sessionStorage.setItem("textinput", event.target.value);
    console.log(sessionStorage.getItem("textinput"));

})



const [count, setCount] = useState(0);

