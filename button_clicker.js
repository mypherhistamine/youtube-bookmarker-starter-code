// Function to refresh the button click
function refreshButtonClick() {
  var refresh_button = document.querySelector(
    "#optionchain_equity_sp > div > div > div.row.my-2 > div.row.col-12 > div.col-md-7.mb-1 > span:nth-child(4) > a > img"
  );
  if (refresh_button) {
    refresh_button.click();
    console.log("refreshed page");
  }
}

function interceptXHRRequests() {
  console.log("interceptor triggered");

  console.log("openeing request");
  var originalXHROpen = window.XMLHttpRequest.prototype.open;
  console.log("request opened");

  window.XMLHttpRequest.prototype.open = function (method, url) {
    this._method = method;
    this._url = url;
    return originalXHROpen.apply(this, arguments);
  };

  var originalXHRSend = window.XMLHttpRequest.prototype.send;

  window.XMLHttpRequest.prototype.send = function () {
    this.addEventListener("load", function () {
      console.log("xhr requested");
      console.log(this);
      console.log(this.response);
    });

    return originalXHRSend.apply(this, arguments);
  };
}

// Set interval to trigger the function every 1 second (1000 milliseconds)
setInterval(refreshButtonClick, 5000);

interceptXHRRequests();
