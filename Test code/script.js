var Like = document.getElementById('like');
var Likebutton = document.getElementById('button-like');
var Repost = document.getElementById('repost');
var Repostbutton = document.getElementById('button-repost');
var flag = 0;
var repostflag = 0;
Likebutton.onclick = function buttonlikeclick() {
    if(flag == 0){
        Likebutton.innerHTML = '<img class="post-footer-button-like-img" src="img/icon-like-active.png" id="like" alt=""> <span class="post-footer-button-likes-count">1338</span>';
        flag = 1;
    }
    else{
        Likebutton.innerHTML = '<img class="post-footer-button-like-img" src="img/icon-like.png" id="like" alt=""> <span class="post-footer-button-likes-count">1337</span>';
        flag = 0;
    }
    
  
}
Repostbutton.onclick = function buttonrepostclick() {
    if(repostflag == 0) {
        Repostbutton.innerHTML = '<img src="img/icon-repost-hover.png" id="repost" alt="" class="post-footer-button-repost-img"><span class="post-footer-button-repost-count">229</span>';
        repostflag = 1;
    }
    else{
        Repostbutton.innerHTML = '<img src="img/icon-repost.png" id="repost" alt="" class="post-footer-button-repost-img"><span class="post-footer-button-repost-count">228</span>';
        repostflag = 0;
    }
}


function showMessage() {
    alert('lorem');
}
