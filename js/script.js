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
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            tracks = [{
                "track": 1,
                "name": "Sirasa FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:8087/index.html"
            },
            {
                "track": 2,
                "name": "Ran FM",
                "duration": "LIVE",
                "file": "http://207.148.74.192:7860/ran.mp3"
            },
            {
                "track": 3,
                "name": "Y FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:7032/index.html"
            },
            {
                "track": 4,
                "name": "Siyatha FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/siyathafm"
            },
            {
                "track": 5,
                "name": "Hiru FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/hirufmgarden"
            },
            {
                "track": 6,
                "name": "Shaa FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/shaafmgarden"
            },
            {
                "track": 7,
                "name": "Neth FM",
                "duration": "LIVE",
                "file": "https://cp11.serverse.com/proxy/nethfm/stream"
            },
            {
                "track": 8,
                "name": "ITN FM",
                "duration": "LIVE",
                "file": ["https://cp12.serverse.com/proxy/itnfm/stream", "https://www.surfmusic.de/radio-station/itn-fm-93-5,19750.html"]
            },
            {
                "track": 9,
                "name": "Lakhanda Radio",
                "duration": "LIVE",
                "file": "https://cp12.serverse.com/proxy/itnfm?mp=/stream"
            },
            {
                "track": 10,
                "name": "The Buddhist Radio",
                "duration": "LIVE",
                "file": "http://uk7freenew.listen2myradio.com:22086/listen.pls"
            },
            {
                "track": 11,
                "name": "Rhythm FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/rhythmfm"
            },
            {
                "track": 12,
                "name": "Kiss FM",
                "duration": "LIVE",
                "file": "https://srv01.onlineradio.voaplus.com/kissfm"
            },
            {
                "track": 13,
                "name": "Sooriyan FM",
                "duration": "LIVE",
                "file": "https://radio.lotustechnologieslk.net:2020/stream/sooriyanfmgarden/"
            },
            {
                "track": 14,
                "name": "Yes FM",
                "duration": "LIVE",
                "file": "https://mbc.thestreamtech.com:7056/index.html/stream"
            },
            {
                "track": 15,
                "name": "Kothmale FM",
                "duration": "LIVE",
                "file": "https://s46.myradiostream.com:11156/listen.mp3"
            },
            {
                "track": 16,
                "name": "Colour Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/uo3gmts0ilivv"
            },
            {
                "track": 17,
                "name": "Parani Gee Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/18wvhnvmd18uv"
            },
            {
                "track": 18,
                "name": "EDM FM Sri Lanka",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/ucqkp3kcmzzuv"
            },
            {
                "track": 19,
                "name": "Free FM",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/1tcs4fbw7rquv"
            },
            {
                "track": 20,
                "name": "Rangiri Sri Lanka Radio",
                "duration": "LIVE",
                "file": "https://stream.zeno.fm/wgp8fr3f4p8uv"
            },
            {
                "track": 21,
                "name": "Tharu FM",
                "duration": "LIVE",
                "file": "https://ec3.yesstreaming.net:2655/stream"
            },
            {
                "track": 22,
                "name": "Shree FM",
                "duration": "LIVE",
                "file": "http://207.148.74.192:7860/stream2.mp3"
            },
            {
                "track": 23,
                "name": "Derana FM",
                "duration": "LIVE",
                "file": "https://player.twitch.tv/js/embed/v1.js"
            },
            {
                "track": 24,
                "name": "Shakthi FM",
                "duration": "LIVE",
                "file": "http://live.trusl.com:1160/;"
            },
            {
                "track": 25,
                "name": "Real Radio",
                "duration": "LIVE",
                "file": ["https://srv01.onlineradio.voaplus.com/realfm", "https://srv02.onlineradio.voaplus.com/realfm"]
            },
            {
                "track": 26,
                "name": "Seth FM",
                "duration": "LIVE",
                "file": "https://listen.radioking.com/radio/384487/stream/435781"
            },
            {
                "track": 27,
                "name": "V FM",
                "duration": "LIVE",
                "file": "https://dc1.serverse.com/proxy/fmlanka/stream"
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
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = tracks[id].file;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        loadTrack(index);
    } else {
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }

    var scripts = $('script');
    for(script in scripts) {
        if(script.$('script').attr("style") !== 'script') {
            script.before("<!--").after("-->");
        }
    }
 
}); 
