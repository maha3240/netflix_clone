class Slider {
    constructor(sliderContent, sliderContainer) {
        this.sliderContent = sliderContent;
        this.sliderWidth = sliderContainer.offsetWidth;
        this.maxIndex = Math.floor(sliderContent.scrollWidth / this.sliderWidth) - 1;
        this.sliderIndex = 0; // Make index instance-specific

        // Optionally initialize styles
        this.styles = window.getComputedStyle(sliderContent);
    }

    moveNext() {
        if (this.sliderIndex < this.maxIndex) {
            this.sliderIndex++;
            this.updateTransform();
        }
    }

    movePrev() {
        if (this.sliderIndex > 0) {
            this.sliderIndex--;
            this.updateTransform();
        }
    }

    updateTransform() {
        this.sliderContent.style.transform = `translateX(-${this.sliderWidth * this.sliderIndex}px)`;
    }
}

let slider1 = new Slider(
    document.querySelector('.slider1 .slider-content'),
    document.querySelector('.slider1 .slider-container')
);

let slider2 = new Slider(
    document.querySelector('.slider2 .slider-content'),
    document.querySelector('.slider2 .slider-container')
);

document.querySelectorAll('input[name="questions"]').forEach(radio => {
    radio.addEventListener("click", function(){
        if(this.checked && this.dataset.clicked==="true"){
            this.checked = false;
            this.dataset.clicked = "false";
        }else{
            this.dataset.clicked = "true"
        }
    });
});

function langClicked(){
    let langBtn= document.querySelector('.lang_btn');
    let border = document.querySelector('.ft-btn');
    let langBtnStyle = window.getComputedStyle(border);
    if (border.style.visibility === 'hidden') {
        border.style.visibility = 'visible';   
    }else{
        border.style.visibility = 'hidden';   
    }
    
};
/*window.addEventListener('scroll', () => {
    let button = document.querySelector('.sticky-btn');
    let scrollThreshold = 100;
  
    if (window.scrollY >= scrollThreshold) {
      button.classList.add('sticky');
    } else {
      button.classList.remove('sticky');
    }
  });*/