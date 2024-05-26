//Cursor blur- not done
//Horizontal scroller not done

//Move pointer with cursor
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
});


//to add scrolling animation in scrollbar
gsap.to(".nav",{
    backgroundColor: "#000",
    duration : 1,
    height: "85px",
    scrollTrigger:{
        trigger: ".nav",
        scroller:"body",
        // markers:true,
        start: "top -15",
        end: "top -17",
        scrub:1
    }
});

//to add scrolling animation for page 2
gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub: 1,
        // markers:true
    }
});

gsap.from("#colon1",{
    y: -70,
    x: -70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
});

gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
});

gsap.from(".page4 h2",{
    y:50,
    scrollTrigger:{
        trigger: ".page4 h2",
        scroller: "body",
        start:"top 75%",
        end: "top 70%",
        scrub:3
    }
})