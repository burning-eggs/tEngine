namespace TE {
    /**
     * WebGL Context
     */
    export var gl: WebGLRenderingContext

    /**
     * Responsible for creating WebGL context.
     */
    export class GLUtilities {
        /**
         * Initializes WebGL, potentially using the canvas with an assigned ID if it is defined.
         * @param elementId The ID of the element to search for
         * @returns
         */
        public static initialize(elementId?: string): HTMLCanvasElement {
            let canvas: HTMLCanvasElement

            if (elementId !== undefined) {
                canvas = document.getElementById(elementId) as HTMLCanvasElement

                if (canvas === undefined) {
                    throw new Error("Can't find canvas named " + elementId + ".")
                }
            } else {
                canvas = document.createElement("canvas") as HTMLCanvasElement

                document.body.appendChild(canvas)
            }

            gl = canvas.getContext("webgl")

            if (gl === undefined) {
                throw new Error("Unable to initialize WebGL.")
            }

            return canvas
        }
    }
}