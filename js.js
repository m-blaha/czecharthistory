function TimeLine(startDate, endDate)
{
	var _startDate = startDate
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


function addEvent(type, startDate, endDate, text)
{
    var div = document.createElement('div');
    div.innerHTML = "<div class=\"inner\"><p><b>" + startDate + " - " + endDate + "</b><br>" + text + "</p></div>";

    div.setAttribute('class', 'timeLineEvent');

    div.style.top = _timeline.getDateDistance(parseDate(startDate)) * DAY_PIXEL_LENGTH + "px";
    div.style.height = (_timeline.getDateDistance(parseDate(endDate)) - _timeline.getDateDistance(parseDate(startDate))) * DAY_PIXEL_LENGTH + "px";
    div.style.backgroundColor = getRandomColor();

    var container;

    switch (type)
    {
        case EVENT_TYPE.LIFE:
            div.style.right = "10px";
            container = document.getElementById("divLeftEventContainer");;
            break;
        case EVENT_TYPE.CAREER:
            div.style.left = "10px";
            container = document.getElementById("divRightEventContainer");;
            break;
        default:
            break;
    }

    container.appendChild(div);

    return div;
}


function addYear(year)
	{
		var div = document.createElement('div');
		div.innerHTML = "<p><center><b>" + year + "</b></center></p>";

		div.setAttribute('class', 'timeLineYear');

		div.style.top = _timeline.getDateDistance(new Date(year, 0, 1)) * DAY_PIXEL_LENGTH + "px";
		div.style.width = _timelineWidth + "px";

		var container = document.getElementById("divTimeLine");

		container.appendChild(div);
	}



function randomBool()
{
	var result = false;

	if (Math.random() > 0.5)
	{
		result = true;
	}

	return result;
}


function randomFloat(min, max)
{
	var result = min;

	if (max > min)
	{
		var difference = (max) - min;
		difference = Math.random() * difference;

		result = min + difference;

		if (result > max)
		{
			result = max;
		}
	}

	return result;
}


function randomInteger(min, max)
{
	var result = min;

	if (max > min)
	{
		var difference = (max + 1) - min;
		difference = Math.random() * difference;
		difference = Math.floor(difference);

		result = min + difference;

		if (result > max)
		{
			result = max;
		}
	}

	return result;
}


// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor()
{
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}




function getElementWidth(element)
{
	if (typeof element.clip !== "undefined")
	{
		return element.clip.width;
	}
	else
	{
		if (element.style.pixelWidth)
		{
			return element.style.pixelWidth;
		}
		else
		{
			return element.offsetWidth;
		}
	}
}


function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

function relative_scroll(parent) {
    var ep=$(parent);
    var ei=$('.inner', ep);

    var ST=$(window).scrollTop();
    var Sh=$(window).height();
    var PT=getPosition(parent);
    var Ph=ep.height();
    var Eh=ei.height();

    var scroll = 0;
    var progress = 0;

    if (ST < PT-Sh) {
        scroll = 0;
    } else if (ST > PT+Ph) {
        scroll = Ph - Eh;
    } else {
        progress = (ST-(PT-Sh))/(Ph+Sh);
        scroll = Math.round((Ph-Eh)*progress);
    }

    ei.css("margin-top", scroll + "px");
}

function scroll() {
    for (var i = 0; i < _emptyArray.length; i++) {
        var parent=_emptyArray[i];
        relative_scroll(parent);
    }
}










var TIME_START = "01/01/1970";
var TIME_END = "01/01/2017";
var DAY_PIXEL_LENGTH = 0.5

var EVENT_TYPE = {	LIFE:0,
                    CAREER:1};

var _timeline;
var _containerWidth;
var _timelineWidth;
var _emptyArray;
var _lastScrollPosition;

eventData = [
    {"title": "test", "date": "01/01/1985", "endDate": "31/12/2001", "type": 0}
    ]



function init()
	{
		var timeline_start = parseDate(TIME_START);
		var timeline_end = parseDate(TIME_END);

		_timeline = new TimeLine(timeline_start, timeline_end);
		var length = _timeline.getLength();

		var right_container = document.getElementById("divRightEventContainer");
		_containerWidth = getElementWidth(right_container);

		var timeline_container = document.getElementById("divTimeLine");
		_timelineWidth = getElementWidth(timeline_container);

        total_empties = 0;
		_emptyArray = new Array(total_empties);

		// add events
		for (var i = 0; i < eventData.length; i++)
		{
            _emptyArray[i] = addEvent(eventData[i].type, eventData[i].date, eventData[i].endDate, eventData[i].title);
		}

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


