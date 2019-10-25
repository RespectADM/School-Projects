$('.github').hover(function(){
    $(this).css("width", "250px");
    $(this).css("height", "250px");
});

$('.linkedin').hover(function(){
    $(this).css("width", "250px");
    $(this).css("height", "250px");
});

$('.social').hover(function(){
    $(this).css("width", "250px");
    $(this).css("height", "250px");
});

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    document.getElementById("repo").innerHTML = gitObject.url;
  }
};

gitHubRequest.open("GET", "https://api.github.com/users/RespectADM", true);
gitHubRequest.send();
