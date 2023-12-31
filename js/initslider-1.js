jQuery(document).ready(function(){

    var scripts = document.getElementsByTagName("script");

    var jsFolder = "";

    for (var i= 0; i< scripts.length; i++)

    {

        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))

            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);

    }

    jQuery("#amazingslider-1").amazingslider({

        jsfolder:jsFolder,

        width:900,

        height:500,

        skinsfoldername:"",

        watermarkstyle:"text",

        loadimageondemand:false,

        watermarktext:"amazingslider.com",

        isresponsive:false,

        autoplayvideo:false,

        watermarkimage:"",

        pauseonmouseover:false,

        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",

        addmargin:true,

        randomplay:false,

        playvideoonclickthumb:true,

        showwatermark:false,

        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",

        slideinterval:5000,

        watermarktarget:"_blank",

        watermarkpositioncss:"display:block;position:absolute;bottom:4px;right:4px;",

        watermarklink:"http://amazingslider.com?source=watermark",

        enabletouchswipe:true,

        transitiononfirstslide:false,

        loop:0,

        autoplay:true,

        navplayvideoimage:"play-32-32-0.png",

        navpreviewheight:60,

        timerheight:2,

        shownumbering:false,

        skin:"Lightbox",

        textautohide:false,

        addgooglefonts:true,

        navshowplaypause:true,

        navshowplayvideo:false,

        navshowplaypausestandalonemarginx:8,

        navshowplaypausestandalonemarginy:8,

        navbuttonradius:0,

        navpreviewposition:"top",

        navmarginy:-32,

        showshadow:false,

        navfeaturedarrowimagewidth:16,

        navpreviewwidth:120,

        googlefonts:"Inder",

        textpositionmarginright:0,

        bordercolor:"#ffffff",

        navthumbnavigationarrowimagewidth:32,

        navthumbtitlehovercss:"text-decoration:underline;",

        arrowwidth:50,

        texteffecteasing:"easeOutCubic",

        texteffect:"slide",

        navspacing:8,

        playvideoimage:"playvideo-64-64-0.png",

        ribbonimage:"ribbon_topleft-0.png",

        navwidth:50,

        navheight:60,

        arrowimage:"flecha.png",

        timeropacity:0.6,

        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",

        navshowplaypausestandalone:false,

        navpreviewbordercolor:"#ffffff",

        ribbonposition:"topleft",

        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

        navborder:4,

        navthumbtitleheight:20,

        textpositionmargintop:24,

        navswitchonmouseover:false,

        navarrowimage:"navarrows-28-28-0.png",

        arrowtop:50,

        textstyle:"dynamic",

        playvideoimageheight:64,

        navfonthighlightcolor:"#666666",

        showbackgroundimage:false,

        navpreviewborder:4,

        navopacity:0.8,

        shadowcolor:"#aaaaaa",

        navbuttonshowbgimage:true,

        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",

        navthumbnavigationarrowimageheight:32,

        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; background-color:#be1622; opacity:0.7; filter:alpha(opacity=70);",

        navpreviewarrowwidth:16,

        playvideoimagewidth:64,

        navshowpreviewontouch:false,

        bottomshadowimagewidth:110,

        showtimer:false,

        navradius:0,

        navshowpreview:true,

        navpreviewarrowheight:8,

        navmarginx:-32,

        navfeaturedarrowimage:"featuredarrow-16-8-0.png",

        showribbon:false,

        navstyle:"none",

        textpositionmarginleft:0,

        descriptioncss:"display:block; position:relative; font:30px Arial,Tahoma,Helvetica,sans-serif; color:#FFF; font-weight: bold;",

        navplaypauseimage:"navplaypause-28-28-0.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navfontsize:12,

        navhighlightcolor:"#333333",

        navimage:"bullet-16-16-1.png",

        navshowplaypausestandaloneautohide:false,

        navbuttoncolor:"#999999",

        navshowarrow:true,

        navshowfeaturedarrow:false,

        lightboxbarheight:48,

        titlecss:"display:block; position:relative; font: 16px Inder,Arial,Tahoma,Helvetica,sans-serif; color:#000;",

        ribbonimagey:0,

        ribbonimagex:0,

        navshowplaypausestandaloneposition:"bottomright",

        shadowsize:5,

        arrowhideonmouseleave:1000,

        navshowplaypausestandalonewidth:28,

        navfeaturedarrowimageheight:8,

        navshowplaypausestandaloneheight:28,

        backgroundimagewidth:120,

        navcolor:"#999999",

        navthumbtitlewidth:120,

        arrowheight:60,

        arrowmargin:0,

        texteffectduration:1000,

        bottomshadowimage:"bottomshadow-110-95-1.png",

        border:0,

        timerposition:"bottom",

        navfontcolor:"#333333",

        navthumbnavigationstyle:"arrow",

        borderradius:0,

        navbuttonhighlightcolor:"#333333",

        textpositionstatic:"bottom",

        navthumbstyle:"imageonly",

        textcss:"display:block; padding:8px 16px; text-align:left; ",

        navbordercolor:"#ffffff",

        navpreviewarrowimage:"previewarrow-16-8-0.png",

        showbottomshadow:false,

        navdirection:"horizontal",

        textpositionmarginstatic:0,

        backgroundimage:"",

        navposition:"bottom",

        arrowstyle:"always",

        bottomshadowimagetop:95,

        textpositiondynamic:"bottomleft",

        navshowbuttons:false,

        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",

        textpositionmarginbottom:24,

        fade: {

            duration:250,

            easing:"easeOutCubic",

            checked:true

        },

        transition:"fade"

    });

});