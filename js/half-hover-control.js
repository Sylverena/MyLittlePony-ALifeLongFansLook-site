$(document).ready(function () {

    let $grid = $('.content');

    $('.left').hover(
        () => {
            $grid.css('grid-template-columns', '100% 1fr')
        },
        () => {
            $grid.css('grid-template-columns', '50% 1fr')
        }
    )

    $('.right').hover(
        () => {
            $grid.css('grid-template-columns', '0% 1fr')
        },
        () => {
            $grid.css('grid-template-columns', '50% 1fr')
        }
    )

})