import { join,dirname } from "path";
import { fileURLToPath } from "url";


import CleanWebpackPlugin from "../src/clean-webpack-plugin.js";

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
    entry: join(__dirname, './index.js'),
    mode: 'none',
    plugins: [
        new CleanWebpackPlugin()
    ],
    output: {
        path: join(__dirname, './output'),
        filename: 'demo1.js'
    }
}