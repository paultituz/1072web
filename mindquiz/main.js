$(document).ready(function(){
    
    var currentQuiz= null;
    var final = null;
    
    $("#startButton").click(function(){ 
            if(currentQuiz==null){
                final=0;
                currentQuiz=0;
                
                $("#question").text(questions[0].question);
                $("#options").empty();
                for(var x=0;x<questions[0].answers.length;x++){
                    $("#options").append("<input name='options' type='radio' valus="+x+">"+"<label>"+questions[0].answers[x][0]+"</lable><br><br>");
                }
                
                $("#startButton").attr("value","Next");
            }
            
        else {
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    
                    if(currentQuiz==24){
                    
                        final = final + questions[currentQuiz].answers[i][1];
                    
                        var finalResult= questions[currentQuiz].answers[i][1];
                    
                        $("#question").text("測試結果:");
                        
                        if(final>=0 && final <=15){
                            $("#question").text("天啊！你根本沒有這種開車的能力，更不要說F1賽車了。看在上帝的份上，遠離馬路。我建議你終生走路，而且慢慢走，不要跑。");
                        }
                    
                        else if (final>=16 && final <=25){
                            $("#question").text("你還不夠好，不是嗎？沒有一個車隊的老闆會要你這樣冒冒失失的傢伙來駕駛昂貴的F1賽車。你太容易生氣了，失火的加農炮，還是回家吧。");
                        }
                    
                        else if (final>=26 && final <=34){
                            $("#question").text("還不錯，但是還可以更加好。你有成為車手的潛力。可惜你的自製力還不夠。很遺憾！");
                        }
                    
                        else if (final>=35 && final <=44){
                            $("#question").text("現在我們可以好好聊聊了。你可能不能成為邁克爾，但是你能夠成為拉爾夫。你完全有F1車手的心理素質。");
                        }
                    
                        else if (final>=45 && final <=50){
                            $("#question").text("你還在等什麼？馬上打電話給法蘭克·威廉姆斯，告訴他你下個賽季就加入他的車隊。威廉姆斯下個賽季的兩個車手位都還是空著呢。告訴他，你一定會成為下一個邁克爾·舒馬赫！");
                        }
                    
                        $("#options").empty();
                    
                    //$("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                    
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }   
                    else{
                    
                        final = final+questions[currentQuiz].answers[i][1];
                    
                        currentQuiz++;
                    
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                    
                        for(var x=0;x<questions[currentQuiz].answers.length;x++){
                            $("#options").append("<input name ='options' type ='radio' value="+x+" >"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                
                    }
                     return false;
                }
            });
        }               
                            
    });
});