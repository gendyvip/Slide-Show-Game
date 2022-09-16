var opWin=document.getElementById("opWin"),
    cloWin=document.getElementById("cloWin"),
    movToWin=document.getElementById("movToWin"),
    movByWin=document.getElementById("movByWin"),
    resizeToWin=document.getElementById("resizeToWin"),
    resizeByWin=document.getElementById("resizeByWin"),
    chgStyle=document.getElementById("chgStyle"),
    body=document.getElementById("body"),
    next=document.getElementById("next"),
    back=document.getElementById("back"),
    play=document.getElementById("play"),
    stop=document.getElementById("stop"),
    myInterval,
    timeout=document.getElementById("timeout"),
    cimg=document.getElementById("cimg"),
    arrimg= document.images,i=1,win,
    urls=["","https://www.google.com/search?tbs=sbi:AMhZZisVudofYAgMXHpHSBgcuG68cKRv7GAqh194aiY3f5gqTa0L0fMynYqkWZH2kasn6sjj0_1DoiZ18iGQCUE44vkFNyRhWi45mi2ET5dnMY2Qs0Ws06Jyz1vXtnbKYgeNptiFsHmlXl-s7kU1-4MhI-r65Tm2xxIpiG-QoWXnUKGgzms33oShzopn8V-JDV4zKjKzm3tHll8crOjmUvvEYHMOfVsfRAoPgM_1E0vvfIU0nI2MVfA0d6_1k0Tk3nufaTk0BSGvAmQXzqx6wSwUO0hTBWeiA4xOV82n5m9eQzibBmXrBn1eG0o3IcKLrc4jPMsTAyPwMhIVyemKMYkpHgsa6p7REQ0h4PObc3zSfhd2bR2IZ7cIEO8YNNpe2_1L6H5exBeKM11QITic4NsJvsrTQ93kAohpIQ",
    "https://www.google.com/search?tbs=sbi:AMhZZisaHVTC8AEdOm4pX9Y-3-emN1f6P1Dy_1vYKdWPS3rSeOkNbG8-93QlaztacsypD1GhBvjGAm4tvhQ52c1iZhkL38BHUtCTZkU3eRv9eyoRFqJaiUhhS0k91EqeKcRfN25bAzIL-un4SfV8sNu4_1tDvlwLJW2WNjDQ7QRsyoBKMU4nSv0kCbWAfVIBc5-RLn-Fvf7iq-KCNZpE-M3olowPjUNWJiwWHy-mEBoHtHzRCLI5kxLGMFUxNieNOKTVR8Mtdq8xYMTyANDn1fwId5GWGerYxUemtM0e76kCdycCNrqNPBybPoiTU5FEMvjEkk6Tk03QuTpwVIiYk2OMIqJWVX8GX_1M0FP64QWU7q2a94i1Us-MZbG1J5ipHDQaxuDn5Ll9OWjmgJsD4LAaO15XONtCyH8qg",
    "https://www.google.com/search?tbs=sbi:AMhZZitcq63OTEO_1WXr9I9IbrgKbjvsP7dCkHOxbQfcX4UIY638J0IEGC7yG0rEfI0CvY1jnhDozLlLRt4on5oNN1t4ce0SQK73XFnhg0yxQce9JNJxExWyAxkLaw-Qp032IUGkBPAHTGBrxmN4SSCIT05RCVOhFE_1p3sxCbq8U0TL_1Z442kUTQ5wYp4lD-AKMF9-yHiI09HvsU5iCWuhOdbMQCUYjTMMob6asFoa2yetQg_1zOZPZ7DS50MhcLc7cTUVJXct0bbDdCfIamfma3uqWJt-4-DJtMjyi03IwD3kAW_10JWVVC5r8Re9bcMeoWKkR_1cSCZQKdsJTPnBes0aNXwL_1DYOCyoDncXDn91A_12U6Eav70SZITaXM_1UnV8gWOTnyw7o6ngJP5F0pVpqLMq47GseggGzDQ",
    "https://www.google.com/search?tbs=sbi:AMhZZisqW2PdFgw2Y5eua1OQMowLG3QFdvPh0hdtbOA9oICljS-3HfVhK1fbz_1m4Xy-s2s8pQTK9vc_120KcGurs4M_1aXx1nKsAwaxfOwSsy3qp0HxZ8a9Iwl6MM3EUfmyhYbp2LSNgJxkaKXOAKBYHaasBzC5mFF4poio8mALzP45ClqNxK9i46yyPMt_10LqiI2S2L3_1XpfAYJSP25mkynL_1zBZgTr8ZvLqR-f6mHD52dCUG8Wjx7V1AUYnd22hVZNNfXD_1tdDUxDGUw6hwJFM8llzQNxa7D_1SyVOxdfXYQILYf6uOdSLEEzvfaMafLIwNj4fPjEEXLHyRYfFmQh_1Th1zMps5_1O9OIksTyiBA4xp99J0yaIK5blG6-zmV4o_1QmfJdsC-ycOsN4jioR59FwvpTPfW0JV69g"
]
opWin.addEventListener('click',()=>{
win = window.open("about.html","","width=300,height=300");
win.focus();
});

cloWin.addEventListener('click',()=>{
    win.close();
    });
    
resizeToWin.addEventListener('click',()=>{
    win.focus();
    win.resizeTo(300,300);
        });
        
resizeByWin.addEventListener('click',()=>{
    win.focus();
    win.resizeBy(100,100);
    }); 
 
movToWin.addEventListener('click',()=>{
    win.focus();
    win.moveTo(200,200);
    });   

movByWin.addEventListener('click',()=>{
    win.focus();
    win.moveBy(200,200);
        });   

next.addEventListener('click',()=>{
    if(i!==4){
        arrimg[0].setAttribute('src',`${++i}.png`);
    }
    else{
        i=1;
        arrimg[0].setAttribute('src',`${i}.png`);
    }
}
);
back.addEventListener('click',()=>{
    if(i!==1){
        arrimg[0].setAttribute('src',`${--i}.png`);
    }
    else{
        i=1;
        arrimg[0].setAttribute('src',`${i}.png`);
    }
}
);

play.addEventListener('click',()=>{
    myInterval=window.setInterval(()=>{
    if(i!==5){
        arrimg[0].setAttribute('src',`${i++}.png`);
    }
    else{
        i=1;
    }
  },500)
}
);

stop.addEventListener('click',()=>{
   clearInterval(myInterval)
}
);

timeout.addEventListener('click',()=>{
window.setTimeout(()=>{
cimg.style.display="block";
},1000)
window.setTimeout(()=>{
    window.open(urls[i])
    },2000)
});

chgStyle.addEventListener('click',
()=>{
    body.classList.toggle("lightb");
    }
)

