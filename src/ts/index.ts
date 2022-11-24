import {Game} from "./classes/Game";

(() => {
    const $button = document.querySelector(".firstInteraction");
    const $place:HTMLElement | null = document.querySelector(".gamePlace");
    if ($place && $button) {
        const game = new Game($place ?? document.body);
        $button.addEventListener("click", () => {
            $button.remove();
            game.init();
        });
    }

})();
