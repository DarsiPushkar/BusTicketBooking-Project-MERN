var http=require('http')

http.createServer(function(req,res){
    
    const{url,method}=req
    res.write("url is: "+url)
    res.write("\nmethod is: "+method)
    var correct_userid="gist"
    var correct_password="gist@123"

    
    if(url==="/login"){
        res.write("\nyou are in login page")
    if(correct_userid==="gist" && correct_password==="gist@123"){
        res.write("\nLogged in")
    }
    else{
        res.write("\nInvalid credentials")
    }
}
    else if(url==="/signup")
        res.write("\nyou are in signup page")
    else{
        res.write("\nyou are in homepage")
    }
    res.end();

}).listen(8080)