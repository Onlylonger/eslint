import { deleteSync } from 'del';

class CleanWebpackPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    if (!compiler.options.output) {
      console.warn('@shilong/clean-webpack-plugin: options.output.path not defined. Plugin disabled...');
      return;
    }
    this._outputDir = compiler.options.output.path;

    const { hooks } = compiler;

    hooks.emit.tap('clean-webpack-plugin', (compilation) => {
      // this.handleInitial(compilation);
      deleteSync(['**/*'], {
        cwd: this._outputDir,
      });
    });

    hooks.done.tap('clean-webpack-plugin', (stats) => {
      console.log('finished!!');
    });
  }
}

CleanWebpackPlugin.version = 1;

export default CleanWebpackPlugin;
