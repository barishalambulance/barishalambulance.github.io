// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


var typed = new Typed(".text", {
    strings: [" দ্রুত সার্ভিস 🚑" ," সাশ্রয়ী যাতায়াত 💰" , " অভিজ্ঞ মেডিকেল টিম 👨‍⚕️", " ২৪ঘন্টা/৭দিন সাপোর্ট 🕐", " জরুরি বুকিং সুবিধা 📲"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
const mobilefixed = document.querySelector(".floating-call-button");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
       mobilefixed.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
        mobilefixed.classList.remove("active");
        console.log("Active remove");
    }
})


// প্রতি 30 সেকেন্ড পর .skills এর slideRight অ্যানিমেশন রিস্টার্ট হবে
    setInterval(() => {
        restartAnimation('#Skills', 'slideRight');
    }, 30000);


function restartAnimation() {
    const bars = document.querySelectorAll('.Technical-bars .bar');

    bars.forEach(bar => {
        // 1. info span (text)
        const infoSpan = bar.querySelector('.info span');
        if (infoSpan) {
            infoSpan.style.animation = 'none';
            void infoSpan.offsetWidth; // reflow
            infoSpan.style.animation = 'showText 0.5s 1s linear forwards';
        }

        // 2. progress-line
        const progressLine = bar.querySelector('.progress-line');
        if (progressLine) {
            progressLine.style.animation = 'none';
            void progressLine.offsetWidth;
            progressLine.style.animation = 'animate 1s cubic-bezier(1, 0, 0.5, 1) forwards';
        }

        // 3. progress-line span
        const progressSpan = bar.querySelector('.progress-line span');
        if (progressSpan) {
            progressSpan.style.animation = 'none';
            void progressSpan.offsetWidth;
            progressSpan.style.animation = 'animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards';
        }
    });
}

function restartRadialAnimation() {
    const paths = document.querySelectorAll('.radial-bar .path');

    paths.forEach(path => {
        // Clone the path to reset animation
        const newPath = path.cloneNode(true);
        path.parentNode.replaceChild(newPath, path);
    });
}

// প্রথমবার পেজ লোডে রান করানো
restartRadialAnimation();

// প্রতি ৩০ সেকেন্ড পর পুনরায় animate করা
setInterval(restartRadialAnimation, 30000);



// const apiKey = "AIzaSyAxMeZ5ubFiHn3-R_keMOLOajhRNFt1YB4";
// const playlists = {
//     "AI Engineering": "PLBOo3GtkocvQNgKdyqEGOEQyxQpXpxeFH",
//     "Web Development": "PLAYLIST_ID_2",
//     "App Development": "PLAYLIST_ID_3",
//     "Graphic Design": "PLAYLIST_ID_4",
//     "Video Editing": "PLAYLIST_ID_5",
//     "Audio Editing": "PLAYLIST_ID_6"
// };

// for (let [title, playlistId] of Object.entries(playlists)) {
//     fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${playlistId}&key=${apiKey}`)
//         .then(res => res.json())
//         .then(data => {
//             const container = document.getElementById("videos");
//             const section = document.createElement("section");
//             section.innerHTML = `<h2>${title}</h2><div class="video-row"></div>`;
//             const videoRow = section.querySelector(".video-row");

//             data.items.forEach(item => {
//                 const thumbnail = item.snippet.thumbnails.medium.url;
//                 const videoId = item.snippet.resourceId.videoId;
//                 const videoTitle = item.snippet.title;

//                 const videoCard = document.createElement("div");
//                 videoCard.className = "video-card";
//                 videoCard.innerHTML = `
//                     <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">
//                         <img src="${thumbnail}" alt="${videoTitle}">
//                         <p>${videoTitle}</p>
//                     </a>`;
//                 videoRow.appendChild(videoCard);
//             });

//             container.appendChild(section);
//         });
// }


const apiKey = 'AIzaSyAxMeZ5ubFiHn3-R_keMOLOajhRNFt1YB4'; // এখানে তোমার YouTube API Key বসাও
    const navLinks = document.querySelectorAll(".navbarproject a");
    const videoContainer = document.getElementById("videos");

    function loadVideos(playlistId) {
      videoContainer.innerHTML = 'Loading...';
      fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
          videoContainer.innerHTML = '';
          data.items.forEach(item => {
            const videoId = item.snippet.resourceId.videoId;
            const title = item.snippet.title;

            const div = document.createElement('div');
            div.className = 'video';
            div.innerHTML = `
              <iframe src="https://www.youtube.com/embed/${videoId}" 
                      title="${title}" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>
              <p>${title}</p>
            `;
            videoContainer.appendChild(div);
          });
        })
        .catch(err => {
          console.error(err);
          videoContainer.innerHTML = 'Video Load Fail !';
        });
    }

    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        navLinks.forEach(lnk => lnk.classList.remove("active"));
        this.classList.add("active");

        const playlistId = this.dataset.playlist;
        loadVideos(playlistId);
      });
    });

    // প্রথমবার পেজ লোড হলে প্রথম ক্যাটাগরির ভিডিও দেখাও
    loadVideos(navLinks[0].dataset.playlist);


