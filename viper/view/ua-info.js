module.exports = (render, model) => render`
<p>
  <small> Your user agent string is: </small><br>
  ${model.userAgent}
</p>`;
