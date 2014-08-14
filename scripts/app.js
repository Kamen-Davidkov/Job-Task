$.fn.toggleArticles = function () {
    var $container = $('.container');

    $container.find('h1, img').click(function () {
        var $this = $(this);
        var $currentP = $this.siblings('p');

        if ($currentP.css('display') == 'none') {
            $currentP.slideDown(600);
        }
        else {
            $currentP.slideUp(600);
        }
        $this.parent().children('img').toggle();
    });
};

//Не успях да се справя с допълнителните условия относно процесите, изпълнявани
//на сървъра (както и на компютъра) и нямаше какво да използвам, за да направя
//асинхронно програмиране с промиси. Затова съм дал следния кратък пример:

function ajaxDemo(num) {
    var def = $.Deferred();
    setTimeout(function () {
        def.resolve(num * num);
    }, 5000);
    return def.promise();
};

ajaxDemo(5)
    .then(function (result) {
        console.log(result);
        return result;
    })
    .then(function (result) {
        console.log(result / result);
    })

$(document).ready(function () {
    $('.main').toggleArticles();
});