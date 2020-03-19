
(function (d, w) {
    var  s = d.createElement('script'),
        f = function() {document.body.appendChild(s);};
    var container = 'partner_form_napishem';
    var charset = document.characterSet ? document.characterSet : document.charset;
    s.async = false;
    s.src = 'https://partner.napishem.ru/widget.js?id=3047&c=' + container + '&charset=' + charset;
    if (w.opera == '[object Opera]') return d.addEventListener('DOMContentLoaded', f, false);
    w.addEventListener('load', f);
})(document, window);



var linkShow = document.querySelector(".show-more");
var columnSubject = document.querySelector(".last-column-subject");
var linkHide = document.querySelector(".show-less");

linkShow.addEventListener("click", function(event){
        event.preventDefault();
        columnSubject.classList.add("display-subjects");
        linkShow.classList.add("no-display-linkShow");
        linkHide.classList.add("display-linkHide");
    }
)

linkHide.addEventListener("click", function(event) {
        event.preventDefault();
        columnSubject.classList.remove("display-subjects");
        linkHide.classList.remove("display-linkHide");
        linkShow.classList.remove("no-display-linkShow");
    }
)
