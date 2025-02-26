// Dependencies:
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/html5media/1.1.8/html5media.min.js
// https://cdnjs.cloudflare.com/ajax/libs/plyr/3.3.21/plyr.min.js

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [] // Remove default controls
        });

        // Get last played channel from localStorage
        const lastPlayedIndex = localStorage.getItem('lastPlayedChannel') || 0;
        
        // initialize playlist and controls
        var index = parseInt(lastPlayedIndex),
            playing = false,
            tracks = [{
                "track": 1,
                "name": "Sirasa FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:8087/index.html",
                "logo": "images/stations/sirasa_fm.png"
            },
            {
                "track": 2,
                "name": "Ran FM",
                "duration": "LIVE",
                "file": "http://207.148.74.192:7860/ran.mp3",
                "logo": "images/stations/ran_fm.png"
            },
            {
                "track": 3,
                "name": "Y FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:7032/index.html",
                "logo": "images/stations/y_fm.png"
            },
            {
                "track": 4,
                "name": "Siyatha FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/siyathafm",
                "logo": "images/stations/siyatha_fm.png"
            },
            {
                "track": 5,
                "name": "Hiru FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden",
                "logo": "images/stations/hiru_fm.png"
            },
            {
                "track": 6,
                "name": "Shaa FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/shaafmgarden",
                "logo": "images/stations/shaa_fm.png"
            },
            {
                "track": 7,
                "name": "Neth FM",
                "duration": "LIVE",
                "file": "https://cp11.serverse.com/proxy/nethfm/stream",
                "logo": "images/stations/neth_fm.png"
            },
            {
                "track": 8,
                "name": "ITN FM",
                "duration": "LIVE",
                "file": ["https://cp12.serverse.com/proxy/itnfm/stream", "https://www.surfmusic.de/radio-station/itn-fm-93-5,19750.html"],
                "logo": "images/stations/itn_fm.png"
            },
            {
                "track": 9,
                "name": "Lakhanda Radio",
                "duration": "LIVE",
                "file": "https://cp12.serverse.com/proxy/itnfm?mp=/stream",
                "logo": "images/stations/lakhanda_radio.png"
            },
            {
                "track": 10,
                "name": "The Buddhist Radio",
                "duration": "LIVE",
                "file": "http://uk7freenew.listen2myradio.com:22086/listen.pls",
                "logo": "images/stations/buddhist_radio.png"
            },
            {
                "track": 11,
                "name": "Rhythm FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/rhythmfm",
                "logo": "images/stations/rhythm_fm.png"
            },
            {
                "track": 12,
                "name": "Kiss FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/kissfm",
                "logo": "images/stations/kiss_fm.png"
            },
            {
                "track": 13,
                "name": "Sooriyan FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/sooriyanfmgarden/",
                "logo": "images/stations/sooriyan_fm.png"
            },
            {
                "track": 14,
                "name": "Yes FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:7056/index.html/stream",
                "logo": "images/stations/yes_fm.png"
            },
            {
                "track": 15,
                "name": "Kothmale FM",
                "duration": "LIVE",
                "file": "https://s46.myradiostream.com:11156/listen.mp3",
                "logo": "images/stations/kothmale_fm.png"
            },
            {
                "track": 16,
                "name": "Colour Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/uo3gmts0ilivv",
                "logo": "images/stations/colour_radio.png"
            },
            {
                "track": 17,
                "name": "Parani Gee Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/18wvhnvmd18uv",
                "logo": "images/stations/parani_gee_radio.png"
            },
            {
                "track": 18,
                "name": "EDM FM Sri Lanka",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/ucqkp3kcmzzuv",
                "logo": "images/stations/edm_fm_sri_lanka.png"
            },
            {
                "track": 19,
                "name": "Free FM",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/1tcs4fbw7rquv",
                "logo": "images/stations/free_fm.png"
            },
            {
                "track": 20,
                "name": "Rangiri Sri Lanka Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/wgp8fr3f4p8uv",
                "logo": "images/stations/rangiri_sri_lanka_radio.png"
            },
            {
                "track": 21,
                "name": "Tharu FM",
                "duration": "LIVE",
                "file": "https://ec3.yesstreaming.net:2655/stream",
                "logo": "images/stations/tharu_fm.png"
            },
            {
                "track": 22,
                "name": "Shree FM",
                "duration": "LIVE",
                "file": "http://207.148.74.192:7860/stream2.mp3",
                "logo": "images/stations/shree_fm.png"
            },
            {
                "track": 23,
                "name": "Derana FM",
                "duration": "LIVE",
                "file": "https://player.twitch.tv/js/embed/v1.js",
                "logo": "images/stations/derana_fm.png"
            },
            {
                "track": 24,
                "name": "Shakthi FM",
                "duration": "LIVE",
                "file": "http://live.trusl.com:1160/;",
                "logo": "images/stations/shakthi_fm.png"
            },
            {
                "track": 25,
                "name": "Real Radio",
                "duration": "LIVE",
                "file": ["https://srv01.onlineradio.voaplus.com/realfm", "https://srv02.onlineradio.voaplus.com/realfm"],
                "logo": "images/stations/real_radio.png"
            },
            {
                "track": 26,
                "name": "Seth FM",
                "duration": "LIVE",
                "file": "https://listen.radioking.com/radio/384487/stream/435781",
                "logo": "images/stations/seth_fm.png"
            },
            {
                "track": 27,
                "name": "V FM",
                "duration": "LIVE",
                "file": "https://dc1.serverse.com/proxy/fmlanka/stream",
                "logo": "images/stations/v_fm.png"
            }],
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    // Smooth scroll to top before playing
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    
                    // Play the track after a small delay to allow smooth scrolling
                    setTimeout(() => {
                        playTrack(id);
                    }, 300);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                
                // Save current track index to localStorage
                localStorage.setItem('lastPlayedChannel', id);
                
                // Handle arrays of alternative URLs
                const trackUrl = Array.isArray(tracks[id].file) ? tracks[id].file[0] : tracks[id].file;
                audio.src = trackUrl;
                
                // Update station logo
                const logoUrl = tracks[id].logo || 'images/default-station.png';
                $('#station-logo').html(`<img src="${logoUrl}" alt="${tracks[id].name} logo">`);
                
                // Add error handling
                audio.onerror = function() {
                    npAction.text('Error loading stream...');
                    if (Array.isArray(tracks[id].file) && tracks[id].file.length > 1) {
                        audio.src = tracks[id].file[1];
                    }
                };

                // Save volume to localStorage
                audio.addEventListener('volumechange', function() {
                    localStorage.setItem('playerVolume', audio.volume);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };

        // Setup custom controls
        const playBtn = document.querySelector('.play-btn');
        const muteBtn = document.querySelector('.mute-btn');
        const volumeSlider = document.querySelector('.volume-slider');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');

        // Play/Pause
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M6,19h4V5H6V19z M14,5v14h4V5H14z"/>
                    </svg>`;
            } else {
                audio.pause();
                playBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                    </svg>`;
            }
        });

        // Mute
        muteBtn.addEventListener('click', () => {
            if (audio.muted) {
                audio.muted = false;
                muteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                    </svg>`;
            } else {
                audio.muted = true;
                muteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/>
                    </svg>`;
            }
        });

        // Volume
        volumeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            audio.volume = value / 100;
            localStorage.setItem('playerVolume', audio.volume);
            
            // Update mute button state
            if (value == 0) {
                audio.muted = true;
                muteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z"/>
                    </svg>`;
            } else if (audio.muted) {
                audio.muted = false;
                muteBtn.innerHTML = `
                    <svg viewBox="0 0 24 24">
                        <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"/>
                    </svg>`;
            }
        });

        // Next button
        nextBtn.addEventListener('click', () => {
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            if ((index + 1) < trackCount) {
                index++;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                audio.pause();
                index = 0;
                loadTrack(index);
            }
        });

        // Previous button
        prevBtn.addEventListener('click', () => {
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            if ((index - 1) > -1) {
                index--;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            } else {
                index = trackCount - 1;
                loadTrack(index);
                if (playing) {
                    audio.play();
                }
            }
        });

        // Load saved volume
        const savedVolume = localStorage.getItem('playerVolume');
        if (savedVolume !== null) {
            audio.volume = parseFloat(savedVolume);
            volumeSlider.value = audio.volume * 100;
        }

        // Update play button on audio state change
        audio.addEventListener('play', () => {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M6,19h4V5H6V19z M14,5v14h4V5H14z"/>
                </svg>`;
        });

        audio.addEventListener('pause', () => {
            playBtn.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                </svg>`;
        });

        // Initialize with last played track
        loadTrack(index);
    } else {
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
}); 
