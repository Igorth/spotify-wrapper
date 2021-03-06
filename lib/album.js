"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumsTracks = exports.getAlbums = exports.getAlbum = void 0;

var _config = _interopRequireDefault(require("./config"));

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAlbum = function getAlbum(id) {
  fetch("".concat(_config["default"], "/albums/").concat(id)).then(_utils["default"]);
};

exports.getAlbum = getAlbum;

var getAlbums = function getAlbums(ids) {
  fetch("".concat(_config["default"], "/albums/?ids=").concat(ids)).then(_utils["default"]);
};

exports.getAlbums = getAlbums;

var getAlbumsTracks = function getAlbumsTracks(id) {
  fetch("".concat(_config["default"], "/albums/").concat(id, "/tracks")).then(_utils["default"]);
};

exports.getAlbumsTracks = getAlbumsTracks;