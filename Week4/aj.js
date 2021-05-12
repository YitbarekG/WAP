$(function(){
    $("#btn").click(fn);
    
});


function fn(ev){
    ev.preventDefault();
    let id = $("#text1").val();
    let req = "http://jsonplaceholder.typicode.com/posts?userId="+id;

    $.ajax({"url":req, "success":suc, "error": failer });
}


function suc(data){
    $("#pst").empty();
  
    
    for(d of data){
        let r= d.id;
         
        let test = $('<button/>',
        {
            text: 'Comment',
            id: r
        }); 
        
        let nVal = ($('<ul>').append($('<li>').text(d.title)).append($('<li>').text(d.body)).append(test).append($('<hr>')));
        $("#pst").append(nVal);

        
    }
    $("button").click(fnCmt);
}

function failer(){
    $("#cmt").append("failed to get");
}

function fn1(){
    
    $("#cmt").append("nVal");
}


function fnCmt(ev){
    ev.preventDefault();
    let id = this.id;
    console.log(id);
    let req = "http://jsonplaceholder.typicode.com/comments?postId="+id;

    $.ajax({"url":req, "success":succuss, "error": fail });
}

function succuss(data){
    $("#cmt").empty();
    
    for(d of data){
        
        let nVal = ($('<ul>').append($('<li>').text(d.name)).append($('<li>').text(d.email)).append($('<li>').text(d.body)).append($('<hr>'))); 
        
        $("#cmt").append(nVal);

        
    }
}

function fail(){
    $("#cmt").append("failed to get");
}
