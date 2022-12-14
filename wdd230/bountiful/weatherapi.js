
'use strict';

let weatherWidget = {
    settings: {
        api_key: 'e114ec33c16d6d8855cb557b0a294d70',
        weather_url: 'https://api.openweathermap.org/data/2.5/weather',
        forecast_url: 'https://api.openweathermap.org/data/2.5/forecast',
        search_type: 'city_name',
        city_name: '',
        units: 'metric',
        icon_mapping: {
            '01d': 'wi-day-sunny',
            '01n': 'wi-day-sunny',
            '02d': 'wi-day-cloudy',
            '02n': 'wi-day-cloudy',
            '03d': 'wi-cloud',
            '03n': 'wi-cloud',
            '04d': 'wi-cloudy',
            '04n': 'wi-cloudy',
            '09d': 'wi-rain',
            '09n': 'wi-rain',
            '10d': 'wi-day-rain',
            '10n': 'wi-day-rain',
            '50d': 'wi-fog',
            '50n': 'wi-fog'
        }
    },
    constant: {
        dow: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
};

weatherWidget.init = function (settings) {
    this.settings = Object.assign(this.settings, settings);
    Promise.all([this.getWeather(), this.getForecast()]).then((resolve) => {
        let weather = resolve[0];
        let forecast = resolve[1].list;

       

        document.getElementsByClassName('city-name')[0].innerHTML = weather.name;
        document.getElementsByClassName('temp-current')[0].innerHTML = '<b>'+ Math.round((weather.main.temp*9/5)+32) + '&deg F</b';
        document.getElementsByClassName('pressure')[0].innerHTML = 'Pressure:<b>' + weather.main.pressure + 'hPa </b>';
        document.getElementsByClassName('humidity')[0].innerHTML = 'Humidity: <b>'+ weather.main.humidity + '% </b>';
        document.getElementsByClassName('wind')[0].innerHTML = 'Wind: <b>'+ weather.wind.speed + ' km/h </b>';
        if (!!this.settings.icon_mapping[weather.weather[0].icon]) {
            let icon = this.settings.icon_mapping[weather.weather[0].icon];
            let ico_current =  document.getElementsByClassName('ico-current')[0];
            if (ico_current.classList) {
                ico_current.classList.add(icon);
            } else {
                ico_current.className += ' ' + icon;
            }

        }

      

        // remove todays weather from forecast
        forecast = forecast.filter((x) => {
            return x.dt_txt.substr(0, 10) !== new Date().toJSON().slice(0, 10);
        });

        // array to hold forecast items
        let fs = [];

        for (let f of forecast) {
            let date = f.dt_txt.substr(0, 10);
            if (!!fs[date]) {
                fs[date].temp_max = f.main.temp_max > fs[date].temp_max ? f.main.temp_max : fs[date].temp_max;
                fs[date].temp_min = f.main.temp_min < fs[date].temp_min ? f.main.temp_min : fs[date].temp_min;
                fs[date].icons.push(f.weather[0].icon);
            } else {
                fs[date] = {
                    dow: this.constant.dow[new Date(date).getDay()],
                    temp_max: f.main.temp_max,
                    temp_min: f.main.temp_min,
                    icons: [f.weather[0].icon]
                }
            }
        }

        let forecast_items = document.getElementsByClassName('forecast-item');

        // for each daily forecast, get weather icon with highest occurence
        // show the foreacast
        let counter = 0;
        for (let day in fs) {
            let icon = this.settings.icon_mapping[this.getIconWithHighestOccurence(fs[day].icons)];
            let fi = forecast_items[counter];
            fi.getElementsByClassName('max')[0].innerHTML = '<b>' + Math.round((fs[day].temp_max*9/5)+32) + '&deg F </b>';
            fi.getElementsByClassName('min')[0].innerHTML = '<br><b>' + Math.round((fs[day].temp_min*9/5)+32) + '&deg F </b>';
            fi.getElementsByClassName('day')[0].innerHTML = fs[day].dow;
            let ico_current =  fi.getElementsByClassName('icon')[0];
            if (ico_current.classList) {
                ico_current.classList.add(icon);
            } else {
                ico_current.className += ' ' + icon;
            }
            counter++;
        }

    });
};

weatherWidget.getForecast = function () {
    let params = {
        'q': this.settings.city_name,
        'APPID': this.settings.api_key,
        'units': this.settings.units
    };

    let p = '?' + Object.keys(params)
            .map((key) => {
                return key + '=' + params[key]
            })
            .join('&');
    return this.makeRequest(this.settings.forecast_url, p);
};

weatherWidget.getWeather = function () {
    let params = {
        'q': this.settings.city_name,
        'APPID': this.settings.api_key,
        'units': this.settings.units
    };

    let p = '?' + Object.keys(params)
            .map((key) => {
                return key + '=' + params[key]
            })
            .join('&');
    return this.makeRequest(this.settings.weather_url, p);
};

weatherWidget.makeRequest = function (url, params) {
    return new Promise(function (resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', url + params, true);
        req.responseType = 'json';

        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                resolve(req.response);
            } else {
                reject(Error(req.status));
            }
        };

        req.onerror = () => reject('Error occured while connecting to Weather API');
        req.send(params);
    });
};

weatherWidget.getIconWithHighestOccurence = function (a) {
    let elems = Array.prototype.slice.call(a);
    return elems.sort((a, b) =>
        elems.filter(v => v === a).length - elems.filter(v => v === b).length
    ).pop();
}

// run the widget
let widget = Object.create(weatherWidget);
widget.init({
  city_name: 'Carlsbad,'
});