$(document).ready(function() {
	
	//Video Reel
	var videoReel = "KFOX_reel_master_V2.mov";
	
	//Video and Thumb paths
	var videoPath = "http://kenfox.net/movies_kenfox/";
	var thumbPath = "images/thumbs/";
	
	//Number of videos, not including main reel
	var numVideos = 15;
	
	//Array of videos
	//Template Structure: videoArray[i] = [video title, video filename, thumbnail filename]
	var videoArray = new Array();
		videoArray[0] = ["truth 'nightclub'", "truth_nightclub_h264_16x9.mov", "thumbs_nightclub.png"];
		videoArray[1] = ["psa 'future prisoner'", "prisoner_h264_16x9.mov", "thumbs_prisoner.png"];
		videoArray[2] = ["asics 'arrows'", "asics_website", "thumbs_asics.png"];
		videoArray[3] = ["scion frs 'performance'", "scion_frs_performance_360.mov", "thumbs_scion.png"];
		videoArray[4] = ["truth 'parachute'", "truth_parachute_h264_16x9.mov", "thumbs_parachute.png"];
		videoArray[5] = ["truth 'cowboy'", "truth_western_h264_16x9.mov", "thumbs_truth.png"];
		videoArray[6] = ["sportsweek 'safari'", "sportweek_h264_16x9.mov", "thumbs_sport.png"];
		videoArray[7] = ["sega 'roenik'", "sega_nhl_h264_16x9.mov", "thumbs_segaNHL.png"];
		videoArray[8] = ["crash test dummies", "crash_test_h264_16x9.mov", "thumbs_crashTestDummies.png"];
		videoArray[9] = ["kia 'lord of rings'", "kia_lords_h264_16x9.mov", "thumbs_lords.png"];
		videoArray[10] = ["social distortion", "social_distortion_h264_16x9.mov", "thumbs_socialDistortion.png"];
		videoArray[11] = ["the wallflowers", "wallflowers_h264_16x9.mov", "thumbs_wallflowers.png"];
		videoArray[12] = ["bell atlantic 'breakup'", "bell_atlantic_breakup_h264_16x9.mov", "thumbs_bellAtlantic.png"];
		videoArray[13] = ["the freestylers", "freestylers_h264_16x9.mov", "thumbs_freestylers.png"];
		videoArray[14] = ["blues traveler", "blues_traveler_mtns_h264_16x9.mov", "thumbs_bluesTraveler.png"];
	
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
	
	//Initialize Media Element
	/*$('video,audio').mediaelementplayer();*/
	
	//Queue correct video when you click on the thumbnail
	$(".thumbnail").click(function(){
		var videoID = $(this).attr("index");
		var videoTitle = videoArray[videoID][0];
		var videoPoster = "images/posters/" + videoArray[videoID][1]
		var videoSrc = "video/" + videoArray[videoID][1];
		//console.log(videoID);		
		$(".modal-title").html(videoTitle);
		$("#videoPlayer").attr("poster", videoPoster + ".png");
		$("#portfolio-mp4").attr("src", videoSrc + ".mp4");
		$("#portfolio-webm").attr("src", "http://video-js.zencoder.com/oceans-clip.webm"); //videoSrc + ".webm");
		$("#portfolio-ogv").attr("src", "http://video-js.zencoder.com/oceans-clip.ogv"); //videoSrc + ".ogv");
	});
	
	//Pause/Stop all videos on closing modal
	$(".pause").click(function(){
		$('video, audio').each(function() {
        	$(this)[0].pause();	
		})
	});
	
});