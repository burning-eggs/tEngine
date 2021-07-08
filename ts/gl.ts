namespace TE {
    export var gl: WebGLRenderingContext

    export class GLUtilities {
        public static initialize(elementId?: string): void {
            let canvas: HTMLCanvasElement

            if (elementId !== undefined) {
                canvas = document.getElementById(elementId) as HTMLCanvasElement

                if (canvas === undefined) {
                    throw new Error("Can't find canvas named " + elementId + ".")
                }
            } else {
                canvas = document.createElement("canvas") as HTMLCanvasElement
            }
        }
    }
}