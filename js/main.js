// Javascript code to active nav bar

function showDiv0() {
    document.querySelector('.row0').style.display = 'flex';
    document.querySelector('.row1').style.display = 'none';
    document.querySelector('.row2').style.display = 'none';
    document.querySelector('.row3').style.display = 'none';
    document.querySelector('.row4').style.display = 'none';
    document.querySelector('.row5').style.display = 'none';
    document.querySelector('.row6').style.display = 'none';
    
    
}

function showDiv1() {
    document.querySelector('.row1').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    
}

function showDiv2() {
    document.querySelector('.row2').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    
}

function showDiv3() {
    document.querySelector('.row3').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    
}

function showDiv4() {
    document.querySelector('.row4').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    
}

function showDiv5() {
    document.querySelector('.row5').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    
}

function showDiv6() {
    document.querySelector('.row6').style.display = 'flex';
    document.querySelector('.row0').style.display = 'none';
    document.querySelector('.row1').style.display = 'none';
    
}




const filterContainer = document.querySelector(".gallery-filter");

const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("filter-item")){
    // disactivate exiting active 'filter-item'
    filterContainer.querySelector('.active').classList.remove("active");

    // active new 'filter-item'
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
        if(item.classList.contains(filterValue) || filterValue === 'all'){
            item.classList.remove("hide");
            item.classList.add("show");
        }
        else{
            item.classList.remove("show");
            item.classList.add("hide");
        }
    });
  }
})




// As A Vanilla JavaScript Plugin

var gallery =new SimpleLightbox('.gallery a', {
    /* options */

    rel:false,


});

 

// As A jQuery Plugin -->

var gallery = $('.gallery a').simpleLightbox({

    /* options */

    rel:false,


});



console.log("galleryItem");