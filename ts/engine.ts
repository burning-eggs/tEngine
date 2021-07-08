namespace TE {

    /**
     * Main engine class.
     */
    export class Engine {
        private _count: number = 0

        /**
         * Creates a new engine.
         */
        public constructor() {

        }

        /**
         * Starts up the engine.
         */
        public start(): void {
            GLUtilities.initialize();

            this.loop()
        }

        /**
         * Main loop for the engine.
         */
        private loop(): void {
            this._count++;

            document.title = this._count.toString()

            requestAnimationFrame(this.loop.bind(this))
        }
    }
}