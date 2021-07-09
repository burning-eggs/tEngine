namespace TE {

    /**
     * Main engine class.
     */
    export class Engine {
        private _canvas: HTMLCanvasElement

        /**
         * Creates a new engine.
         * @type constructor
         */
        public constructor() {

        }

        /**
         * Starts up the engine.
         * @type void
         */
        public start(): void {
            this._canvas = GLUtilities.initialize();

            gl.clearColor(0, 0, 0, 1)

            this.loop()
        }

        /**
         * Resizes the canvas to fit the window
         * @type void
         */
        public resize(): void {
            if (this._canvas !== undefined) {
                this._canvas.width = window.innerWidth
                this._canvas.height = window.innerHeight
            }
        }

        /**
         * Main loop for the engine.
         * @type void
         */
        private loop(): void {
            gl.clear(gl.COLOR_BUFFER_BIT)

            requestAnimationFrame(this.loop.bind(this))
        }
    }
}