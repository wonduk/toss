// $(document).ready(function(){
//     console.log($(".navbar").offset().top);
//     console.log($(document).height());
//     console.log($(".navbar").height());
//     console.log($(".navbar").height());

//     $(window).scroll(function(){
//         console.log($(window).scrollTop());
//         if($(window).scrollTop()>1200){
//             $("navbar").addClass("animate__animated").addClass("animate__slideInLeft");
//         }


//     });

// });
$(document).ready(function(){
       //navbaer hover
       $("#myNavbar li").hover(function(){
        $(this).addClass("myNavbarhover");
    },function() {
        $(this).removeClass("myNavbarhover");
    });
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        //navbar 스크롤
        if($(window).scrollTop()>1){  
            $(".navbar").addClass("on");
        }
        if($(window).scrollTop()<10){
            $(".navbar").removeClass("on");
        }
        // 신용
        if($(window).scrollTop()>3900){
            $(".Cbox01 img").addClass("animate__animated").addClass("animate__slideInUp").addClass("root") 
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>3900){
            $(".Cbox02 img").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>4300){
            $(".Cbox03 img").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>4300){
            $(".Cbox04 img").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>4000){
            $(".Ctext01").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        //bespoke
        if($(window).scrollTop()>5000){
            $(".pic04").addClass("animate__animated").addClass("animate__slideInLeft").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>5000){
            $(".pic05").addClass("animate__animated").addClass("animate__slideInRight").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        //홈소비
        if($(window).scrollTop()>1100){
            $("#box1").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>1500){
            $("#box2").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>1300){
            $("#box3").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        if($(window).scrollTop()>2000){
            $("#box4").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 1500);
        }
        //송금
        if($(window).scrollTop()>2500){
            $(".pic03").addClass("animate__animated").addClass("animate__slideInUp").addClass("root")
            .animate({ opacity: 1 }, 2500);
        }
        if($(window).scrollTop()>2500){
            $(".send_txt").addClass("animate__animated").addClass("animate__slideInUp")
            .animate({ opacity: 1 }, 2500);
        }
    });
     
    
});



