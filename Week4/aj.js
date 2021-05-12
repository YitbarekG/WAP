$(function(){
    $("#btn").click(fn);
    
});


function fn(ev){
    ev.preventDefault();
    let id = $("#text1").val();
    let req = "https://jsonplaceholder.typicode.com/posts?userId="+id;

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
        // $('<ul>').appendTo($("#pst"));
        // $('<li>').text(d.title).appendTo($("#pst"));
        // $('<li>').text(d.body).appendTo($("#pst"));
        // $('<button id="btn1">').text("Comments").appendTo($("#pst"));
        // $("#btn1").click(fn1);
        // $('<hr>').appendTo($("#pst"));
        // nVal.appendTo($("#pst"));
        
        $("#pst").append(nVal);

        
    }
    $("button").click(fnCmt);
    // let txt = JSON.stringify(data);

    // $('<div>').text(txt.length).appendTo($("body"));
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
    let req = "https://jsonplaceholder.typicode.com/comments?postId="+id;

    $.ajax({"url":req, "success":succuss, "error": fail });
}

function succuss(data){
    $("#cmt").empty();
    
    for(d of data){
        
        let nVal = ($('<ul>').append($('<li>').text(d.name)).append($('<li>').text(d.email)).append($('<li>').text(d.body)).append($('<hr>'))); 
        // $('<ul>').appendTo($("#pst"));
        // $('<li>').text(d.title).appendTo($("#pst"));
        // $('<li>').text(d.body).appendTo($("#pst"));
        // $('<button id="btn1">').text("Comments").appendTo($("#pst"));
        // $("#btn1").click(fn1);
        // $('<hr>').appendTo($("#pst"));
        // nVal.appendTo($("#pst"));
        
        $("#cmt").append(nVal);

        
    }
    // $("#r").click(fn1);
    // let txt = JSON.stringify(data);

    // $('<div>').text(txt.length).appendTo($("body"));
}

function fail(){
    $("#cmt").append("failed to get");
}
