var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  var domain = window.location.hostname;
  console.log(domain);

  var getLink = "http://api.notif.site/box/" + domain

  if (domain) {
    try {

      getJSON(getLink,
        function (err, data) {
          if (err !== null) {
            console.log(err);
          } else {
            var BoxAtt = data.data;
            var el = document.querySelector('body');
            var htmlBox = '<div class="boxBarTop" style="background-color: ' + BoxAtt.backgroundColor + ';"> <p class="boxText" style="color:' + BoxAtt.textColor + '"> ' + BoxAtt.text + ' </p></div>'
            el.innerHTML =  htmlBox + el.innerHTML;
          }
        })
    } catch (error) {
      console.log(error)
    }
  } else {

    pass

  }

