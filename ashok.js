
$(document).ready(() => {
    var key="AIzaSyCjSRPMlgT9mGeX4zonB5bdnrIjjYECA9I";
     var playlistId = 'PLFquzbp0Cb17W7rBmhWWL1OhphmKld9iW';
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

    var options={
    	part:"snippet",
    	key:key,
    	maxResult:25,
    	playlistId:playlistId
    }
    loadvideos();
   function loadvideos(){
   	$.getJSON(URL,options,function(data){
   		console.log(data);
   		var id=data.items[0].snippet.resourceId.videoId;
   		main(id);
   		something(data);
   	})
   } 
   function main(id){
   	$(".video").html(` <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
   }
   function something(data) {
    
   $.each(data.items,function(i,item){
   
   	var thumb=item.snippet.thumbnails.medium.url;
   	var title=item.snippet.title;
   	var desc=item.snippet.description.substring(0,140);
   	var vid=item.snippet.resourceId.videoId;
   	$("main").append(`

     	  <div class="hover" data-key="${vid}">
     	<img src="${thumb}" class="img" >
            
            	<h1>${title}</h1>
            	<p>${desc}desc</p>
              </div>
          `)
  
   })

   }
    	$("main").on("click","div",function(){
   		var id=$(this).attr("data-key")
   		main(id)
   	})
})