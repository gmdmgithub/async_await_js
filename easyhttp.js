function easyHttp(){
    this.http = new XMLHttpRequest();
}
//make http get request
//we need callback - asynchronius way - to reead return data
easyHttp.prototype.get = function(url, callback){

    this.http.open('GET',url,true);

    let self = this;
    this.http.onload = function(){
        //console.log(self.http);
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}

//make http POST request
easyHttp.prototype.post = function(url,data,callback){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function(){
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//make http PUT request
easyHttp.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    let self = this;
    this.http.onload = function(){
        callback(null,self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}

//make http DELETE request
easyHttp.prototype.delete = function(url, callback){

    this.http.open('DELETE',url,true);

    let self = this;
    this.http.onload = function(){
        //console.log(self.http);
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        }else{
            callback(`Error: ${self.http.status}`);
        }
    }

    this.http.send();
}