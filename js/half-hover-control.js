$(function () {

    let $grid = $('.content');

    setTimeout(() => {  // todo slow animation

        let $left = $('.left');
        $left.hover(
            () => {
                $left.css('font-size', '5em');
                $grid.css('grid-template-columns', '100% 1fr');
            },
            () => {
                $left.css('font-size', '2.5em');
                $grid.css('grid-template-columns', '50% 1fr');
            }
        )

        let $right = $('.right');
        $right.hover(
            () => {
                $right.css('font-size', '5em');
                $grid.css('grid-template-columns', '0% 1fr');
            },
            () => {
                $right.css('font-size', '2.5em');
                $grid.css('grid-template-columns', '50% 1fr');
            }
        )
    }, 1500)

})