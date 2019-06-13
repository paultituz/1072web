var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy;

$(document).ready(function(){
    
    mapArray = [1,1,1,1,1,1,1,
                0,0,0,0,0,0,2,
                3,4,5,6,7,8,9];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    imgMain = new Image();
    imgMain.src = "images/b.png";
    currentImgMainX = 0;
    currentImgMainY = 200;
    imgMain.onload = function(){
     ctx.drawImage(imgMain, 0, 0, 720, 750, currentImgMainX, currentImgMainY, 200, 200);
    }
 
    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgRedbull= new Image();
    imgRedbull.src = "images/s-l1000.jpg";
    imgMercedes = new Image();
    imgMercedes.src ="images/me.jpg";
    
    imgMountain.onload = function(){
        imgRedbull.onload = function(){
            imgMercedes.onload = function(){
            for(var x in mapArray)
            {
                if(mapArray[x]==1){
                    ctx.drawImage(imgMountain,32,65,32,32,x%7*200,Math.floor(x/7)*200,200,200);
                }
                else if (mapArray[x]==3||mapArray[x]==4){
                    ctx.drawImage(imgRedbull,0,0,1000,1000,x%7*200,Math.floor(x/7)*200,200,200);
                }
                else if (mapArray[x]==5||mapArray[x]==6||mapArray[x]==7||mapArray[x]==8||mapArray[x]==9){
                    ctx.drawImage(imgMercedes,0,0,1000,1000,x%7*200,Math.floor(x/7)*200,200,200);
                
                }
                else{}
                
            }
            }
        }
    };
});

$(document).keydown(function(event){

    var targetImageMainX, targetImageMainY,targetBlock,cutImagePositionsX;
    
    event.preventDefault();
    
    switch(event.which){
        case 37:
            targetImageMainX = currentImgMainX-200;
            targetImageMainY = currentImgMainY;
            cutImagePositionsX = 0;
            break;
            
        case 38:
            targetImageMainX=currentImgMainX;
            targetImageMainY=currentImgMainY-200;
            cutImagePositionsX = 0;
            break;
        case 39:
            targetImageMainX=currentImgMainX+200;
            targetImageMainY=currentImgMainY;
            cutImagePositionsX = 0;
            break;
        case 40:
            targetImageMainX=currentImgMainX;
            targetImageMainY=currentImgMainY+200;
            cutImagePositionsX= 0 ;
            break;
        default:
            return;
    }
    if(targetImageMainX<=1200 && targetImageMainX>=0 && targetImageMainY<=400 && targetImageMainY>=0){
        targetBlock=targetImageMainX/200+targetImageMainY/200*7;
    }
    else {
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3||mapArray[targetBlock]==4||mapArray[targetBlock]==5||mapArray[targetBlock]==6||mapArray[targetBlock]==7||mapArray[targetBlock]==8||mapArray[targetBlock]==9){
        
    }
    else{
        $("#talkBox").text("");
        currentImgMainX=targetImageMainX;
        currentImgMainY=targetImageMainY;
    }
    
    ctx.drawImage(imgMain,cutImagePositionsX,0,720,720,currentImgMainX,currentImgMainY,200,200);
    
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有障礙物");
             break;
        case 2:
            $("taklBox").text("2019！");
            break;
        case 3:
            $("#talkBox").text("2012:Sebastian Vettel");
            break;
        case 4:
            $("#talkBox").text("2013:Sebastian Vettel");
            break;
        case 5:
            $("#talkBox").text("2014:Lewis Hamilton");
            break;
        case 6:
            $("#talkBox").text("2015:Lewis Hamilton");
            break;
        case 7:
            $("#talkBox").text("2016:Nico Erik Rosberg");
            break;
        case 8:
            $("#talkBox").text("2017:Lewis Hamilton");
            break;
        case 9:
            $("#talkBox").text("2018:Lewis Hamilton");
            break;
    }
});
