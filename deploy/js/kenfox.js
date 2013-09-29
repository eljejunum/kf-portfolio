$(document).ready(function() {
	
	//Video Reel
	var videoReel = "KFOX_reel";
	var reelPoster = "KFOX_reel.png";
	
	//Video and Thumb paths
	var videoPath = "videos/"; //"http://kenfox.net/movies_kenfox/";
	var thumbPath = "images/thumbs/";
	var posterPath = "images/posters/";
	
	
	//Number of videos, not including main reel
	var numVideos = 15;
	
	//Array of videos
	//Template Structure: videoArray[i] = [video title, video filename, thumbnail filename]
	var videoArray = new Array();
		videoArray[0] = ["psa 'future prisoner'", "prisoner", "thumbs_prisoner.png"];
		videoArray[1] = ["asics 'arrows'", "asics", "thumbs_asics.png"];
		videoArray[2] = ["truth 'nightclub'", "truth_nightclub", "thumbs_nightclub.png"];
		videoArray[3] = ["scion frs 'performance'<br/><a href='http://www.scionav.com/frs'>(Link to Website)</a>", "scion_frs_performance", "thumbs_scion.png"];
		videoArray[4] = ["truth 'parachute'", "truth_parachute", "thumbs_parachute.png"];
		videoArray[5] = ["truth 'cowboy'", "truth_western", "thumbs_truth.png"];
		videoArray[6] = ["sportweek 'safari'", "sportweek", "thumbs_sport.png"];
		videoArray[7] = ["sega 'roenick'", "sega_nhl", "thumbs_segaNHL.png"];
		videoArray[8] = ["crash test dummies", "crash_test", "thumbs_crashTestDummies.png"];
		videoArray[9] = ["kia 'lord of rings'", "kia_lords", "thumbs_lords.png"];
		videoArray[10] = ["social distortion", "social_distortion", "thumbs_socialDistortion.png"];
		videoArray[11] = ["the wallflowers", "wallflowers", "thumbs_wallflowers.png"];
		videoArray[12] = ["bell atlantic 'breakup'", "bell_atlantic", "thumbs_bellAtlantic.png"];
		videoArray[13] = ["the freestylers", "freestylers", "thumbs_freestylers.png"];
		videoArray[14] = ["blues traveler", "blues_traveler", "thumbs_bluesTraveler.png"];
	
	//Apply Video Thumbnails to grid
	for(var i=0; i < numVideos; i++){
		var videoTitle = videoArray[i][0];
		var video = videoPath + videoArray[i][1];
		var videoThumb = "url('" + thumbPath + videoArray[i][2] + "')";		
		
		var thumbID = "#thumb_" + i;
		var videoTitleID = "#title_" + i;
		
		$(thumbID).css("backgroundImage", videoThumb);
		$(videoTitleID).html(videoTitle);
	}
	
	//Check Browser Video Support
	var videoExtension = "";
	if(Modernizr.video) {
		if(Modernizr.video.h264) {
			videoExtension = ".mp4";
		} else if(Modernizr.video.webm) {
			videoExtension = ".webm";
		} else if(Modernizr.video.ogv) {
			videoExtension = ".ogv";
		}
	}
	
	//Initialize Media Element
	/*$('video,audio').mediaelementplayer();*/
	
	//Queue correct video when you click on the thumbnail
	$(".thumbnail").click(function(){
		var videoID = $(this).attr("index");
		var videoTitle = videoArray[videoID][0];
		var videoPoster = posterPath + videoArray[videoID][1]
		var videoSrc = videoPath + videoArray[videoID][1];
		$("#modal-video-title").html(videoTitle);
		$("#videoPlayer").attr("poster", videoPoster + ".png");
		$("#videoPlayer").attr("src", videoSrc + videoExtension);
	});
	
	//Set Reel Video Clip
	$("#reelPlayer").attr("poster", posterPath + reelPoster);
	$("#reelPlayer").attr("src", videoPath + videoReel + videoExtension);
	
	//Pause/Stop all videos on closing modal
	$(".pause").click(function(){
		$('video, audio').each(function() {
        	$(this)[0].pause();	
		})
		$(".videoPlayer").attr("src", "");
		$(".videoPlayer").currentTime = 0;
	});
	
});