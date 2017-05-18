declare var require: NodeRequire;
interface NodeRequire extends WebpackRequire {}
interface WebpackRequire {
  (id: string): any;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure(ids: string[], callback: (req: WebpackRequire) => void, chunkName?: string): void;
  context(directory: string, useSubDirectories?: boolean, regExp?: RegExp): WebpackContext;
}

interface WebpackContext extends WebpackRequire {
  keys(): string[];
}

const moxie = require('plupload/js/moxie.js');
if(!(<any>window).mOxie) {
  (<any>window).mOxie = {
    Env: moxie.core.utils.Env,
    XMLHttpRequest: moxie.xhr.XMLHttpRequest
  };
};
(<any>window).plupload = require('plupload/js/plupload.dev.js');
require('qiniu-js/dist/qiniu.js');
