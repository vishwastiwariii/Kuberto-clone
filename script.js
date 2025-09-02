Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr" , {videos: ["/0.mp4" , "/2.mp4" , "/3.mp4"]});


gsap.to (".fleftlm" , { 
    scrollTrigger: { 
        trigger:"#fimages",
        pin:true,
        scrub:1,
        start: "top top",
        end: "bottom bottom",
endTrigger: ".last",
    }, 

    y:"-300%",
    ease: Power1, 
})


let sections = document.querySelectorAll (".fleftlm")
Shery.imageEffect(".images", {
    style: 5,
    // config: {onMouse: {value:1}},
    slideStyle: (setScroll) => {
     sections.forEach(function(section , index) { 
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub:1, 
onUpdate: function(prog) { 
   setScroll(prog.progress+index)
},
        })
     })
    }
  });
