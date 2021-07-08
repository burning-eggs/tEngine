namespace TE {

    /**
     * Main engine class.
     */
    export class Engine {
        private _canvas: HTMLCanvasElement

        /**
         * Creates a new engine.
         */
        public constructor() {

        }

        /**
         * Starts up the engine.
         */
        public start(): void {
            this._canvas = GLUtilities.initialize();

            gl.clearColor(0, 0, 0, 1)

            this.loop()
        }

        /**
         * Main loop for the engine.
         */
        private loop(): void {
            gl.clear(gl.COLOR_BUFFER_BIT)

            requestAnimationFrame(this.loop.bind(this))
        }
    }
}