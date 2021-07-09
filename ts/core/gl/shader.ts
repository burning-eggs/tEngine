namespace TE {
    /**
     * Represents a WebGL Shader.
     */
    export class Shader {
        private _name: string

        /**
         * Creates a new shader.
         * @param name The name of the shader.
         * @param vertexSource The source of the vertex shader file.
         * @param fragmentSource The source of the fragment shader file.
         */
        public constructor(name: string, vertexSource: string, fragmentSource: string) {
            this._name = name
            let vertexShader = this.loadShader(vertexSource, gl.VERTEX_SHADER)
            let fragmentShader = this.loadShader(fragmentSource, gl.FRAGMENT_SHADER)
        }

        /**
         * Get the name of the shader.
         */
        public get name(): string {
            return this._name;
        }

        private loadShader(source: string, shaderType: number): WebGLShader {
            let shader: WebGLShader = gl.createShader(shaderType)

            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            
            let error = gl.getShaderInfoLog(shader)
            if (error !== undefined) {
                throw new Error("Error while compiling shader " + this._name + ": " + error)
            }

            return shader
        }
    }
}