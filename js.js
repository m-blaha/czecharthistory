var _timeline;
var _EVENTS;
var popup_tmpl;
var event_tmpl;
var audioElement;


function TimeLine(startDate, endDate)
{
	var _startDate = startDate;
	var _endDate = endDate;

	this.getLength = function(endDate)
	{
		return dayDiff(_startDate, _endDate);
	}

	this.getDateDistance = function(date)
	{
		return dayDiff(_startDate, date);
	}

	this.endDate = function()
	{
		return _endDate;
	}

	this.startDate = function()
	{
		return _startDate;
	}


    function dayDiff(first, second)
	{
		return Math.floor((second-first)/(1000*60*60*24));
	}
}


function parseDate(str)
{
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[1]-1, mdy[0]);
}


function formatDate(date)
{
    var month = date.getMonth() + 1;
    var result = date.getDate() + "/"

    if (month < 10)
    {
        result += "0"
    }

    result += month + "/" + date.getYear();

    return result;
}


function addEvent(event, event_index)
{
    var d_start=parseDate(event.start);
    var d_end=parseDate(event.end);

    if (d_end<_timeline.startDate()) {
        return document.createElement('div');
    };

    event.years=d_start.getFullYear();
    if (d_end.getFullYear() != d_start.getFullYear())
        event.years = event.years + " - " + d_end.getFullYear();
    div = event_tmpl(event);

    var outer_div = document.createElement('div');
    outer_div.setAttribute('data-eventindex', event_index);
    outer_div.setAttribute('class', 'event ' + event.cls);
    outer_div.style.top = _timeline.getDateDistance(d_start) * DAY_PIXEL_LENGTH + "px";
    outer_div.style.height = (_timeline.getDateDistance(d_end) - _timeline.getDateDistance(d_start)) * DAY_PIXEL_LENGTH + "px";
    outer_div.style.marginLeft = (event.opt_c*200 + _.random(0,100)) + "px";
    outer_div.innerHTML = div;

    var container = document.getElementById("divEventContainer");
    container.appendChild(outer_div);

    return outer_div;
}


function addYear(year)
	{
		var div = document.createElement('div');
		div.innerHTML = "<p><center><b>" + year + "</b></center></p>";

		div.setAttribute('class', 'timeLineYear');

		div.style.top = _timeline.getDateDistance(new Date(year, 0, 1)) * DAY_PIXEL_LENGTH + "px";

		var container = document.getElementById("divTimeLine");

		container.appendChild(div);
	}



function scroll_event(parent) {
    var ep=$(parent);
    var ei=$('.inner', ep);

    var ST=$(window).scrollTop();
    var Sh=$(window).height();
    var PT=ep.offset().top;
    var Ph=ep.height();
    var Eh=ei.height();

    var scroll = 0;
    var progress = 0;

    if (ST < PT-Sh) {
        scroll = Sh+1000;
    } else if (ST > PT+Ph) {
        scroll = ST - Eh - 1000;
    } else {
        progress = (ST-(PT-Sh))/(Ph+Sh);
        scroll = Math.round((Ph-Eh)*progress);
        scroll = scroll - (ST-PT);
    }

    ei.css("top", scroll + "px");
}

function scroll(e) {
    _.each(_EVENTS, scroll_event);
}







function init_timeline()
	{
		var timeline_start = parseDate(TIME_START);
		var timeline_end = parseDate(TIME_END);

		_timeline = new TimeLine(timeline_start, timeline_end);
		var length = _timeline.getLength();

		// resize container
		var container = document.getElementById("divTimeLineContainer");
		container.style.height = length * DAY_PIXEL_LENGTH + "px";

		// add timeline... lines
		var timeline_line = new Date(timeline_start.getYear(), 0, 1);

		while(timeline_line.getFullYear() <= _timeline.endDate().getFullYear())
		{
			addYear(timeline_line.getFullYear())
			timeline_line.setFullYear(timeline_line.getFullYear() + 1);
		}

	}



function init_data(eventData)
{
    _EVENTS = _.map(eventData, addEvent);
}


function init_music()
{
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'kytice_lzi_04.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    $(".audio-play").text($(".audio-play").data('pause'));
}


function init(events)
{
    popup_tmpl = _.template($("#popup_tmpl").html());
    event_tmpl = _.template($("#event_tmpl").html());
    init_timeline();
    init_data(events);
    init_music();
    scroll();
    $(window).scroll(scroll);
}

